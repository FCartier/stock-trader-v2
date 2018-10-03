import { CHART_ACTION } from "./chartActions";
import { FETCH_CHART_SUCCESS } from "./chartActions";

export const chart = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHART_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
