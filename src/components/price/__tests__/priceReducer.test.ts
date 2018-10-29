import { price } from "../priceReducer";
import PriceState from "../types";
import { AnyAction } from "redux";
import { RECEIVED_NEW_PRICE } from "../priceActions";
import { priceData } from "../__data__/price.data";

describe("news reducer", () => {
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
  };

  test("news reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(price(undefined, action)).toEqual(initialState);
  });

  test("news reducer should handle FETCH_NEWS_FAILED", () => {
    const action: AnyAction = { type: RECEIVED_NEW_PRICE, payload: priceData };
    expect(price(initialState, action)).toEqual({
      ...priceData
    });
  });
});
