import { useState, useRef } from 'react';

export default function Project({project}) {
    const [tasks, setTasks] = useState([]);
    const NewTask = useRef();

    function addTask() {
        setTasks([...tasks, NewTask.current.value]);
        NewTask.current.value = '';
    }

    function removeTask(index) {
        setTasks(tasks.filter(task => task !== tasks[index]));
    }

    return (
        <section id="project">
            <h2>Project {project.title}</h2>
            <p>
                <input ref={NewTask} type="text" placeholder="Create a Task"/>
                <button onClick={addTask}>Add Task</button>
            </p>
            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>{task} <button onClick={() => removeTask(index)}>Clear</button></li>
                })}
            </ul>
        </section>
    )
}