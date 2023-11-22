import React from "react";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });

describe("Tests cases in App Component", () => {
    it('Father component "App" contain components Header, Footer, Login and Notification ', () => {
      const wrapper = shallow(<App />);
  
      expect(wrapper.find('Notifications')).to.have.lengthOf(1);
      expect(wrapper.find('Header')).to.have.lengthOf(1);
      expect(wrapper.find('Login')).to.have.lengthOf(1);
      expect(wrapper.find('Footer')).to.have.lengthOf(1);
    });
  });
  