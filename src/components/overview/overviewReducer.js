import { FETCH_OVERVIEW_SUCCESS } from "./overviewActions"

export const overview = (state = {}, action) => {
    switch (action.type) {
      case FETCH_OVERVIEW_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };