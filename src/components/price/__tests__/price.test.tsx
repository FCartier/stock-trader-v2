import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Price from "../Price";
import { data } from "../__data__/price.data";
import * as formLiveData  from "../utils/formLiveData";

configure({ adapter: new Adapter() });

describe("price", () => {
  test("should render properly with data", () => {
    const component = shallow(<Price {...data} />);
    expect(component).toMatchSnapshot();
  });

  test("should render properly with no data", () => {
    jest.spyOn(formLiveData, "default").mockReturnValue(null)
    const component = shallow(<Price {...data} />);
    expect(component).toMatchSnapshot();
  })
});
