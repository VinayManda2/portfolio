// AdditionalSkills.jsx
import React from "react";

function Skills() {
  return (
    <div className="max-w-4xl m-auto relative">
      {/* Additional skills section */}
      <section>
        <div className="container m-auto px-4 py-14">
          <h2 className="text-2xl font-semibold">
            Additional Technologies and skills
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Git
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Docker & Kubernetes
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:inline-block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Amazon AWS
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Quick learning
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Teamwork
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Engagement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
