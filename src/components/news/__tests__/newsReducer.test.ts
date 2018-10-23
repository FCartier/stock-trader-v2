import { news } from "../newsReducer";
import { NewsList } from "../types";
import { fetchStatus } from "../../reusables/fetchStatus";
import { AnyAction } from "redux";
import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILED } from "../newsActions";
import { testData } from "../__data__/news.data";

describe("news reducer", () => {
  const initialState: NewsList = { news: [], status: fetchStatus.pending };

  test("news reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(news(undefined, action)).toEqual(initialState);
  });

  test("news reducer should handle FETCH_NEWS_SUCCESS", () => {
    const action: AnyAction = { type: FETCH_NEWS_SUCCESS, payload: testData };
    expect(news(initialState, action)).toEqual({
      news: testData,
      status: fetchStatus.success
    });
  });

  test("peers reducer should handle FETCH_PEER_FAILED", () => {
    const action: AnyAction = { type: FETCH_NEWS_FAILED };
    expect(news(initialState, action)).toEqual({
      ...initialState,
      status: fetchStatus.failed
    });
  });
});
