import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { Search } from "../Search";
import formattedSearchData from "../__data__/formattedSearchData";

configure({ adapter: new Adapter() });

describe("search", () => {
  test("should render properly", () => {
    const component = shallow(
      <Search results={formattedSearchData} symbol="" selectedSymbol={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
});
