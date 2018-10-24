import { search } from "../searchReducer";
import { AnyAction } from "redux";
import SearchState from "../types";
import { FETCH_SYMBOLS_SUCCESS } from "../../../rootSaga";
import formattedSearchData from "../__data__/formattedSearchData";
import { SELECTED_SYMBOL } from "../searchActions";

describe("peers reducer", () => {
  const initialState: SearchState = { symbol: "", symbols: [] };

  test("peers reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(search(undefined, action)).toEqual(initialState);
  });

  test("peers reducer should handle FETCH_SYMBOL_SUCCESS", () => {
    const action: AnyAction = { type: FETCH_SYMBOLS_SUCCESS, payload: formattedSearchData };
    expect(search(initialState, action)).toEqual({
      symbol: "",
      symbols: formattedSearchData
    });
  });

  test("peers reducer should handle SELECTED_SYMBOL", () => {
    const action: AnyAction = { type: SELECTED_SYMBOL, payload: "AAPL" };
    expect(search(initialState, action)).toEqual({
      symbol: "AAPL",
      symbols: []
    });
  });
});
