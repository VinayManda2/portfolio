// Projects.jsx
import React from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import projectData from "../utils/projects.json";

function Projects() {
  return (
    <div className="max-w-4xl m-auto relative">
      {/* Projects section */}
      <section id="projects">
        <div className="container m-auto px-4 sm:py-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="flex flex-col sm:flex-row gap-10 mt-11">
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={Project1} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
                Furniture store landing page
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Responsive HTML/CSS layout for online furniture store. HTML5,
                CSS3 (SCSS)
              </p>
              <div className="flex mt-12 gap-2">
                <button className="flex-1  text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={Project2} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
                Designer furniture store landing page
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Responsive HTML/CSS layout for online store of designer
                furniture. HTML5, CSS3 (SCSS)
              </p>
              <div className="flex gap-2 mt-12">
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-10 mt-11">
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={Project3} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
                Landing page for front-end developer
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Responsive HTML/CSS layout for landing page for front-end
                developer. HTML5, CSS3 (SCSS)
              </p>
              <div className="flex gap-4 mt-12">
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={Project4} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
                Website redesign for The Venus project
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                (SCSS)
              </p>
              <div className="flex gap-2 mt-12">
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
