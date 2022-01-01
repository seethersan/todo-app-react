import React from "react";
import NavBar from "../nvabar/navbar.component";
import TaskForm from "../form-input/form-input.component";
import ListTask from "../list/list.component";
import './directory.style.scss'

const Directory = (props) => {
    const { tasks, currentView } = props;

    return (
        <React.Fragment>
            <NavBar currentView={currentView} />
            {currentView === 'todo' ? <TaskForm /> : ''} 
            
            <br/>
            <h2 className="title">{currentView.toUpperCase()} Items</h2>
            <ListTask {...props}/>
        </React.Fragment>
    )
}

export default Directory;