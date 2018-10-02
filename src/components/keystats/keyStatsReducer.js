import { KEY_STAT_ACTION } from "./keyStatsActions"

export const keystats = (state = {}, action) => {
    switch (action.type) {
      case KEY_STAT_ACTION:
        return action.payload
      default:
        return state;
    }
  };