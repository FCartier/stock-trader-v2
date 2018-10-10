import { FETCH_PRICE_SUCCESS } from "./priceActions";
import { RECEIVED_NEW_PRICE } from "./priceActions";

export const price = (state = 0, action) => {
  switch (action.type) {
    case RECEIVED_NEW_PRICE:
      return action.payload;
    default:
      return state;
  }
};
