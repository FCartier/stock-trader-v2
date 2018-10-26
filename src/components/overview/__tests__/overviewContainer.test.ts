import { mapStateToProps } from "../overviewContainer";
import { globalState } from "../../../__data__/globalState.data";
import { testData } from "../__data__/overview.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("overview container", () => {
  test("overview container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      overview: testData,
      status: fetchStatus.success
    });
  });
});
