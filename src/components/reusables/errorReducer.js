import { ERROR_ACTION } from "./errorAction"

export const error = (state = {}, action) => {
    switch (action.type) {
      case ERROR_ACTION:
        return action.payload;
      default:
        return state;
    }
  };