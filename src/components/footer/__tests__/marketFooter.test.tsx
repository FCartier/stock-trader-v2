import React from 'react';
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import MarketFooter from "../MarketFooter";
import marketData from "../__data__/marketFooter.data";

configure({ adapter: new Adapter() });

describe("<MarketFooter />", () => {
  test("should render properly", () => {
    const component = shallow(MarketFooter({ market: marketData }));
    expect(component).toMatchSnapshot();
  });
});