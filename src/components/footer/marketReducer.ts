import { Reducer } from "redux";
import { FETCH_MARKET_SUCCESS, FETCH_MARKET_FAILED } from "./marketActions";
import { MarketState } from "./types";
import { fetchStatus } from "../reusables/fetchStatus";

const initialState: MarketState = {
  market: [],
  status: fetchStatus.pending
};

export const market: Reducer<MarketState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_SUCCESS:
      return { market: action.payload, status: fetchStatus.success };
    case FETCH_MARKET_FAILED:
      return { ...state, status: fetchStatus.failed };
    default:
      return state;
  }
};
