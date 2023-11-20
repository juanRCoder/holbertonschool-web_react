import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe("Tests cases in App Component", () =>{
    //Verifica si la etiqueta 'App-header' existe en App.
    it('App-header exist in App', () => {
        //envoltura superficial del componente App
        const wrapper = shallow(<App />);
        //Busca en App si tiene un div 'App-header'
        const header = wrapper.find('.App-header');
        
        //Expectactiva si tiene un elemento el div
        expect(header).to.have.length(1);
    })

    //Verifica si la etiqueta 'App-header' existe en App.
    it('App-body exist in App', () => {
        const wrapper = shallow(<App />);
        const header = wrapper.find('.App-body');
        
        expect(header).to.have.length(1);
    })

    //Verifica si la etiqueta 'App-header' existe en App.
    it('App-footer exist in App', () => {
        const wrapper = shallow(<App />);
        const header = wrapper.find('.App-footer');
        
        expect(header).to.have.length(1);
    })
});