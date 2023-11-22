import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Footer from "./Footer";

describe("Footer component to verify it renders without crashing", () => {
  it("Verify that the components render div.App-body", () => {
    const wrapper = shallow(<Footer />);
    const login = wrapper.find(".App-footer");
    expect(login.exists()).to.be.true;
  });

  it("Verify that the text is correct", () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.find("p").text();

    expect(text).to.equal(`Copyright 2023 - Holberton School`);
  });
});
