import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educations = [
  {
    institution: "Narula Institute of Technology, Kolkata",
    degree: "B.Tech in Computer Science & Engineering (AIML)",
    date: "2023 – 2027",
    score: "CGPA: 8.9/10"
  },
  {
    institution: "Crescent Public School (CBSE)",
    degree: "Class XII",
    date: "2022",
    score: "Percentage: 90.8%"
  },
  {
    institution: "Guru Gobind Singh Public School (CBSE)",
    degree: "Class X",
    date: "2020",
    score: "Percentage: 93.4%"
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-[#fdf6ec] py-24 px-6 text-[#3b3a30] relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#567568] mb-20 tracking-tight">
        Education
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l-4 border-[#d5c6b5] ml-4 md:ml-0 md:border-l-0">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d5c6b5] transform -translate-x-1/2 rounded-full"></div>
          
          {educations.map((edu, index) => (
            <div key={index} className={`relative pl-8 md:pl-0 mb-16 flex flex-col md:flex-row md:items-start md:justify-between group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Mobile Timeline Dot */}
              <div className="absolute left-[-14px] top-10 w-6 h-6 bg-[#567568] border-4 border-[#fdf6ec] rounded-full z-10 md:hidden"></div>

              {/* Desktop Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-10 w-6 h-6 bg-[#567568] border-4 border-[#fdf6ec] rounded-full transform -translate-x-1/2 z-10 shadow-md group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-[#e8d8c3] relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#567568] to-[#8fa99c]"></div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#567568] bg-[#e8d8c3]/40 px-4 py-1.5 rounded-full w-fit">
                      <Calendar size={16} /> {edu.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-white bg-[#567568] px-4 py-1.5 rounded-full shadow-sm">
                      <Award size={16} /> {edu.score}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#3b3a30] mt-4 leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-500 flex items-start gap-2 mt-2">
                    <GraduationCap size={24} className="flex-shrink-0 mt-0.5 text-[#567568]" /> 
                    <span>{edu.institution}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
