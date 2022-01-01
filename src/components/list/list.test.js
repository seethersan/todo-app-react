import React from 'react';
import { shallow, mount, render } from 'enzyme';
import List from './list.component';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('expect to render List component', () => {
    var mockState= {
        tasks: [
            {
                id: 0,
                title: 'Task 1',
                isDone: true
            },
            {
                id: 1,
                title: 'Task 2',
                isDone: false
            }
        ],
        currentView: 'done'
    }

    it('expect to render List component', () => {
        expect(shallow(<List />)).toMatchSnapshot();
    });
    
    it('correctly show done tasks', () => {
        const wrapper = mount(<List {...mockState} />);
        expect(wrapper.find('Item.done').length).toEqual(1);
    });

    it('correctly show todo tasks', () => {
        mockState.currentView = 'todo';
        const wrapper = mount(<List {...mockState} />);
        expect(wrapper.find('Item.todo').length).toEqual(1);
    });
})
