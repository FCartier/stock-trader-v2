import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import News from "../News";
import { testData } from "../__data__/news.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("news component", () => {
  test("news component should render properly before fetch", () => {
    const component = shallow(<News news={[]} status={fetchStatus.pending} />);
    expect(component).toMatchSnapshot();
  });

  test("news component should render properly with fetch success", () => {
    const component = shallow(<News news={testData} status={fetchStatus.success} />);
    expect(component).toMatchSnapshot();
  });

  test("news component should render properly with fetch failed", () => {
    const component = shallow(<News news={testData} status={fetchStatus.failed} />);
    expect(component).toMatchSnapshot();
  });
});
