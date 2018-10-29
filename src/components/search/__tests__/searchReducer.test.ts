import { search } from "../searchReducer";
import { AnyAction } from "redux";
import SearchState from "../types";
import { FETCH_SYMBOLS_SUCCESS } from "../../../rootSaga";
import unformattedSearchData from "../__data__/formattedSearchData";
import { SELECTED_SYMBOL } from "../searchActions";

describe("search reducer", () => {
  const initialState: SearchState = { symbol: "", symbols: [] };

  test("search reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(search(undefined, action)).toEqual(initialState);
  });

  test("search reducer should handle FETCH_SYMBOL_SUCCESS", () => {
    const action: AnyAction = {
      type: FETCH_SYMBOLS_SUCCESS,
      payload: unformattedSearchData
    };
    expect(search(initialState, action)).toEqual({
      symbol: "",
      symbols: unformattedSearchData
    });
  });

  test("search reducer should handle SELECTED_SYMBOL", () => {
    const action: AnyAction = { type: SELECTED_SYMBOL, payload: "AAPL" };
    expect(search(initialState, action)).toEqual({
      symbol: "AAPL",
      symbols: []
    });
  });
});
