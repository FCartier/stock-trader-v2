import { CHART_ACTION } from "./chartActions"

export const chart = (state = [], action) => {
    switch (action.type) {
      case CHART_ACTION:
        return action.payload;
      default:
        return state;
    }
};