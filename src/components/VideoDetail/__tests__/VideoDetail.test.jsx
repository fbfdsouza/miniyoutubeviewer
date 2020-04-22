import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import VideoDetail from "./../VideoDetail";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("render without exploding", () => {
  const wrapper = shallow(<VideoDetail />);
});
