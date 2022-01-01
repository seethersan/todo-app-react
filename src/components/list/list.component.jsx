import React from "react";
import TaskItem from "../task/task.component";
import { List } from "antd";

export default function ListTask(props) {
    const { tasks, currentView } = props;

    const filterTasks = type => {
        switch (type) {
          case "done":
            return tasks.filter(task => task.isDone);
          case "todo":
            return tasks.filter(task => !task.isDone);
          default:
            return tasks;
        }
      };

      return (
        <List
            className="ul-tasks"
            itemLayout="horizontal"
            bordered={true}
            dataSource={filterTasks(currentView)}
            renderItem={task => (
                <TaskItem task={task} id={task.id} key={`task_${task.id}`} />
                )}
            locale={{ emptyText: "No to-dos found." }}
        />
      )
}