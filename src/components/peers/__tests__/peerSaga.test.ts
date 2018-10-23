import { peerWorker } from "../peerSaga";
import { selectedSymbol } from "../../search/searchActions";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/apiUtil";
import { testData } from "../__data__/peers.data";
import { FETCH_PEER_SUCCESS, FETCH_PEER_FAILED } from "../peerActions";

describe("peers saga", () => {
  const payload = selectedSymbol("AAPL");

  test("peers saga should handle peers api fetch success", () => {
    const gen = peerWorker(payload);
    const getPeers = jest.spyOn(api, "getPeers").mockReturnValue(testData);

    expect(gen.next().value).toEqual(call(getPeers, payload.payload));
    expect(gen.next(testData).value).toEqual(
      put({ type: FETCH_PEER_SUCCESS, payload: testData })
    );
    expect(gen.next().done).toBeTruthy();

    getPeers.mockRestore();
  });

  test("peers saga should handle peers api fetch failed", () => {
    const gen = peerWorker(payload);
    const getPeers = jest
      .spyOn(api, "getPeers")
      .mockRejectedValue(new Error());

    expect(gen.next().value).toEqual(call(getPeers, payload.payload));
    expect(gen.throw(new Error()).value).toEqual(
      put({ type: FETCH_PEER_FAILED })
    );
    expect(gen.next().done).toBeTruthy();

    getPeers.mockRestore();
  });
});
