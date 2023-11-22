import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Header from "./Header";

describe("Header component to verify it renders without crashing", () => {
    it("Verify that the components render div.App-header", () => {
        const wrapper = shallow(<Header />);
        const header = wrapper.find('.App-header');
        expect(header.exists()).to.be.true;
    });

    it("Verify that the components render img and h1", () => {
        const wrapper = shallow(<Header />);
        const img = wrapper.find('img');
        const h1 = wrapper.find('h1');


        expect(img.exists()).to.be.true;
        expect(h1.exists()).to.be.true;
    });
});
