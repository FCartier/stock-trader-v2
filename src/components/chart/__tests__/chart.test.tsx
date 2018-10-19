import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Chart } from "../Chart";
import { ChartContainer } from "../chartContainer";
import { ChartFilter } from "../ChartFilter";
import { testData, testUnformattedData } from "../__data__/chart.data";

configure({ adapter: new Adapter() });

describe("chart component", () => {
  test("chart component should render properly", () => {
    const component = shallow(Chart({ data: testData }));
    expect(component).toMatchSnapshot();
  });

  test("chart filter component should render properly", () => {
    const component = shallow(
      <ChartFilter chartFilter={jest.fn()} input="AAPL" />
    );
    expect(component).toMatchSnapshot();
  });

  test("chart container component should render properly", () => {
    const component = shallow(ChartContainer({chart:testUnformattedData as []}))
    expect(component).toMatchSnapshot()
  })
});
