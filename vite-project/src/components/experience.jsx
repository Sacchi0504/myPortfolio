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
    <section id="experience" className="bg-[#f9f4e7] py-24 px-6 text-[#3b3a30] relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#567568] mb-20 tracking-tight">
        Experience
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l-4 border-[#d5c6b5] ml-4 md:ml-0 md:border-l-0">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d5c6b5] transform -translate-x-1/2 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-8 md:pl-0 mb-16 flex flex-col md:flex-row md:items-start md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Mobile Timeline Dot */}
              <div className="absolute left-[-14px] top-10 w-6 h-6 bg-[#567568] border-4 border-[#f9f4e7] rounded-full z-10 md:hidden"></div>

              {/* Desktop Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-10 w-6 h-6 bg-[#567568] border-4 border-[#f9f4e7] rounded-full transform -translate-x-1/2 z-10 shadow-md group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#e8d8c3] relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#567568] to-[#8fa99c]"></div>
                
                <div className="flex flex-col gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#567568] bg-[#e8d8c3]/40 px-4 py-1.5 rounded-full w-fit mb-2">
                    <Calendar size={16} /> {exp.date}
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#3b3a30] leading-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-bold text-[#567568] flex items-center gap-2 mt-1">
                    <Briefcase size={20} /> {exp.company}
                  </h4>
                </div>
                
                <ul className="space-y-4 mt-8 text-gray-600 font-medium">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#567568] mt-2 flex-shrink-0"></span>
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
