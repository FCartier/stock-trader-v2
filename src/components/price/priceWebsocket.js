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
  if (data.lastSalePrice !== 0){
    emit(priceReceived(data))
  } 
}

function connect(symbol) {
  let sentMessage = false;
  console.log("hello")
  return eventChannel(emit => {
    if (!socket || socket.disconnected) { 
      currentSymbol = symbol 
      socket = io(SUBSCRIPTION_ENDPOINT);
      socket.on("connect", () => {   
        socket.emit("subscribe", symbol); 
        //socket.on("message", priceReceivedHandler(emit));
        testPriceComponent(emit)
        sentMessage = true;
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

function testPriceComponent(emit) {
  setTimeout(() => setInterval(function(){
    const randomNumber = Math.floor((Math.random()*10)+10)
    emit(priceReceived({askPrice: randomNumber}))
  }, 200), 400)
}

function* subscribeToSymbol({ payload }) {
  const channel = yield call(connect, payload);
  yield takeEvery(channel, put);
}

export function* priceWebsocketWatcher() {
  yield takeEvery(SELECTED_SYMBOL, subscribeToSymbol);
}