import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { expect } from "chai";
import Login from "./Login";

configure({adapter: new Adapter()});

describe("Login component to verify it renders without crashing", () => {
    it("Verify that the components render div.App-body", () => {
        const wrapper = shallow(<Login />);
        const login = wrapper.find('.App-body');
        expect(login.exists()).to.be.true;
    });

    it("Verify that the components render input and label", () => {
        const wrapper = shallow(<Login />);
        
        expect(wrapper.find('input')).to.have.lengthOf(2);
        expect(wrapper.find('label')).to.have.lengthOf(2);
    });
});