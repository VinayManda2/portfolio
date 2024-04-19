import React from "react";
import technologiesData from "../utils/Technologies.json";

function Technologies() {
  return (
    <div className="max-w-4xl m-auto relative">
      {/* Technologies section */}
      <section className="py-10" id="technologies">
        <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold">Technologies</h2>
          <div className="mt-14">
            {technologiesData.map((tech, index) => (
              <div key={index} className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{tech.name}</h2>
                  <p className="text-gray-500">{tech.proficiency}</p>
                </div>
                <span
                  style={{ width: tech.progressBarWidth }} // Set width dynamically
                  className="h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technologies;
