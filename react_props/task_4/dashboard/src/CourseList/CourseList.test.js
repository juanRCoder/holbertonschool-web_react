import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import CourseList from "./CourseList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests cases in CourseList Component", () => {
  it("Check that it renders CourseList component without crashing", () => {
    let wrap = shallow(<CourseList />);
    expect(wrap.exists()).to.be.true;
  });

  it("Check that it renders the 5 different rows", () => {
    let wrap = shallow(<CourseList />);
    expect(wrap.find("CourseListRow")).to.have.lengthOf(5);
  });
});
