import { FETCH_PEER_SUCCESS } from "./peerActions"

export const peers = (state = {}, action) => {
    switch (action.type) {
      case FETCH_PEER_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };