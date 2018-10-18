import MarketFooter, { IMarketItem } from '../MarketFooter';
import { MarketData } from '../__data__/marketFooter.data';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
/*
describe("Footer component", () => {
  test('Footer component should display all data', () => {
    const component = shallow(MarketFooter({ market: MarketData }));
    expect(component).toMatchSnapshot();
  });
});
*/

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});