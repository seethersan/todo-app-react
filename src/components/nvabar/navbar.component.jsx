import React, { useContext } from "react";
import { changeView } from "../../hooks/tasks/task.action";
import TasksDispatch from "../../hooks/tasks/task.provider";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const TabPane = Tabs.TabPane;

export default function NavBar(props) {
    return (
        <Tabs defaultActiveKey="todo" activeKey={props.currentView}>            
            <TabPane tab={<Link to="/todo">Todo</Link>} key="todo" className="todo" />
            <TabPane tab={<Link to="/done">Done</Link>} key="done" className="done" />
        </Tabs>
    )
}