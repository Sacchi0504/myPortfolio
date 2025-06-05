// src/pages/Home.jsx
import React from "react";
import profileImage from "../assets/profile.jpeg"; // Make sure your image is placed in /src/assets/

const Home = () => {
  return (
    <section
      id="home"
      className="bg-[#fdf6ec] text-[#3b3a30] min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl w-full">
        {/* Creative Profile Box */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#e8d8c3] group">
          <div className="absolute inset-0 rounded-full border-4 border-[#d7c5aa] animate-pulse opacity-60" />
          <div className="absolute -inset-1 rounded-full bg-[#fdf6ec]/40 blur-2xl z-0"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#567568] mb-4">
            Hi, I'm <span className="text-[#3b3a30]">Sacchi</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate Web Developer & CSE AIML student at Narula Institute of Technology.
          </p>
          <p className="text-md text-[#4f4e4c] mb-8">
            I focus on building elegant and responsive interfaces. Currently exploring Backend
            Development and Machine Learning to become a full-stack engineer.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#567568] text-[#fdf6ec] px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#4a6559] transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
