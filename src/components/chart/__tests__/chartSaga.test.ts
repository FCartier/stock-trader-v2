import { chartWorker, filterChartWorker } from "../chartSaga";
import { selectedSymbol } from "../../search/searchActions";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/apiUtil";
import { testData } from "../__data__/chart.data";
import {
  FETCH_CHART_SUCCESS,
  FETCH_CHART_FAILED,
  chartFilter
} from "../chartActions";

describe("chart saga", () => {
  describe("chart worker", () => {
    const payload = selectedSymbol("AAPL");

    test("chart worker should handle chart api fetch success", () => {
      const gen = chartWorker(payload);
      const getChart = jest.spyOn(api, "getChart").mockReturnValue(testData);

      expect(gen.next().value).toEqual(call(getChart, payload.payload));
      expect(gen.next(testData).value).toEqual(
        put({ type: FETCH_CHART_SUCCESS, payload: testData })
      );
      expect(gen.next().done).toBeTruthy();

      getChart.mockRestore();
    });

    test("chart worker should handle chart api fetch failed", () => {
      const gen = chartWorker(payload);
      const getChart = jest
        .spyOn(api, "getChart")
        .mockRejectedValue(new Error());

      expect(gen.next().value).toEqual(call(getChart, payload.payload));
      expect(gen.throw(new Error()).value).toEqual(
        put({ type: FETCH_CHART_FAILED })
      );
      expect(gen.next().done).toBeTruthy();

      getChart.mockRestore();
    });
  });

  describe("filter chart worker", () => {
    const payload = chartFilter("AAPL", "1d");
    const { input, time } = payload.payload;

    test("filter chart worker should handle chart api fetch success", () => {
      const gen = filterChartWorker(payload);
      const filterChart = jest
        .spyOn(api, "filterChart")
        .mockReturnValue(testData);

      expect(gen.next().value).toEqual(call(filterChart, input, time));
      expect(gen.next(testData).value).toEqual(
        put({ type: FETCH_CHART_SUCCESS, payload: testData })
      );
      expect(gen.next().done).toBeTruthy();

      filterChart.mockRestore();
    });

    test("filter chart worker should handle chart api fetch failed", () => {
      const gen = filterChartWorker(payload);
      const filterChart = jest
        .spyOn(api, "filterChart")
        .mockRejectedValue(new Error());

      expect(gen.next().value).toEqual(call(filterChart, input, time));
      expect(gen.throw(new Error()).value).toEqual(
        put({ type: FETCH_CHART_FAILED })
      );
      expect(gen.next().done).toBeTruthy();

      filterChart.mockRestore();
    });
  });
});
