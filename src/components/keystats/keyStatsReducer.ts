import { Reducer } from "redux";
import {
  FETCH_KEYSTATS_SUCCESS,
  FETCH_KEYSTATS_FAILED
} from "./keyStatsActions";
import KeyStatState from "./types";
import { fetchStatus } from "../reusables/fetchStatus";

const initialState: KeyStatState = {
  keystats: {
    close: 0,
    low: 0,
    high: 0,
    open: 0,
    latestVolume: 0,
    week52High: 0,
    week52Low: 0,
    avgTotalVolume: 0
  },
  status: fetchStatus.pending
};

export const keystats: Reducer<KeyStatState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_KEYSTATS_SUCCESS:
      return { keystats: action.payload, status: fetchStatus.success };
    case FETCH_KEYSTATS_FAILED:
      return { ...state, status: fetchStatus.failed };
    default:
      return state;
  }
};
