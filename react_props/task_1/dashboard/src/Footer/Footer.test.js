import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Footer from "./Footer";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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
