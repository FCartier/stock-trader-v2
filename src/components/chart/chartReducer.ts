import { Reducer } from "redux";
import { FETCH_CHART_SUCCESS, FETCH_CHART_FAILED } from "./chartActions";
import ChartState from "./types";
import { fetchStatus } from "../reusables/fetchStatus";

const initialState: ChartState = {
  chart: [],
  status: fetchStatus.pending
};

export const chart: Reducer<ChartState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHART_SUCCESS:
      return { chart: action.payload, status: fetchStatus.success };
    case FETCH_CHART_FAILED:
      return { ...state, status: fetchStatus.failed };
    default:
      return state;
  }
};
