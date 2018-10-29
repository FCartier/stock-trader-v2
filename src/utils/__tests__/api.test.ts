import { fetchData } from "../__data__/api.data";
import * as request from "../apiRequestFormat";
import { api } from "../apiUtil";
import * as fetchMock from 'fetch-mock'

describe("request", () => {
  test("should retrieve data correctly", async () => {
    fetchMock.getOnce("*", {
      body: fetchData,
      headers: { "content-type": "application/json" }
    });

    const response = await request.request("request_test");
    expect(response).toEqual(fetchData);

    fetchMock.restore();
  });
});

describe("api", () => {
  beforeAll(() => {
    fetchMock.get("*", { body: {} });
  });
  
  afterAll(() => {
    fetchMock.restore();
  });
  
  const requestSpy = jest.spyOn(request, "request");

  const symbol = "aapl";

  test("should get symbols with the correct URL", async () => {
    const expectedUrl = "/ref-data/symbols";

    await api.getSymbols();
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get market with the correct URL", async () => {
    const expectedUrl = "/market";

    await api.getMarket();
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get news with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/news/last/50`;

    await api.getNews(symbol);
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get overview with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/company`;

    await api.getOverview(symbol);
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get chart with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/chart/5y`;

    await api.getChart(symbol);
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get key stats with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/quote`;

    await api.getKeyStats(symbol);
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get peers with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/peers`;

    await api.getPeers(symbol);
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get news with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/quote`;

    await api.getPrice(symbol);
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });

  test("should get filtered chart with the correct URL", async () => {
    const expectedUrl = `/stock/${symbol}/chart/1d`;

    await api.filterChart(symbol, "1d");
    expect(requestSpy).toHaveBeenCalledWith(expectedUrl);
  });
});
