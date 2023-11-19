import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import App from "./App";

describe("Testing the <App /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("<App /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an("undefined");
  });

  it("<App /> Render the dashboard header (App-header)", () => {
    expect(wrapper.find(".App-header")).to.have.lengthOf(1);
  });

  it("<App /> Render the dashboard body (App-body)", () => {
    expect(wrapper.find(".App-body")).to.have.lengthOf(1);
  });

  it("<App /> Render the dashboard footer (App-footer)", () => {
    expect(wrapper.find(".App-footer")).to.have.lengthOf(1);
  });
});
