import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import Project from './components/Project.jsx';
import NewProject from './components/NewProject.jsx';

import { useState, useRef } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  // const [projects, setProjects] = useState([{title: "Project 1", description: "Description 1", dueDate: "2021-10-01", tasks: ["Task 1", "Task 2"]}, {title: "Project 2", description: "Description 2", dueDate: "2021-10-02", tasks: ["Task 3", "Task 4"]}]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(-1);

  function handleAddProject(projectName) {
    setProjects([...projects, projectName]);
    setIsAddingProject(false);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar addProject={setIsAddingProject} selectProject={setSelectedProject} projects={projects}/>
      {(isAddingProject) ? 
        <NewProject addNewProject={handleAddProject}/> : 
        (selectedProject >= 0 ? 
          <Project project={projects[selectedProject]}/> : 
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
