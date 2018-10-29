import { overviewWorker } from "../overviewSaga";
import { selectedSymbol } from "../../search/searchActions";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/apiUtil";
import { testData } from "../__data__/overview.data";
import { FETCH_OVERVIEW_SUCCESS, FETCH_OVERVIEW_FAILED } from "../overviewActions";

describe("overview saga", () => {
  const payload = selectedSymbol("AAPL");

  test("overview saga should handle overview api fetch success", () => {
    const gen = overviewWorker(payload);

    expect(gen.next().value).toEqual(call(api.getOverview, payload.payload));
    expect(gen.next(testData).value).toEqual(
      put({ type: FETCH_OVERVIEW_SUCCESS, payload: testData })
    );
    expect(gen.next().done).toBeTruthy();
  });

  test("overview saga should handle overview api fetch failed", () => {
    const gen = overviewWorker(payload);

    expect(gen.next().value).toEqual(call(api.getOverview, payload.payload));
    expect(gen.throw(new Error()).value).toEqual(
      put({ type: FETCH_OVERVIEW_FAILED })
    );
    expect(gen.next().done).toBeTruthy();
  });
});
