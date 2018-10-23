import { Reducer } from "redux";
import { FETCH_PEER_SUCCESS, FETCH_PEER_FAILED } from "./peerActions";
import PeerState from "./types";
import { fetchStatus } from "../reusables/fetchStatus";

const initialState: PeerState = {
  peers: [],
  status: fetchStatus.pending
};

export const peers: Reducer<PeerState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEER_SUCCESS:
      return { peers: action.payload, status: fetchStatus.success };
    case FETCH_PEER_FAILED:
      return { ...state, status: fetchStatus.failed}
    default:
      return state;
  }
};
