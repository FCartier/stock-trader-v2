import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_OVERVIEW_SUCCESS,
  FETCH_OVERVIEW_FAILED
} from "./overviewActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

export function* overviewWorker({ payload }: SelectedSymbol) {
  try {
    const overview = yield call(api.getOverview, payload);
    yield put({ type: FETCH_OVERVIEW_SUCCESS, payload: overview });
  } catch {
    yield put({ type: FETCH_OVERVIEW_FAILED });
  }
}

/**** Watchers ****/

export function* overviewWatcher() {
  yield takeLatest(SELECTED_SYMBOL, overviewWorker);
}
