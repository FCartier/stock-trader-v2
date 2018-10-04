import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_NEWS_SUCCESS } from "./newsActions";
import { SELECTED_SYMBOL } from "../search/searchActions"
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* newsWorker({payload}) {
  const news = yield call(api.getNews, payload);
  yield put({ type: FETCH_NEWS_SUCCESS, payload: news });
}

/**** Watchers ****/

export function* newsWatcher() {
  yield takeLatest(SELECTED_SYMBOL, newsWorker);
}
