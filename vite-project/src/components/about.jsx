import React from 'react';
import { Rocket, Code, Laptop, Star } from 'lucide-react';

const steps = [
  {
    title: "Curiosity Sparks",
    description: "Started my coding journey with a simple 'Hello World'. Intrigued by how code could create something out of nothing.",
    icon: <Rocket size={24} className="text-[#567568]" />,
    align: "left"
  },
  {
    title: "First Lines of Code",
    description: "Dove into C, C++, and Python. Built basic logic and understood how computers actually think.",
    icon: <Code size={24} className="text-[#567568]" />,
    align: "right"
  },
  {
    title: "Building Real Projects",
    description: "Discovered React, Node.js, and modern web tech. Suddenly, I wasn't just writing logic—I was creating products people could use.",
    icon: <Laptop size={24} className="text-[#567568]" />,
    align: "left"
  },
  {
    title: "Where I Am Now",
    description: "Interned as an SDE, built complex applications, and continuously learning to become a top-tier Full-Stack Engineer.",
    icon: <Star size={24} className="text-[#567568]" />,
    align: "right"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#e8d8c3] text-[#3b3a30] relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* Intro Card */}
        <div className="max-w-3xl mx-auto bg-[#fdf6ec] p-8 md:p-12 rounded-[2rem] shadow-xl border border-[#d5c6b5] text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#567568] tracking-tight">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
            I'm <strong>Sacchi</strong>, a third-year B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning.
            As a web developer and AI enthusiast, I enjoy building intuitive, user-friendly web experiences using both front-end and back-end technologies.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#567568] mb-16 tracking-tight">
            My Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-[#d5c6b5] ml-4 md:ml-0 md:border-l-0">
              {/* Desktop Center Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d5c6b5] transform -translate-x-1/2 rounded-full"></div>
              
              {steps.map((step, index) => (
                <div key={index} className={`relative pl-8 md:pl-0 mb-12 flex flex-col md:flex-row md:items-center md:justify-between group ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Mobile Dot (Icon) */}
                  <div className="absolute left-[-24px] top-4 w-11 h-11 bg-white border-4 border-[#567568] rounded-full flex items-center justify-center z-10 md:hidden">
                    {React.cloneElement(step.icon, { size: 18 })}
                  </div>

                  {/* Desktop Dot (Icon) */}
                  <div className="hidden md:flex absolute left-1/2 w-14 h-14 bg-white border-4 border-[#567568] rounded-full transform -translate-x-1/2 items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-[#fdf6ec] p-6 md:p-8 rounded-3xl shadow-lg border border-[#d5c6b5] hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-[#567568] mb-3">{step.title}</h3>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
