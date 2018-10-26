import { call, put, takeEvery } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import io from "socket.io-client";
import { priceReceived, PriceAction } from "./priceActions"
import { SELECTED_SYMBOL } from "../search/searchActions";

const SUBSCRIPTION_ENDPOINT = 'https://ws-api.iextrading.com/1.0/tops' 

let socket: any;  
let currentSymbol: string;

const priceReceivedHandler = (emit: (fn: PriceAction)=>void, rawData: string) => {
  const data = JSON.parse(rawData)
  console.log(data)
  if (data.symbol !== currentSymbol){
    console.log("outdated data received", data)
    return 
  }

  if (data.lastSalePrice !== 0){
    emit(priceReceived(data))
  }
}

function connect(symbol: string) {
  return eventChannel(emit => {
    if (!socket || socket.disconnected) { 
      currentSymbol = symbol 
      socket = io(SUBSCRIPTION_ENDPOINT);
      socket.on("connect", () => {   
        socket.emit("subscribe", symbol); 
        socket.on("message", (data: string) => priceReceivedHandler(emit, data));
      });
      socket.on('connect_error', (err: string) =>  emit(END)) 
    } else {
      socket.emit('unsubscribe', currentSymbol)
      currentSymbol = symbol;
      socket.emit("subscribe", symbol); 
    }
    return () => socket && socket.close();
  })
}

function* subscribeToSymbol({ payload }: PriceAction) {
  const channel = yield call(connect, payload);
  yield takeEvery(channel, put);
}

export function* priceWebsocketWatcher() {
  yield takeEvery(SELECTED_SYMBOL, subscribeToSymbol);
}