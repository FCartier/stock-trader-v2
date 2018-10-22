import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/apiUtil";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions";
import { FETCH_NEWS_FAILED, FETCH_NEWS_SUCCESS } from "./newsActions";

/**** Workers ****/

function* newsWorker({ payload }: SelectedSymbol) {
  try {
    const news = yield call(api.getNews, payload);
    yield put({ type: FETCH_NEWS_SUCCESS, payload: news });
  } catch (error) {
    yield put({ type: FETCH_NEWS_FAILED });
  }
}

/**** Watchers ****/

export function* newsWatcher() {
  yield takeLatest(SELECTED_SYMBOL, newsWorker);
}
