import * as react from 'react'
import { shallow, mount, render } from 'enzyme';
import { add } from "../../hooks/tasks/task.action";
import TaskForm from './form-input.component';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

it('expect to render TaskForm component', () => {
    expect(shallow(<TaskForm />)).toMatchSnapshot();
});

it('correctly add task', () => {
    const mockDispatch = jest.fn();

    jest.spyOn(react, 'useContext').mockImplementation(() => mockDispatch);

    const newTask = 'new task 1';
    
    const wrapper = mount(<TaskForm />);

    wrapper.find('input.form-input').simulate("change", { target: { value: newTask }});
    wrapper.find('button.form-button').simulate('click');

    expect(mockDispatch).toHaveBeenCalledWith(add(newTask))
});