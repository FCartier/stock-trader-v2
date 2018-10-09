import { call, put, takeEvery } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import io from "socket.io-client";
import { priceReceived } from "./priceActions"

import { SELECTED_SYMBOL } from "../search/searchActions";

const SUBSCRIPTION_ENDPOINT = 'https://ws-api.iextrading.com/1.0/tops' 

let socket;  // Declared outside to avoid re-init


function connect(symbol) {
  return eventChannel(emit => {
    if (!socket || socket.disconnected) {             // if there is no socket or it is disconnected (first case scenario)
      socket = io(SUBSCRIPTION_ENDPOINT);
      socket.on("connect", () => {                    // socket connects to server
        socket.emit("subscribe", symbol);             // socket subscribes to endpoint with specific symbol
        socket.on("message", data => {                // function triggered on each message received 
          priceReceivedHandler(emit, data);           // pricehandler dispatched 
        });
      });
      socket.on('connect_error', (err) => {
        console.log(err)
        emit(END)                                     // end - close and unsubscribe from channel
      });
    } else {
      socket.emit("subscribe", symbol);               // if a different symbol is selected
    }
    return () => socket && socket.close();
  })
}

function priceReceivedHandler(emit, data) {
  const { lastSalePrice, symbol } = JSON.parse(data)
  console.log(data)
  emit(priceReceived(lastSalePrice))
}


function* subscribeToSymbol({ payload }) {
  const channel = yield call(connect, payload);
  yield takeEvery(channel, put);
}

export function* priceWebsocketWatcher() {
  yield takeEvery(SELECTED_SYMBOL, subscribeToSymbol);
}