import { TaskActionTypes } from "./task.types";

export const initialState = {
    tasks: [],
    currentView: "todo"
  };

export default function reducer(state, action) {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [
                {
                    id: state.tasks.length,
                    title: action.payload,
                    isDone: false
                },
                ...state.tasks
                ]
            };
        case TaskActionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item) => item.id !== action.payload)
            };
        case TaskActionTypes.COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                       ...task,
                        isDone: !task.isDone
                    };
                }
                return task;
                })
            };
        case TaskActionTypes.CHANGE_VIEW:
            return {
                ...state,
                currentView: action.payload
            };
        default:
            return state;
    }
}