import React, { useContext } from "react";
import { List, Checkbox } from "antd";
import TasksDispatch from "../../hooks/tasks/task.provider";
import { completeTask, remove } from "../../hooks/tasks/task.action";

export default function TaskItem(props) {
    const dispatch = useContext(TasksDispatch);

    const {
        task: { id, title, isDone }
    } = props;

    const handleStatus = () => {
        dispatch(completeTask(id));
    };

    const handleRemove = () => {
        dispatch(remove(id));
    };

    return (
        <List.Item
          data-item={id}
          className={isDone ? "done" : "todo"}
          actions={[
            <a href="#" onClick={handleRemove}>
              Remove
            </a>
          ]}
        >
          <List.Item.Meta
            title={title}
            avatar={<Checkbox onChange={handleStatus} />}
          />
        </List.Item>
      );
}