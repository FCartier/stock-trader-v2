import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import MarketFooter from "../MarketFooter";
import marketData from "../__data__/marketFooter.data";
import { fetchStatus } from '../../reusables/fetchStatus';

configure({ adapter: new Adapter() });

describe("<MarketFooter />", () => {
  test("should render properly", () => {
    const component = shallow(MarketFooter({ market: marketData, status: fetchStatus.success }));
    expect(component).toMatchSnapshot();
  });
});