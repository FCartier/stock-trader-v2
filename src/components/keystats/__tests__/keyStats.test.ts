import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import KeyStats from "../KeyStats";
import { testData } from "../__data__/keyStats.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("keyStats component", () => {
  test("keyStats component should render properly", () => {
    const component = shallow(
      KeyStats({ keystats: testData, status: fetchStatus.success })
    );
    expect(component).toMatchSnapshot();
  });
});
