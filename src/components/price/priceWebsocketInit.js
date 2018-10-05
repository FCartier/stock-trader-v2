import { call, take, put, fork } from "redux-saga/effects";
import { eventChannel } from "redux-saga"
import io from 'socket.io-client';


function connect() {
    const socket = io('https://ws-api.iextrading.com/1.0/tops');
    return new Promise(resolve => {
      socket.on('connect', () => {
        socket.emit('subscribe', 'aac', data => console.log(`Subscribed: ${data}`))
        resolve(socket);
      });
    });
  }
  
  function subscribe(socket) {
    return eventChannel(emit => {
      socket.on('message', (data) => {
          console.log(data)
         priceRecieved(data)
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

export function* priceWebSocket() {
  while (true) {
    const socket = yield call(connect);
    const task = yield fork(read, socket);
  }
}


function priceRecieved(payload){
    type: "RECEIVED_NEW_PRICE"
    payload
}
