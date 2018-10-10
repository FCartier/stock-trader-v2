import { Reducer } from "redux"
import { PEER_ACTION, PeerAction } from "./peerActions"
import PeerState from "./types"

const initialState: PeerState = {
  peers: []
}

export const peers: Reducer<PeerState, PeerAction> = (state = initialState, action) => {
    switch (action.type) {
      case PEER_ACTION:
        return action.peers;
      default:
        return state;
    }
  };
