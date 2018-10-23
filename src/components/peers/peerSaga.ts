import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PEER_SUCCESS, FETCH_PEER_FAILED } from "./peerActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions";
import { api } from "../../utils/apiUtil";

/**** Workers ****/

export function* peerWorker({ payload }: SelectedSymbol) {
  try {
    const toppeers = yield call(api.getPeers, payload);
    yield put({ type: FETCH_PEER_SUCCESS, payload: toppeers });
  } catch {
    yield put({ type: FETCH_PEER_FAILED });
  }
}

/**** Watchers ****/

export function* peerWatcher() {
  yield takeLatest(SELECTED_SYMBOL, peerWorker);
}
