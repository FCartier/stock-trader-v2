import { Reducer } from "redux";
import { RECEIVED_NEW_PRICE, FETCH_STATIC_PRICE } from "./priceActions";
import PriceState from "./types"

const initialState: PriceState = {
  askPrice: 0,
  askSize: 0,
  bidPrice: 0, 
  bidSize: 0,
  lastSalePrice: 0,
  lastSaleSize: 0,
  lastSaleTime: 0,
  lastUpdated: 0,
  marketPercent: 0,
  sector: "",
  securityType: "",
  seq: 0,
  symbol: "",
  volume: 0
}

export const price: Reducer<PriceState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATIC_PRICE:
      return action.payload;
    case RECEIVED_NEW_PRICE:
      return action.payload;
    default:
      return state;
  }
};
