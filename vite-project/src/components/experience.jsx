import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Fortune Minds India LLP",
    date: "Feb 2026 – Apr 2026",
    description: [
      "Developed and maintained web application features using modern JavaScript frameworks.",
      "Built and integrated frontend components with backend services, improving usability and responsiveness.",
      "Collaborated with developers to debug issues and enhance application performance.",
      "Gained experience in real-world development workflows, version control (Git), and deployment practices."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#f9f4e7] py-16 md:py-24 px-4 md:px-6 text-[#3b3a30] relative overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#567568] mb-12 md:mb-20 tracking-tight">
        Experience
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l-4 border-[#d5c6b5] ml-2 md:ml-0 md:border-l-0">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d5c6b5] transform -translate-x-1/2 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-6 md:pl-0 mb-10 md:mb-16 flex flex-col md:flex-row md:items-start md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Mobile Timeline Dot */}
              <div className="absolute left-[-12px] top-6 w-5 h-5 bg-[#567568] border-4 border-[#f9f4e7] rounded-full z-10 md:hidden"></div>

              {/* Desktop Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-10 w-6 h-6 bg-[#567568] border-4 border-[#f9f4e7] rounded-full transform -translate-x-1/2 z-10 shadow-md group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-white p-5 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl border border-[#e8d8c3] relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-[#567568] to-[#8fa99c]"></div>
                
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold text-[#567568] bg-[#e8d8c3]/40 px-3 md:px-4 py-1 md:py-1.5 rounded-full w-fit mb-1 md:mb-2">
                    <Calendar size={14} className="md:w-4 md:h-4" /> {exp.date}
                  </span>
                  <h3 className="text-xl md:text-3xl font-extrabold text-[#3b3a30] leading-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-base md:text-xl font-bold text-[#567568] flex items-center gap-2 mt-1">
                    <Briefcase size={16} className="md:w-5 md:h-5" /> {exp.company}
                  </h4>
                </div>
                
                <ul className="space-y-3 md:space-y-4 mt-4 md:mt-8 text-sm md:text-base text-gray-600 font-medium">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#567568] mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
