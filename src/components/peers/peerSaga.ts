import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PEER_SUCCESS } from "./peerActions";
import { SELECTED_SYMBOL, SelectedSymbol } from "../search/searchActions"
<<<<<<< HEAD
=======

>>>>>>> d805dfe3699bc883a215374c9fcab3611250b7bf
import { api } from "../../utils/apiUtil";

/**** Workers ****/

function* peerWorker({payload}: SelectedSymbol) {
  const toppeers = yield call(api.getPeers, payload);
  yield put({ type: FETCH_PEER_SUCCESS, payload: toppeers });
}

/**** Watchers ****/

export function* peerWatcher() {
  yield takeLatest(SELECTED_SYMBOL, peerWorker);
}
