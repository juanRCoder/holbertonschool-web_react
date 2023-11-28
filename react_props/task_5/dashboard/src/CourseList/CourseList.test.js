import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import CourseList from "./CourseList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests cases in CourseList Component", () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<CourseList />);
  });

  it("Check that it renders CourseList component without crashing", () => {
    expect(wrap.exists()).to.be.true;
  });

  it("Check that it renders the 5 different rows", () => {
    expect(wrap.find("CourseListRow")).to.have.lengthOf(0);
  });

  it("Renders correctly when passing an empty array", () => {
    wrap.setProps({ listCourses: [] });
    expect(wrap.find("CourseListRow")).to.have.lengthOf(0);
  });

  it("Test tthat when you pass a list of courses, the component renders it correctly", () => {
    let props = {
      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };

    let component = shallow(<CourseList {...props} />);
    expect(component.render()).to.not.be.an("undefined");
  });
});
