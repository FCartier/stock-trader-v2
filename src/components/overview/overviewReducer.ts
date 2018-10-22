import { Reducer } from "redux";
import {
  FETCH_OVERVIEW_SUCCESS,
  FETCH_OVERVIEW_FAILED
} from "./overviewActions";
import OverviewState from "./types";
import { fetchStatus } from "../reusables/fetchStatus";

const initialState: OverviewState = {
  status: fetchStatus.pending,
  companyName: "",
  website: "",
  description: ""
};

export const overview: Reducer<OverviewState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_OVERVIEW_SUCCESS:
      return { ...action.payload, status: fetchStatus.success };
    case FETCH_OVERVIEW_FAILED:
      return { ...state, status: fetchStatus.failed };
    default:
      return state;
  }
};
