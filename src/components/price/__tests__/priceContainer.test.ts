import { mapStateToProps } from "../priceContainer";
import { globalState } from "../../../__data__/globalState.data";
import { priceData } from "../__data__/price.data";
import { testData as keyStatsData} from "../../keystats/__data__/keyStats.data";

describe("news container", () => {
  test("news container should map state to props correctly", () => {
    expect(mapStateToProps(globalState)).toEqual({
      price: priceData,
      keystats: keyStatsData
    });
  });
});
