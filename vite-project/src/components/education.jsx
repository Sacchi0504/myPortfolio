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
    <section id="education" className="bg-[#fdf6ec] py-16 md:py-24 px-4 md:px-6 text-[#3b3a30] relative overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#567568] mb-12 md:mb-20 tracking-tight">
        Education
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l-4 border-[#d5c6b5] ml-2 md:ml-0 md:border-l-0">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d5c6b5] transform -translate-x-1/2 rounded-full"></div>
          
          {educations.map((edu, index) => (
            <div key={index} className={`relative pl-6 md:pl-0 mb-10 md:mb-16 flex flex-col md:flex-row md:items-start md:justify-between group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Mobile Timeline Dot */}
              <div className="absolute left-[-12px] top-6 w-5 h-5 bg-[#567568] border-4 border-[#fdf6ec] rounded-full z-10 md:hidden"></div>

              {/* Desktop Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-10 w-6 h-6 bg-[#567568] border-4 border-[#fdf6ec] rounded-full transform -translate-x-1/2 z-10 shadow-md group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 transition-all duration-500 hover:-translate-y-2">
              <div className="bg-white p-5 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl border border-[#e8d8c3] relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-[#567568] to-[#8fa99c]"></div>
                
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex flex-wrap justify-between items-start gap-2 md:gap-4">
                    <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold text-[#567568] bg-[#e8d8c3]/40 px-3 md:px-4 py-1 md:py-1.5 rounded-full w-fit">
                      <Calendar size={14} className="md:w-4 md:h-4" /> {edu.date}
                    </span>
                    <span className="inline-flex items-center gap-1 md:gap-1 text-xs md:text-sm font-bold text-white bg-[#567568] px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm">
                      <Award size={14} className="md:w-4 md:h-4" /> {edu.score}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-3xl font-extrabold text-[#3b3a30] mt-2 md:mt-4 leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-base md:text-xl font-bold text-gray-500 flex items-start gap-2 mt-1 md:mt-2">
                    <GraduationCap size={20} className="md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#567568]" /> 
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
