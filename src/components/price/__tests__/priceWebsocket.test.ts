import { call, put, takeEvery } from "redux-saga/effects";
import { priceReceived } from "../priceActions";
import * as priceWebsocket from '../priceWebsocket'

describe("price websocket", () => {
  const payload = priceReceived("AAPL");

  test("price websocket should handle news api fetch success", () => {
    const gen = priceWebsocket.subscribeToSymbol(payload);

    expect(gen.next().value).toEqual(call(priceWebsocket.connect, payload.payload));
    expect(gen.next().value).toEqual(takeEvery(undefined, put))
    expect(gen.next().done).toBeTruthy();
  });
});
