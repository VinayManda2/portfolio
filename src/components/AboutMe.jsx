import React from "react";
import aboutMeData from "../utils/AboutMe.json"; // Import JSON data

function AboutMe() {
  return (
    <div className="max-w-4xl m-auto relative">
      <section className="py-8" id="aboutme">
        <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold">About me</h2>
          <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
            {aboutMeData.map((milestone, index) => (
              <div
                key={index}
                className={`pl-24 ${
                  index !== 0 ? "mt-24" : ""
                } relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]`}
              >
                <h3 className="absolute left-0 text-lg font-semibold">
                  {milestone.year}
                </h3>
                <p>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
