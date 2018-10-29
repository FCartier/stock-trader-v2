import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Overview from "../Overview";
import { testData } from "../__data__/overview.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("overview component", () => {
  test("overview component should render correctly before fetch", () => {
    const component = shallow(
      <Overview
        overview={{
          companyName: "",
          website: "",
          description: ""
        }}
        status={fetchStatus.pending}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test("overview component should render correctly with fetch success", () => {
    const component = shallow(
      <Overview overview={testData} status={fetchStatus.success} />
    );
    expect(component).toMatchSnapshot();
  });

  test("overview component should render correctly with fetch failed", () => {
    const component = shallow(
      <Overview overview={testData} status={fetchStatus.failed} />
    );
    expect(component).toMatchSnapshot();
  });
});
