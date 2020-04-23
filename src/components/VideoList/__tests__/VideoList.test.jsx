import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import VideoList from "./../VideoList";
import { video } from "./../../../test/initialValues";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("render without exploding", () => {
  const wrapper = shallow(<VideoList videos={[video]} selectedVideo={video} />);
});
