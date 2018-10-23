import { peers } from "../peerReducer";
import { FETCH_PEER_SUCCESS } from "../peerActions";
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
});
