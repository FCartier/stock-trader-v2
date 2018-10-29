import { peers } from "../peerReducer";
import { FETCH_PEER_SUCCESS, FETCH_PEER_FAILED } from "../peerActions";
import { AnyAction } from "redux";
import PeerState from "../types";
import { testData } from "../__data__/peers.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("peers reducer", () => {
  const initialState: PeerState = { peers: [], status: fetchStatus.pending };

  test("peers reducer should return initial state", () => {
    const action = {} as AnyAction;
    expect(peers(undefined, action)).toEqual(initialState);
  });

  test("peers reducer should handle FETCH_PEER_SUCCESS", () => {
    const action: AnyAction = { type: FETCH_PEER_SUCCESS, payload: testData };
    expect(peers(initialState, action)).toEqual({
      peers: testData,
      status: fetchStatus.success
    });
  });

  test("peers reducer should handle FETCH_PEER_FAILED", () => {
    const action: AnyAction = { type: FETCH_PEER_FAILED };
    expect(peers(initialState, action)).toEqual({
      ...initialState,
      status: fetchStatus.failed
    });
  });
});
