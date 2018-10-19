import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import App from '../App'

configure({ adapter: new Adapter() });

describe("app component", ()=> {
  test("app component should render properly", () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })
})