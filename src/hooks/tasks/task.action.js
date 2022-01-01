import { TaskActionTypes } from "./task.types";

export const add = task => ({
    type: TaskActionTypes.ADD_TASK,
    payload: task
  });
  
  export const remove = id => ({
    type: TaskActionTypes.REMOVE_TASK,
    payload: id
  });
  
  export const completeTask = id => ({
    type: TaskActionTypes.COMPLETE_TASK,
    payload: id
  });
  
  export const changeView = type => ({
    type: TaskActionTypes.CHANGE_VIEW,
    payload: type
  });