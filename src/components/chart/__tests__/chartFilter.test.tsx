import { configure, shallow, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { ChartFilter } from "../ChartFilter";

configure({ adapter: new Adapter() });

describe("chart component", () => {
  test("chart filter component should render properly", () => {
    const component = shallow(
      <ChartFilter chartFilter={jest.fn()} input="AAPL" />
    );
    expect(component).toMatchSnapshot();
  });

  test("chart filter component should call chartFilter on click", () => {
    const chartFilter = jest.fn()
    const component = mount(
      <ChartFilter chartFilter={chartFilter} input="AAPL" />
    );

    component.find("button[value='6m']").simulate("click")
    expect(chartFilter).toHaveBeenCalledWith("AAPL", "6m")
  });
});