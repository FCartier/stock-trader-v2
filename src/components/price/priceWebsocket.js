import { call, put, takeEvery } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import io from "socket.io-client";
import { priceReceived, fetchStaticPrice } from "./priceActions"

import { SELECTED_SYMBOL } from "../search/searchActions";

const SUBSCRIPTION_ENDPOINT = 'https://ws-api.iextrading.com/1.0/tops' 

let socket;  
let currentSymbol;

const priceReceivedHandler = emit => rawData => {
  const data = JSON.parse(rawData);
  if (data.symbol !== currentSymbol) {
    console.log('outdated data received', data);
    return;
  }
  priceReceivedHandler(emit, data);   
  if (data.askPrice == 0){
    console.log(data)
    emit(fetchStaticPrice(data.symbol))
  } else {
    emit(priceReceived(data))
  }
}

function connect(symbol) {
  return eventChannel(emit => {
    if (!socket || socket.disconnected) { 
      currentSymbol = symbol 
      socket = io(SUBSCRIPTION_ENDPOINT);
      socket.on("connect", () => {   
        socket.emit("subscribe", symbol); 
        socket.on("message", priceReceivedHandler(emit));
      });
      socket.on('connect_error', err =>  emit(END)) 
    } else {
      socket.emit('unsubscribe', currentSymbol)
      currentSymbol = symbol;
      socket.emit("subscribe", symbol); 
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