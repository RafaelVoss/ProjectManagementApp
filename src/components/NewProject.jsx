import { useRef } from 'react';

export default function NewProject(addNewProject) {
    const ProjectName = useRef();
    
    return(
        <section id="new-project">
            <h2>Add New Project</h2>
            <div>
                <label htmlFor="project-name">Project Name</label>
                <input ref={ProjectName} type="text" id="project-name" name="project-name" required/>
                <button onClick={() => addNewProject(ProjectName.current.value)}>Add Project</button>
            </div>
        </section>
    )
}