import React from "react";
import projectData from "../utils/Projects.json";
import Project1 from "../assets/project1.png";

function Projects() {
  // Helper function to chunk the project data into pairs
  const chunkArray = (array, size) => {
    return array.reduce((acc, _, index) => {
      if (index % size === 0) {
        acc.push(array.slice(index, index + size));
      }
      return acc;
    }, []);
  };

  // Chunk project data into pairs
  const projectsInPairs = chunkArray(projectData, 2);

  return (
    <div className="max-w-4xl m-auto relative">
      {/* Projects section */}
      <section id="projects">
        <div className="container m-auto px-4 sm:py-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          {projectsInPairs.map((pair, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-10 mt-11">
              {pair.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="border border-gray-500 rounded-md p-5 flex-1"
                >
                  <img
                    src={Project1}
                    alt={project.name}
                    className="w-full h-auto"
                  />
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="flex mt-12 gap-2">
                    <a
                      href={project.githubLink}
                      className="flex-1  text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Checkout GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
