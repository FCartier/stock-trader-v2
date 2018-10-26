import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import MarketFooter from "../MarketFooter";
import marketData from "../__data__/marketFooter.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("market footer", () => {
  test("market footer should render properly before fetch", () => {
    const component = shallow(
      <MarketFooter market={[]} status={fetchStatus.pending} />
    );
    expect(component).toMatchSnapshot();
  });

  test("market footer should render properly with fetch success", () => {
    const component = shallow(
      <MarketFooter market={marketData} status={fetchStatus.success} />
    );
    expect(component).toMatchSnapshot();
  });

  test("market footer should render properly with fetch failed", () => {
    const component = shallow(
      <MarketFooter market={marketData} status={fetchStatus.failed} />
    );
    expect(component).toMatchSnapshot();
  });
});
