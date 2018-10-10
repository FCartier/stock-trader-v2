import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_KEYSTATS_SUCCESS } from "./keyStatsActions";
import { SELECTED_SYMBOL } from "../search/searchActions"
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* keyStatsWorker({payload}) {
  const keystats = yield call(api.getKeyStats, payload);
  yield put({ type: FETCH_KEYSTATS_SUCCESS, payload: keystats });
}

/**** Watchers ****/

export function* keyStatsWatcher() {
  yield takeLatest(SELECTED_SYMBOL, keyStatsWorker);
}
