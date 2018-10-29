import { mapStateToProps } from "../marketContainer";
import { globalState } from "../../../__data__/globalState.data";
import marketData from "../__data__/marketFooter.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("market container", () => {
  test("market container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      market: marketData,
      status: fetchStatus.success
    });
  });
});
