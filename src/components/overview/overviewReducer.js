import { OVERVIEW_ACTION } from "./overviewActions"

export const overview = (state = {}, action) => {
    switch (action.type) {
      case OVERVIEW_ACTION:
        return action.payload;
      default:
        return state;
    }
  };