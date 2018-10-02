import {PRICE_ACTION} from "./priceActions"

export const price = (state = {}, action) => {
    switch (action.type) {
      case PRICE_ACTION:
        return action.payload;
      default:
        return state;
    }
  };