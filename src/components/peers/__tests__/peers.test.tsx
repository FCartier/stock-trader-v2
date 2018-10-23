import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import TopPeers from "../TopPeers";
import { testData } from "../__data__/peers.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("peers component", () => {
  test("peers component should render properly before fetch", () => {
    const component = shallow(<TopPeers  peers={[]} status={fetchStatus.pending} />);
    expect(component).toMatchSnapshot();
  });

  test("peers component should render properly with fetch success", () => {
    const component = shallow(<TopPeers  peers={testData} status={fetchStatus.success} />);
    expect(component).toMatchSnapshot();
  });

  test("peers component should render correctly with fetch failed", () => {
    const component = shallow(<TopPeers  peers={testData} status={fetchStatus.failed} />);
    expect(component).toMatchSnapshot();
  });
});
