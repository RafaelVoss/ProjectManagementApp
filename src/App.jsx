import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import Project from './components/Project.jsx';
import NewProject from './components/NewProject.jsx';

import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(-1);

  function handleAddProject(projectName) {
    setProjects([...projects, projectName]);
    setIsAddingProject(false);
  }

  function handleAddTask(newTask) {
    projects[selectedProject].tasks.push(newTask);
    setProjects(projects);
  }

  function handleRemoveTask(index) {
    projects[selectedProject].tasks.splice(index, 1);
    setProjects(projects);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar addProject={setIsAddingProject} selectProject={setSelectedProject} projects={projects}/>
      {(isAddingProject) ? 
        <NewProject addNewProject={handleAddProject}/> : 
        (selectedProject >= 0 ? 
          <Project project={projects[selectedProject]} handleAddTask={handleAddTask} handleRemoveTask={handleRemoveTask}/> : 
          <p>Please create a Project{projects.length ? " or select an existing one.": "."}</p>
        )
      }
      <div>
        <p>isAddingProject: {isAddingProject? "true" : "false"}</p>
        <p>selectedProject: {selectedProject}</p>
        <p>selectedProject grater than 0: {selectedProject >= 0 ? "true": "false"}</p>
      </div>
    </main>
  );
}

export default App;
