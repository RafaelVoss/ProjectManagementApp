import { useRef, useState } from 'react';

export default function Project({project, handleAddTask, handleRemoveTask}) {
    const NewTask = useRef();

    function addTask() {
        handleAddTask(NewTask.current.value);
        NewTask.current.value = '';
    }

    function removeTask(index) {
        handleRemoveTask(index);
    }

    return (
        <section id="project">
            <h2>Project {project.title}</h2>
            <p>
                <input ref={NewTask} type="text" placeholder="Create a Task"/>
                <button onClick={addTask}>Add Task</button>
            </p>
            <ul>
                {project.tasks.map((task, index) => {
                    return <li key={index}>{task} <button onClick={() => removeTask(index)}>Clear</button></li>
                })}
            </ul>
        </section>
    )
}