import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaCuttlefish,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const techStacks = [
  { name: "HTML", icon: <FaHtml5 />, level: "Proficient" },
  { name: "CSS", icon: <FaCss3Alt />, level: "Proficient" },
  { name: "JavaScript", icon: <FaJs />, level: "Proficient" },
  { name: "React", icon: <FaReact />, level: "Intermediate" },
  { name: "C", icon: <FaCuttlefish />, level: "Proficient" },
  { name: "C++", icon: <SiCplusplus />, level: "Proficient" },
  { name: "Python", icon: <FaPython />, level: "Proficient" },
  { name: "Java", icon: <FaJava />, level: "Beginner" },
];

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="techstack" className="bg-[#fdf6ec] py-16 px-4 text-[#3b3a30]">
      <h2 className="text-3xl font-bold text-center text-[#567568] mb-10">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`group cursor-pointer flex flex-col items-center justify-center bg-[#e8d8c3] text-[#567568] p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#d7c5aa]`}
          >
            <div className="text-5xl mb-2 transition-all duration-300">{tech.icon}</div>
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
