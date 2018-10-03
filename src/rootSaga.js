import { all, fork, put, take, call } from "redux-saga/effects";
import {api} from './utils/apiUtil'
import { chartWatcher, filterChartWatcher } from "./components/chart/chartSaga"
import { marketWatcher } from "./components/footer/marketSaga";

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
    fork(marketWatcher)
  ]);
  yield put(onAppStart());
}



const onAppStart = () => ({ type: APP_STARTED });
