import { PEER_ACTION } from "./peerActions"

export const peers = (state = [], action) => {
    switch (action.type) {
      case PEER_ACTION:
        return action.payload;
      default:
        return state;
    }
  };