import { mapStateToProps } from "../peersContainer";
import { globalState } from "../../../__data__/globalState.data";
import { testData } from "../__data__/peers.data";

describe("peers container", () => {
  test("peers container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      peers: { peers: testData }
    });
  });
});
