import React, { useState } from "react";

const projects = [
  { id: 1, title: "Mindmate", description: "Check out this project on GitHub!", link: "https://github.com/Sacchi0504/Mindmate", liveLink: "https://themindmates.in", image: "/projects/mindmate.png" },
  { id: 2, title: "mindCareer", description: "Check out this project on GitHub!", link: "https://github.com/Sacchi0504/mindCareer", liveLink: "https://mindcareer.themindmates.in", image: "/projects/mindcareer.png" },
  { id: 3, title: "Provium", description: "Check out this project on GitHub!", link: "https://github.com/Sacchi0504/Provium", liveLink: "https://provium.vercel.app/", image: "/projects/provium.png" },
  { id: 4, title: "MarginMind", description: "Check out this project on GitHub!", link: "https://github.com/Sacchi0504/MarginMind", liveLink: "https://marginmind-jade.vercel.app/", image: "/projects/marginmind.png" },
];

const ProjectCard = ({ title, description, link, liveLink, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-56 perspective cursor-pointer" 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        } rounded-2xl shadow-lg`}
      >
        <div className="absolute w-full h-full bg-white rounded-2xl flex items-center justify-center text-xl font-semibold backface-hidden overflow-hidden p-2">
          {image ? (
            <img src={image} alt={`${title} - Web Development Project by Sacchi`} className="w-full h-full object-contain" />
          ) : (
            <span>{title}</span>
          )}
        </div>
        <div className="absolute w-full h-full bg-[#e8d8c3] rounded-2xl flex flex-col items-center justify-center text-center p-4 font-light backface-hidden rotate-y-180">
          <p className="mb-4">{description}</p>
          <div className="flex gap-3">
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#567568] font-semibold text-sm hover:underline border border-[#567568] px-3 py-2 rounded-md transition-colors hover:bg-[#567568] hover:text-[#e8d8c3]"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#567568] text-[#e8d8c3] font-semibold text-sm hover:underline border border-[#567568] px-3 py-2 rounded-md transition-colors hover:bg-transparent hover:text-[#567568]"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
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
        {projects.map(({ id, title, description, link, liveLink, image }) => (
          <ProjectCard key={id} title={title} description={description} link={link} liveLink={liveLink} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Project;
