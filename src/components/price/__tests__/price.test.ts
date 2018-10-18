import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Price from '../Price';
import { testData } from '../__data__/price.data';

configure({ adapter: new Adapter() })

describe("<Price />", () => {
  test('should render properly', () => {
    const component = shallow(Price({ price: testData }));
    expect(component).toMatchSnapshot();
  });
})