import { chart } from "../chartReducer";
import { FETCH_CHART_SUCCESS, FETCH_CHART_FAILED } from "../chartActions";
import { AnyAction } from "redux";
import ChartState from "../types";
import { testData } from "../__data__/chart.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("chart reducer", () => {
  const initialState: ChartState = { chart: [], status: fetchStatus.pending };

  test("chart reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(chart(undefined, action)).toEqual(initialState);
  });

  test("chart reducer should handle FETCH_CHART_SUCCESS", () => {
    const action: AnyAction = { type: FETCH_CHART_SUCCESS, payload: testData };
    expect(chart(initialState, action)).toEqual({
      chart: testData,
      status: fetchStatus.success
    });
  });

  test("chart reducer should handle FETCH_CHART_FAILED", () => {
    const action: AnyAction = { type: FETCH_CHART_FAILED };
    expect(chart(initialState, action)).toEqual({
      ...initialState,
      status: fetchStatus.failed
    });
  });
});
