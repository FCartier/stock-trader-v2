import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_KEYSTATS_SUCCESS, FETCH_KEYSTATS_FAILED } from "./keyStatsActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* keyStatsWorker({ payload }: SelectedSymbol) {
  try {
    const keystats = yield call(api.getKeyStats, payload);
    yield put({ type: FETCH_KEYSTATS_SUCCESS, payload: keystats });
  } catch {
    yield put({ type: FETCH_KEYSTATS_FAILED });
  }
}

/**** Watchers ****/

export function* keyStatsWatcher() {
  yield takeLatest(SELECTED_SYMBOL, keyStatsWorker);
}
