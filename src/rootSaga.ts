import { all, fork, put, take, call } from "redux-saga/effects";
import {api} from './utils/apiUtil'
import { chartWatcher, filterChartWatcher } from "./components/chart/chartSaga"
import { marketWatcher } from "./components/footer/marketSaga";
import { keyStatsWatcher } from "./components/keystats/keyStatsSaga";
import { newsWatcher } from "./components/news/newsSaga";
import { overviewWatcher } from "./components/overview/overviewSaga";
import { peerWatcher } from "./components/peers/peerSaga";
import { priceWebsocketWatcher } from "./components/price/priceWebsocket";

export const APP_STARTED = "APP_STARTED";
export const FETCH_SYMBOLS_SUCCESS = "FETCH_SYMBOLS_SUCCESS"


export function* appStartedWorker() {
    yield take([APP_STARTED]);
    try {
      const symbols = yield call(api.getSymbols);
      yield put({ type: FETCH_SYMBOLS_SUCCESS, payload: symbols });
    } catch {
      console.log("Unable to fetch symbols")
    }
}


export function* root() {
  yield all([
    fork(appStartedWorker),
    fork(chartWatcher),
    fork(filterChartWatcher), 
    fork(marketWatcher), 
    fork(keyStatsWatcher), 
    fork(newsWatcher), 
    fork(overviewWatcher), 
    fork(peerWatcher),
    fork(priceWebsocketWatcher)
  ]);
  yield put(onAppStart());
}


const onAppStart = () => ({ type: APP_STARTED });