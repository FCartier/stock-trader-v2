import { FETCH_KEYSTATS_SUCCESS } from "./keyStatsActions"

export const keystats = (state = {}, action) => {
    switch (action.type) {
      case FETCH_KEYSTATS_SUCCESS:
        return action.payload
      default:
        return state;
    }
  };