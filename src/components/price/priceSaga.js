import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PRICE_SUCCESS } from "./priceActions";
import { SELECTED_SYMBOL } from "../search/searchActions"
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* priceWorker({payload}) {
  const price = yield call(api.getPrice, payload);
  yield put({ type: FETCH_PRICE_SUCCESS, payload: price });
}

/**** Watchers ****/

export function* priceWatcher() {
  yield takeLatest(SELECTED_SYMBOL, priceWorker);
}
