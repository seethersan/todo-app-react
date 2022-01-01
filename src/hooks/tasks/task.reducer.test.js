import reducer from "./task.reducers";
import { initialState } from "./task.reducers";
import { add, remove, completeTask, changeView } from "./task.action";

describe('test reducer', () => {
    it('add action works as expected', () => {
        const state = reducer(initialState, add('task 1'));
        expect(state.tasks.length).toBe(1);
    });

    it('remove action works as expected', () => {
        const newState = {
            tasks: [
                {
                    id: 0,
                    title: 'task 1',
                    isDone: false
                }
            ]
        }
        const state = reducer(newState, remove(0));

        expect(state.tasks.length).toBe(0);
    });

    it('completeTask action works as expected', () => {
        const newState = {
            tasks: [
                {
                    id: 0,
                    title: 'task 1',
                    isDone: false
                }
            ]
        }
        const state = reducer(newState, completeTask(0));

        expect(state.tasks[0].isDone).toBe(true);
    });

    it('changeView action works as expected', () => {
        const state = reducer(initialState, changeView('done'));

        expect(state.currentView).toBe('done');
    });
})