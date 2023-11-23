import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("NotificationItem Component Tests", () => {
  it("Renders NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
  });

  it("Verifies the first NotificationItem renders the right html", () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(<NotificationItem />).at(0);
    expect(firstItem.props().html).to.equal({
      __html: `<strong>Urgent requirement</strong> - complete by EOD`
    });
  });
});
