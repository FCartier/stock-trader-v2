import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import NoData from "../NoData";
import { SectionHeader } from "../SectionHeader";

configure({ adapter: new Adapter() });

describe("reusables", () => {
  test("NoData should render correctly", () => {
    const component = shallow(<NoData componentName="test" />)
    expect(component).toMatchSnapshot()
  })

  test("SectionHeader should render correctly", () => {
    const component = shallow(<SectionHeader title="Test" />)
    expect(component).toMatchSnapshot()
  })
})