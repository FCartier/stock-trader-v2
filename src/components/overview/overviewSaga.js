import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_OVERVIEW_SUCCESS } from "./overviewActions";
import { SELECTED_SYMBOL } from "../search/searchActions"
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* overviewWorker({payload}) {
  const overview = yield call(api.getOverview, payload);
  yield put({ type: FETCH_OVERVIEW_SUCCESS, payload: overview });
}

/**** Watchers ****/

export function* overviewWatcher() {
  yield takeLatest(SELECTED_SYMBOL, overviewWorker);
}
