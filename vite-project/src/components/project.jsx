import React, { useState } from "react";

const projects = [
  { id: 1, title: "Project", description: "In Progress – Stay Tuned!" },
  { id: 2, title: "Project", description: "In Progress – Stay Tuned!" },
  { id: 3, title: "Project", description: "In Progress – Stay Tuned!" },
];

const ProjectCard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => setIsFlipped((prev) => !prev);

  return (
    <div className="w-full h-56 perspective" onClick={handleToggle}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        } rounded-2xl shadow-lg`}
      >
        <div className="absolute w-full h-full bg-[#d5c6b5] rounded-2xl flex items-center justify-center text-xl font-semibold backface-hidden">
          {title}
        </div>
        <div className="absolute w-full h-full bg-[#e8d8c3] rounded-2xl flex items-center justify-center text-center p-4 font-light backface-hidden rotate-y-180">
          {description}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#f9f4e7] text-[#3b3a30] px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center text-[#567568] mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map(({ id, title, description }) => (
          <ProjectCard key={id} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Project;
