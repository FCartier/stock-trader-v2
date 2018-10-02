import { NEWS_ACTION } from "./newsActions"

export const news = (state = [], action) => {
    switch (action.type) {
      case NEWS_ACTION:
        return action.payload;
      default:
        return state;
    }
  };