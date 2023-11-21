import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Tests cases in Notifications Component", () =>{

    //Verifica si el div Notifications se renderiza correctamente.
    it('Notifications renders without crashing', () => {
        shallow(<Notifications />);
    })

    //Verifica si se estan renderizados los 3 elementos de tipo lista.
    it(' Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        const items = wrapper.find('ul li');
        
        expect(items).to.have.length(3);
    });

    //Verifica si el texto es igual al proporcionado.
    it('Notifications renders the text', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p').text();

        expect(text).to.equal('Here is the list of notifications');
    });
});