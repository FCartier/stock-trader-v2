import { MARKET_ACTION } from "./marketActions"

export const market = (state = [], action) => {
    switch (action.type) {
      case MARKET_ACTION:
        return action.payload;
      default:
        return state;
    }
  };