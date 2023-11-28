import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Notifications Component Tests", () => {
  it("Check that the menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem")).to.have.lengthOf(1);
  });

  it("Check that the div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications")).to.have.lengthOf(0);
  });

  it("Check that the menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).to.have.lengthOf(1);
  });

  it("Check that the div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications")).to.have.lengthOf(1);
  });

  it("Renders NotificationItem elements", () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
  });
});
