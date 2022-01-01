import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBar from './navbar.component';

it('expect to render NavBar component', () => {
    expect(shallow(<NavBar />)).toMatchSnapshot();
});