import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import VideoListItem from "./../VideoListItem";
import { video } from "./../../../test/initialValues";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("render without exploding", () => {
  const wrapper = shallow(
    <VideoListItem video={video} selectedVideo={video} />
  );
});
