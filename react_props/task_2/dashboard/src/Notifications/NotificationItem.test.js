import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import NotificationItem from "./NotificationItem";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("NotificationItem Component Tests", () => {
  it("Renders without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("Verify rendering with dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop("data-notification-type")).to.equal("default");
    expect(wrapper.text()).to.equal("test");
  });

  it("Verify rendering with dummy html prop", () => {
    const htmlContent = { __html: "<u>test</u>" };
    const wrapper = shallow(<NotificationItem html={htmlContent} />);
    expect(wrapper.html()).to.equal('<li><u>test</u></li>');
  });
});
