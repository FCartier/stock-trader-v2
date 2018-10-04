import { FETCH_NEWS_SUCCESS } from "./newsActions"

export const news = (state = [], action) => {
    switch (action.type) {
      case FETCH_NEWS_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };