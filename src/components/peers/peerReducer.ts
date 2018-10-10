import { Reducer } from "redux";
import { FETCH_PEER_SUCCESS } from "./peerActions";
import PeerState from "./types";

const initialState: PeerState = {
  peers: []
};

export const peers: Reducer<PeerState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
