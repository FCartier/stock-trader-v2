import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_CHART_SUCCESS, FILTER_CHART, FilterAction, FETCH_CHART_FAILED } from "./chartActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* chartWorker({payload}: SelectedSymbol) {
  try {
    const chart = yield call(api.getChart, payload);
    yield put({ type: FETCH_CHART_SUCCESS, payload: chart });
  } catch (error) {
    yield put({ type: FETCH_CHART_FAILED });
  }
}

function* filterChartWorker({payload}: FilterAction) {
  try {
    const chart = yield call(api.filterChart, payload.input, payload.time);
    yield put({ type: FETCH_CHART_SUCCESS, payload: chart });
  } catch (error) {
    yield put({ type: FETCH_CHART_FAILED });
  }
}

/**** Watchers ****/

export function* chartWatcher() {
  yield takeLatest(SELECTED_SYMBOL, chartWorker);
}

export function* filterChartWatcher() {
  yield takeLatest(FILTER_CHART, filterChartWorker);
}
