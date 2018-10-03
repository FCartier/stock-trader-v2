import { SEARCH, SELECTED_SYMBOL } from "./searchActions";
import { FETCH_SYMBOLS_SUCCESS } from "../../rootSaga";

export const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, input: action.payload };
    case FETCH_SYMBOLS_SUCCESS:
      return { ...state, symbols: action.payload };
    case SELECTED_SYMBOL:
      return { ...state, symbol: action.payload };
    default:
      return state;
  }
};
