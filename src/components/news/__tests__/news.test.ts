import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import News from "../News";
import { testData } from "../__data__/news.data";
import { fetchStatus } from "../../reusables/fetchStatus";

configure({ adapter: new Adapter() });

describe("news component", () => {
  test("news component should render properly", () => {
    const component = shallow(
      News({ news: testData, status: fetchStatus.success })
    );
    expect(component).toMatchSnapshot();
  });
});
