import { RECEIVED_NEW_PRICE, FETCH_STATIC_PRICE } from "./priceActions";

export const price = (state = 0, action) => {
  switch (action.type) {
    case FETCH_STATIC_PRICE:
      return action.payload;
    case RECEIVED_NEW_PRICE:
      return action.payload;
    default:
      return state;
  }
};
