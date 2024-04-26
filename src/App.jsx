import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import Project from './components/Project.jsx';
import NewProject from './components/NewProject.jsx';

import { useState, useRef } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  const [addingProject, setAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProject(projectName) {
    setProjects([...projects, projectName]);
    setAddingProject(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar addProject={setAddingProject} selectProject={setSelectedProject} projects={projects}/>
      {(!projects.length && selectedProject) ? 
        <Project name="Project 1"/> : 
        (!addingProject && <p>No projects yet or no project selected.</p>)
      }
      {(addingProject) ? <NewProject addNewProject={handleAddProject}/> : null}
    </main>
  );
}

export default App;
