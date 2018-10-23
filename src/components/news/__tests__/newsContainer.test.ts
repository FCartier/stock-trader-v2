import { mapStateToProps } from "../newsContainer";
import { globalState } from "../../../__data__/globalState.data";
import { testData } from "../__data__/news.data";
import { fetchStatus } from "../../reusables/fetchStatus";

describe("peers container", () => {
  test("peers container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      news: testData,
      status: fetchStatus.success
    });
  });
});
