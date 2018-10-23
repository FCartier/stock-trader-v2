import { newsWorker } from "../newsSaga";
import { selectedSymbol } from "../../search/searchActions";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/apiUtil";
import { testData } from "../__data__/news.data";
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILED } from "../newsActions";

describe("news saga", () => {
  const payload = selectedSymbol("AAPL");

  test("news saga should handle news api fetch success", () => {
    const gen = newsWorker(payload);
    const getnews = jest.spyOn(api, "getNews").mockReturnValue(testData);

    expect(gen.next().value).toEqual(call(getnews, payload.payload));
    expect(gen.next(testData).value).toEqual(
      put({ type: FETCH_NEWS_SUCCESS, payload: testData })
    );
    expect(gen.next().done).toBeTruthy();

    getnews.mockRestore();
  });

  test("news saga should handle news api fetch failed", () => {
    const gen = newsWorker(payload);
    const getnews = jest
      .spyOn(api, "getNews")
      .mockRejectedValue(new Error());

    expect(gen.next().value).toEqual(call(getnews, payload.payload));
    expect(gen.throw(new Error()).value).toEqual(
      put({ type: FETCH_NEWS_FAILED })
    );
    expect(gen.next().done).toBeTruthy();

    getnews.mockRestore();
  });
});
