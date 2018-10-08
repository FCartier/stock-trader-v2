import { call, take, put, fork, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import io from "socket.io-client";
import { shouldDispatchPrice } from "./utils/shouldDispatchPrice"
import { priceReceived } from "./priceActions"

import { SELECTED_SYMBOL } from "../search/searchActions";

function connect(symbol) {
  const socket = io("https://ws-api.iextrading.com/1.0/tops");
  return new Promise(resolve => {
    socket.on("connect", () => {
      socket.emit("subscribe", symbol);
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on("message", data => {
      const { lastSalePrice } = JSON.parse(data);
      shouldDispatchPrice(lastSalePrice)
        ? emit(priceReceived(lastSalePrice))
        : null;  
    });
    return () => {};
  });
}


function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* priceWebsocket({ payload }) {
  while (true) {
    const socket = yield call(connect, payload);
    yield fork(read, socket);
  }
}

export function* priceWebsocketWatcher() {
  yield takeLatest(SELECTED_SYMBOL, priceWebsocket);
}

