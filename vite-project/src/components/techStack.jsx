import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaCuttlefish,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaNetworkWired
} from "react-icons/fa";
import { SiCplusplus, SiVite, SiTailwindcss, SiExpress, SiFirebase, SiMongodb, SiVercel } from "react-icons/si";

const techStacks = [
  { name: "HTML", icon: <FaHtml5 />, level: "Proficient" },
  { name: "CSS", icon: <FaCss3Alt />, level: "Proficient" },
  { name: "JavaScript", icon: <FaJs />, level: "Proficient" },
  { name: "React.js", icon: <FaReact />, level: "Intermediate" },
  { name: "Vite", icon: <SiVite />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Proficient" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
  { name: "Firebase", icon: <SiFirebase />, level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
  { name: "SQL", icon: <FaDatabase />, level: "Proficient" },
  { name: "REST APIs", icon: <FaServer />, level: "Proficient" },
  { name: "C", icon: <FaCuttlefish />, level: "Proficient" },
  { name: "C++", icon: <SiCplusplus />, level: "Proficient" },
  { name: "Python", icon: <FaPython />, level: "Proficient" },
  { name: "Java", icon: <FaJava />, level: "Beginner" },
  { name: "Git", icon: <FaGitAlt />, level: "Proficient" },
  { name: "GitHub", icon: <FaGithub />, level: "Proficient" },
  { name: "Vercel", icon: <SiVercel />, level: "Intermediate" },
  { name: "OOP", icon: <FaCode />, level: "Proficient" },
  { name: "Networking", icon: <FaNetworkWired />, level: "Intermediate" },
  { name: "DBMS", icon: <FaDatabase />, level: "Proficient" },
];

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="techstack" className="bg-[#fdf6ec] py-16 px-4 md:px-8 text-[#3b3a30]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#567568] mb-12 tracking-tight">
        Tech Stack & Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`group cursor-pointer flex flex-col items-center justify-center bg-[#e8d8c3] text-[#567568] p-4 md:p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#d7c5aa]`}
          >
            <div className="text-4xl md:text-5xl mb-3 transition-all duration-300">{tech.icon}</div>
            <h4 className="text-lg font-semibold">{tech.name}</h4>
            <p
              className={`text-sm mt-2 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {tech.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
