import { market } from "../marketReducer";
import { MarketState } from "../types";
import { fetchStatus } from "../../reusables/fetchStatus";
import { AnyAction } from "redux";
import { FETCH_MARKET_SUCCESS, FETCH_MARKET_FAILED } from "../marketActions";
import marketData from "../__data__/marketFooter.data";

describe("market reducer", () => {
  const initialState: MarketState = { market: [], status: fetchStatus.pending };

  test("market reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(market(undefined, action)).toEqual(initialState);
  });

  test("market reducer should handle FETCH_MARKET_SUCCESS", () => {
    const action: AnyAction = { type: FETCH_MARKET_SUCCESS, payload: marketData };
    expect(market(initialState, action)).toEqual({
      market: marketData,
      status: fetchStatus.success
    });
  });

  test("market reducer should handle FETCH_MARKET_FAILED", () => {
    const action: AnyAction = { type: FETCH_MARKET_FAILED };
    expect(market(initialState, action)).toEqual({
      ...initialState,
      status: fetchStatus.failed
    });
  });
});
