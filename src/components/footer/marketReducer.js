import { FETCH_MARKET_SUCCESS } from "./marketActions"

export const market = (state = [], action) => {
    switch (action.type) {
      case FETCH_MARKET_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };