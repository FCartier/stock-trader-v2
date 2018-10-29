import {
  appStartedWorker,
  APP_STARTED,
  FETCH_SYMBOLS_SUCCESS
} from "../rootSaga";
import { take, put, call } from "redux-saga/effects";
import unformattedSearchData from "../components/search/__data__/unformattedSearchData";
import { api } from "../utils/apiUtil";

describe("root saga", () => {
  test("root saga should handle APP_STARTED on symbol fetch success", () => {
    const gen = appStartedWorker();

    expect(gen.next().value).toEqual(take([APP_STARTED]));
    expect(gen.next().value).toEqual(call(api.getSymbols));
    expect(gen.next(unformattedSearchData).value).toEqual(
      put({
        type: FETCH_SYMBOLS_SUCCESS,
        payload: unformattedSearchData
      })
    );
    expect(gen.next().done).toBeTruthy()
  });

  test("root saga should handle APP_STARTEDon symbol fetch failed", () => {
    const gen = appStartedWorker();

    expect(gen.next().value).toEqual(take([APP_STARTED]));
    expect(gen.next().value).toEqual(call(api.getSymbols));
    expect(gen.throw(new Error()).value).toBeUndefined()
    expect(gen.next().done).toBeTruthy()
  });
});
