import { all, fork, put, take, call } from "redux-saga/effects";
import {api} from './utils/apiUtil'
import { chartWatcher, filterChartWatcher } from "./components/chart/chartSaga"
import { marketWatcher } from "./components/footer/marketSaga";
import { keyStatsWatcher } from "./components/keystats/keyStatsSaga";
import { newsWatcher } from "./components/news/newsSaga";
import { overviewWatcher } from "./components/overview/overviewSaga";
import { peerWatcher } from "./components/peers/peerSaga";
import { priceWatcher } from "./components/price/priceSaga";

export const APP_STARTED = "APP_STARTED";
export const FETCH_SYMBOLS_SUCCESS = "FETCH_SYMBOLS_SUCCESS"


function* appStartedWorker() {
    yield take([APP_STARTED]);
    const symbols = yield call(api.getSymbols);
    yield put({ type: FETCH_SYMBOLS_SUCCESS, payload: symbols });
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
    fork(priceWatcher)
  ]);
  yield put(onAppStart());
}



const onAppStart = () => ({ type: APP_STARTED });
