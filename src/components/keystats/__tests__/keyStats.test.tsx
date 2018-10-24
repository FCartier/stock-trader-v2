import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import KeyStats from "../KeyStats";
import { testData } from "../__data__/keyStats.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("keystats component", () => {
  test("keystats component should render properly before fetch", () => {
    const component = shallow(
      <KeyStats
        keystats={{
          close: 0,
          low: 0,
          high: 0,
          open: 0,
          latestVolume: 0,
          week52High: 0,
          week52Low: 0,
          avgTotalVolume: 0
        }}
        status={fetchStatus.pending}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test("keystats component should render properly with fetch success", () => {
    const component = shallow(
      KeyStats({ keystats: testData, status: fetchStatus.success })
    );
    expect(component).toMatchSnapshot();
  });

  test("keystats component should render properly with fetch failed", () => {
    const component = shallow(
      KeyStats({ keystats: testData, status: fetchStatus.failed })
    );
    expect(component).toMatchSnapshot();
  });
});
