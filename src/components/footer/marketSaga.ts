import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_MARKET_SUCCESS, FETCH_MARKET_FAILED } from "./marketActions";
import { APP_STARTED } from "../../rootSaga";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

export function* marketWorker() {
  try {
    const market = yield call(api.getMarket);
    yield put({ type: FETCH_MARKET_SUCCESS, payload: market });
  } catch {
    yield put({ type: FETCH_MARKET_FAILED });
  }
}

/**** Watchers ****/

export function* marketWatcher() {
  yield takeLatest(APP_STARTED, marketWorker);
}
