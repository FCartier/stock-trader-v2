import { mapStateToProps } from "../chartContainer";
import { globalState } from "../../../__data__/globalState.data";
import { testData } from "../__data__/chart.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("chart container", () => {
  test("chart container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      chart: testData, status: fetchStatus.success
    });
  });
});
