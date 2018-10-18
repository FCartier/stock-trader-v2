import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_STATIC_PRICE, RECEIVED_NEW_PRICE } from "./priceActions";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* priceWorker({payload}) {
  const price = yield call(api.getPrice, payload);
  yield put({ type: RECEIVED_NEW_PRICE, payload: price });
}

/**** Watchers ****/

export function* priceWatcher() {
  yield takeLatest(FETCH_STATIC_PRICE, priceWorker);
}
