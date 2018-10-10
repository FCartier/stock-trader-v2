import { Reducer } from "redux";
import { FETCH_OVERVIEW_SUCCESS } from "./overviewActions";
import OverviewState from "./types";

const initialState: OverviewState = {
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
      return action.payload;
    default:
      return state;
  }
};
