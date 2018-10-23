import { overview } from "../overviewReducer";
import OverviewState from "../types";
import { fetchStatus } from "../../reusables/fetchStatus";
import { AnyAction } from "redux";
import {
  FETCH_OVERVIEW_SUCCESS,
  FETCH_OVERVIEW_FAILED
} from "../overviewActions";
import { testData } from "../__data__/overview.data";

describe("overview reducer", () => {
  const initialState: OverviewState = {
    overview: { companyName: "", website: "", description: "" },
    status: fetchStatus.pending
  };

  test("overview reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(overview(undefined, action)).toEqual(initialState);
  });

  test("overview reducer should handle FETCH_OVERVIEW_SUCCESS", () => {
    const action: AnyAction = { type: FETCH_OVERVIEW_SUCCESS, payload: testData };
    expect(overview(initialState, action)).toEqual({
      overview: testData,
      status: fetchStatus.success
    });
  });

  test("peers reducer should handle FETCH_OVERVIEW_FAILED", () => {
    const action: AnyAction = { type: FETCH_OVERVIEW_FAILED };
    expect(overview(initialState, action)).toEqual({
      ...initialState,
      status: fetchStatus.failed
    });
  });
});
