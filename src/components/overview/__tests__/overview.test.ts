import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Overview from "../Overview";
import { testData } from "../__data__/overview.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("overview component", () => {
  test("overview component should display all data fields", () => {
    const component = shallow(
      Overview({ overview: testData, status: fetchStatus.success })
    );
    expect(component).toMatchSnapshot();
  });
});
