import { useRef } from 'react';

export default function NewProject({addNewProject}) {
    const Title = useRef();
    const Description = useRef();
    const DueDate = useRef();

    const handleAddProject = () => {
        addNewProject({
            title: Title.current.value,
            description: Description.current.value,
            dueDate: DueDate.current.value,
            tasks: []
        });
        Title.current.value = '';
        Description.current.value = '';
        DueDate.current.value = '';
    }
    
    return(
        <section id="new-project">
            <h2>Add New Project</h2>
            <div>
                <label htmlFor="project-name">TITLE</label><br></br>
                <input ref={Title} type="text" id="project-name" name="project-name" required/><br></br><br></br>
                <label htmlFor="description">DESCRIPTION</label><br></br>
                <input ref={Description} type="text" id="description" name="description" required/><br></br><br></br>
                <label htmlFor="due-date">DUE DATE</label><br></br>
                <input ref={DueDate} type="date" id="due-date" name="due-date" required/><br></br><br></br>
                <button onClick={handleAddProject}>Add Project</button>
            </div>
        </section>
    )
}