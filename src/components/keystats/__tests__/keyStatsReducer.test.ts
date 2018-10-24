import { keystats } from "../keyStatsReducer";
import KeyStatState from "../types";
import { fetchStatus } from "../../reusables/fetchStatus";
import { AnyAction } from "redux";
import {
  FETCH_KEYSTATS_SUCCESS,
  FETCH_KEYSTATS_FAILED
} from "../keyStatsActions";
import { testData } from "../__data__/keyStats.data";

describe("keystats reducer", () => {
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

  test("keystats reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(keystats(undefined, action)).toEqual(initialState);
  });

  test("keystats reducer should handle FETCH_NEWS_SUCCESS", () => {
    const action: AnyAction = {
      type: FETCH_KEYSTATS_SUCCESS,
      payload: testData
    };
    expect(keystats(initialState, action)).toEqual({
      keystats: testData,
      status: fetchStatus.success
    });
  });

  test("keystats reducer should handle FETCH_NEWS_FAILED", () => {
    const action: AnyAction = { type: FETCH_KEYSTATS_FAILED };
    expect(keystats(initialState, action)).toEqual({
      ...initialState,
      status: fetchStatus.failed
    });
  });
});
