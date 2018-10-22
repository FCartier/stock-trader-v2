import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import TopPeers from "../TopPeers";
import { testData } from "../__data__/peers.data";

configure({ adapter: new Adapter() });

describe("peers component", () => {
  test("peers component should render properly", () => {
    const component = shallow(TopPeers({ peers: testData }));
    expect(component).toMatchSnapshot();
  });
});
