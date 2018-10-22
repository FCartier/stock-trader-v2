import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PEER_SUCCESS } from "./peerActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions"
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* peerWorker({payload}: SelectedSymbol) {
  try {
    const toppeers = yield call(api.getPeers, payload);
    yield put({ type: FETCH_PEER_SUCCESS, payload: toppeers });
  } catch (error) {
    console.log(error)
  }
}

/**** Watchers ****/

export function* peerWatcher() {
  yield takeLatest(SELECTED_SYMBOL, peerWorker);
}
