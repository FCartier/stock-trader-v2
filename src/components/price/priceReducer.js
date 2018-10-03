import {FETCH_PRICE_SUCCESS} from "./priceActions"

export const price = (state = {}, action) => {
    switch (action.type) {
      case FETCH_PRICE_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };