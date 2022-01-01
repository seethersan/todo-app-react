import React, { useContext, useState } from "react";
import { Input, Button, Row, Col } from "antd";
import TasksDispatch from "../../hooks/tasks/task.provider";
import { add } from "../../hooks/tasks/task.action";
import "./form-input.style.scss"

export default function TaskForm(props) {
    const dispatch = useContext(TasksDispatch);
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(add(value));
        setValue("");
    };

    return (
        <Row>
            <Col span={24}>
                <Input value={value} onChange={handleChange} className='form-input' placeholder='New task' id='new-task-input' />
                <Button onClick={handleSubmit} type="primary" className='form-button' id='new-task-button'>Add</Button>
            </Col>
        </Row>
    );
}