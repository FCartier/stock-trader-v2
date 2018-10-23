import { mapStateToProps } from "../peersContainer";
import { globalState } from "../../../__data__/globalState.data";
import { testData } from "../__data__/peers.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("peers container", () => {
  test("peers container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      peers: testData, status: fetchStatus.success
    });
  });
});
