import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Directory from './directory.component';
import '@testing-library/jest-dom';

describe('expect to render Directory component', () => {
    var mockState= {
        tasks: [],
        currentView: 'done'
    }

    it('expect to render Directory component', () => {        
        expect(shallow(<Directory {...mockState} />)).toMatchSnapshot();
    });

    it('expect to render done', () => {
        const wrapper = shallow(<Directory {...mockState} />);
        expect(wrapper.find("h2.title").text().trim()).toBe('DONE Items');
    });

    it('expect to render todo', () => {
        mockState.currentView = 'todo';
        const wrapper = shallow(<Directory {...mockState} />);
        expect(wrapper.find("h2.title").text().trim()).toBe('TODO Items');
    });
})

