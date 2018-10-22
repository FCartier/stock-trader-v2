import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import KeyStats from '../KeyStats';
import { testData } from '../__data__/keyStats.data';

configure({ adapter: new Adapter() })

describe("keyStats component", () => {
  test('keyStats component should render properly', () => {
    const component = shallow(KeyStats({ keystats: testData }));
    expect(component).toMatchSnapshot();
  });
})