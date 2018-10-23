import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { Chart } from "../Chart";
import { ChartContainer } from "../ChartContainer";
import { ChartFilter } from "../ChartFilter";
import { testData, testUnformattedData } from "../__data__/chart.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("chart component", () => {
  test("chart component should render properly", () => {
    const component = shallow(<Chart data={testData} />);
    expect(component).toMatchSnapshot();
  });

  test("chart filter component should render properly", () => {
    const component = shallow(
      <ChartFilter chartFilter={jest.fn()} input="AAPL" />
    );
    expect(component).toMatchSnapshot();
  });

  describe("chart container", () => {
    test("chart container component should render properly before fetch", () => {
      const component = shallow(
        <ChartContainer
          chart={[]}
          status={fetchStatus.pending}
        />
      );
      expect(component).toMatchSnapshot();
    });

    test("chart container component should render properly with fetch success", () => {
      const component = shallow(
        <ChartContainer
          chart={testUnformattedData as []}
          status={fetchStatus.success}
        />
      );
      expect(component).toMatchSnapshot();
    });

    test("chart container component should render properly with fetch failed", () => {
      const component = shallow(
        <ChartContainer
          chart={testUnformattedData as []}
          status={fetchStatus.failed}
        />
      );
      expect(component).toMatchSnapshot();
    });
  });
});
