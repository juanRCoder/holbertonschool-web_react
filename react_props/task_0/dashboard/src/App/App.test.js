import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe("Tests cases in App Component", () =>{
    //Verifica si la etiqueta 'App-header' existe en App.
    it('Father component "App" contain components Header, Footer, Login and Notification ', () => {
        //envoltura superficial del componente App
        const wrapper = shallow(<App />);
        
        //Expectactiva si App contiene componentes Header, Footer, Login y Notifications
        expect(wrapper.find('Header')).to.have.lengthOf(1);
        expect(wrapper.find('Footer')).to.have.lengthOf(1);
        expect(wrapper.find('Login')).to.have.lengthOf(1);
        expect(wrapper.find('Notification')).to.have.lengthOf(1);
    })
});