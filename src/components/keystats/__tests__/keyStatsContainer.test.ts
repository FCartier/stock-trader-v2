import { mapStateToProps } from "../keyStatsContainer";
import { globalState } from "../../../__data__/globalState.data";
import { testData } from "../__data__/keyStats.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("keystats container", () => {
  test("keystats container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      keystats: testData,
      status: fetchStatus.success
    });
  });
});
