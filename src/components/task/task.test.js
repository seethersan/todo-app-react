import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Task from './task.component';

it('expect to render Task component', () => {
    const mockTask = {
        task: {
            id: 0,
            title: 'Task 1',
            isDone: true
        }
    } 
    expect(shallow(<Task {...mockTask} />)).toMatchSnapshot();
});