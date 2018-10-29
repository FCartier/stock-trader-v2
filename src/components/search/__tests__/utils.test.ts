import formatSearchData from "../utils/formatSearchData";
import * as unformattedSearchData from "../__data__/unformattedSearchData";
import * as formattedSearchData from "../__data__/formattedSearchData";

describe("search format utility", () => {
  test("should calculate max value from formatted data", () => {
    expect(formatSearchData(unformattedSearchData.default)).toEqual(
      formattedSearchData.default
    );
  });
});
