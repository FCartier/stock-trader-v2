import { call, put, takeEvery } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import io from "socket.io-client";
import { priceReceived } from "./priceActions"

import { SELECTED_SYMBOL } from "../search/searchActions";

const SUBSCRIPTION_ENDPOINT = 'https://ws-api.iextrading.com/1.0/tops' 

let socket;  // Declared outside to avoid re-init
let currentSymbol;

const priceReceivedHandler = emit => rawData => {
  const data = JSON.parse(rawData);
  if (data.symbol !== currentSymbol) {
    console.log('outdate data received', data);
    return;
  }
  priceReceivedHandler(emit, data);  // pricehandler dispatched 
  emit(priceReceived(data.lastSalePrice.toFixed(2)))
}

function connect(symbol) {
  return eventChannel(emit => {
    if (!socket || socket.disconnected) { 
      currentSymbol = symbol // if there is no socket or it is disconnected (first case scenario)
      socket = io(SUBSCRIPTION_ENDPOINT);
      socket.on("connect", () => {   
        socket.emit("subscribe", symbol); // socket subscribes to endpoint with specific symbol
        socket.on("message", priceReceivedHandler(emit));
      });
      socket.on('connect_error', err =>  emit(END)) // end - close and unsubscribe from channel
    } else {
      socket.emit('unsubscribe', currentSymbol)
      currentSymbol = symbol;
      socket.emit("subscribe", symbol); // if a different symbol is selected
    }
    return () => socket && socket.close();
  })
}

function* subscribeToSymbol({ payload }) {
  const channel = yield call(connect, payload);
  yield takeEvery(channel, put);
}

export function* priceWebsocketWatcher() {
  yield takeEvery(SELECTED_SYMBOL, subscribeToSymbol);
}