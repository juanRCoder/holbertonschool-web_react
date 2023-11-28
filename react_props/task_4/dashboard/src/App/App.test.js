import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests cases in App Component", () => {
  it('Father component "App" contain components Header, Footer, Login and Notification ', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Notifications")).to.have.lengthOf(1);
    expect(wrapper.find("Header")).to.have.lengthOf(1);
    expect(wrapper.find("Login")).to.have.lengthOf(1);
    expect(wrapper.find("Footer")).to.have.lengthOf(1);
    expect(wrapper.find("CourseList")).to.have.lengthOf(0);
  });
});

describe(" when isLoggedIn is true, and add two checks.", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it('The first one should verify that the Login component is not included', () => {
    expect(wrapper.find("Login")).to.have.lengthOf(0);
  });

  it('The second one should verify that the CourseList component is included', () => {
    expect(wrapper.find("CourseList")).to.have.lengthOf(1);
  });
});
