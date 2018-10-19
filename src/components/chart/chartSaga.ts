import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_CHART_SUCCESS, FILTER_CHART, FilterAction } from "./chartActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* chartWorker({payload}: SelectedSymbol) {
  const chart = yield call(api.getChart, payload);
  yield put({ type: FETCH_CHART_SUCCESS, payload: chart });
}

function* filterChartWorker({payload}: FilterAction) {
  const chart = yield call(api.filterChart, payload.input, payload.time);
  yield put({ type: FETCH_CHART_SUCCESS, payload: chart });
}

/**** Watchers ****/

export function* chartWatcher() {
  yield takeLatest(SELECTED_SYMBOL, chartWorker);
}

export function* filterChartWatcher() {
  yield takeLatest(FILTER_CHART, filterChartWorker);
}
