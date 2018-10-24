import { marketWorker } from "../marketSaga";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/apiUtil";
import marketData from "../__data__/marketFooter.data";
import { FETCH_MARKET_SUCCESS, FETCH_MARKET_FAILED } from "../marketActions";

describe("market saga", () => {
  test("market saga should handle market api fetch success", () => {
    const gen = marketWorker();
    const getMarket = jest.spyOn(api, "getMarket").mockReturnValue(marketData);

    expect(gen.next().value).toEqual(call(getMarket));
    expect(gen.next(marketData).value).toEqual(
      put({ type: FETCH_MARKET_SUCCESS, payload: marketData })
    );
    expect(gen.next().done).toBeTruthy();

    getMarket.mockRestore();
  });

  test("market saga should handle market api fetch failed", () => {
    const gen = marketWorker();
    const getMarket = jest
      .spyOn(api, "getMarket")
      .mockRejectedValue(new Error());

    expect(gen.next().value).toEqual(call(getMarket));
    expect(gen.throw(new Error()).value).toEqual(
      put({ type: FETCH_MARKET_FAILED })
    );
    expect(gen.next().done).toBeTruthy();

    getMarket.mockRestore();
  });
});
