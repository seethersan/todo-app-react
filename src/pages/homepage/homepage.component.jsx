import Directory from "../../components/directory/directory.component";
import taskReducer, { initialState } from './../../hooks/tasks/task.reducers'
import TasksDispatch from "../../hooks/tasks/task.provider";
import { usePersistedReducer } from "../../hooks/tasks/task.persistor";
import './homepage.style.scss';

import { useLocation } from 'react-router-dom';

export default function HomePage() {
    const storageKey = 'TASK_LIST'

    const { state, dispatch } = usePersistedReducer(taskReducer, initialState, storageKey);

    const location = useLocation();
    
    if (location.pathname === '/done'){
        state.currentView = 'done';
    } else {
        state.currentView = 'todo';
    }

    console.log(state);

    return (
        <div className="homepage">
            <h1>Todo App</h1>
            <TasksDispatch.Provider value={dispatch}>
                <Directory tasks={state.tasks} currentView={state.currentView} />
            </TasksDispatch.Provider>
        </div>
    )
}