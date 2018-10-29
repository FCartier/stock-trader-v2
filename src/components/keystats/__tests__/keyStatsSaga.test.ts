import { keyStatsWorker } from "../keyStatsSaga";
import { selectedSymbol } from "../../search/searchActions";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/apiUtil";
import { testData } from "../__data__/keyStats.data";
import { FETCH_KEYSTATS_SUCCESS, FETCH_KEYSTATS_FAILED } from "../keyStatsActions";

describe("keystats saga", () => {
  const payload = selectedSymbol("AAPL");

  test("keystats saga should handle keystats api fetch success", () => {
    const gen = keyStatsWorker(payload);

    expect(gen.next().value).toEqual(call(api.getKeyStats, payload.payload));
    expect(gen.next(testData).value).toEqual(
      put({ type: FETCH_KEYSTATS_SUCCESS, payload: testData })
    );
    expect(gen.next().done).toBeTruthy();
  });

  test("keystats saga should handle keystats api fetch failed", () => {
    const gen = keyStatsWorker(payload);

    expect(gen.next().value).toEqual(call(api.getKeyStats, payload.payload));
    expect(gen.throw(new Error()).value).toEqual(
      put({ type: FETCH_KEYSTATS_FAILED })
    );
    expect(gen.next().done).toBeTruthy();
  });
});
