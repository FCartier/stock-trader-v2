import {SEARCH, SYMBOLS_ACTION} from "./searchActions"

export const search = (state = {}, action) => {
    switch (action.type) {
      case SEARCH:
        return { ...state, input: action.payload };
      case SYMBOLS_ACTION:
        return { ...state, symbols: action.payload };
      default:
        return state;
    }
  };