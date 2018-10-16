import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_MARKET_SUCCESS } from "./marketActions";
import { APP_STARTED } from "../../rootSaga";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* marketWorker() {
  const market = yield call(api.getMarket);
  yield put({ type: FETCH_MARKET_SUCCESS, payload: market });
}

/**** Watchers ****/

export function* marketWatcher() {
  yield takeLatest(APP_STARTED, marketWorker);
}
