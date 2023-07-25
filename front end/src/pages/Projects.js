import React from "react";
 

// Define the project data directly within the component
const projectsData = [
  {
    "name": "2048",
    "live": "https://undftdcreed.github.io/2048/",
    "git": "https://github.com/undftdcreed/2048",
    "image": "2048.png"
  },
  {
    "name": "2nds",
    "live": "https://project-2-405j.onrender.com/",
    "git": "https://github.com/undftdcreed/Project-2",
    "image": "2nds.png"
  },
  {
    "name": "Do you pay the one?",
    "live": "https://doyoupaytheone.netlify.app/",
    "git": "https://github.com/undftdcreed/Do-You-Pay-the-1-",
    "image": "do you pay the one.png"
  },
  {
    "name": "SnapShoot",
    "live": "https://snapshoot-fobr.onrender.com/",
    "git": "https://github.com/undftdcreed/SnapShoot",
    "image": "SnapShoot.png"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <div className="project-item" key={project.name}>
          <img src={project.image} alt={project.name} />
          <h1>{project.name}</h1>
          <div className="project-links">
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>Live site</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Projects;

