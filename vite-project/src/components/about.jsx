// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-[#f9f4e7] px-4 py-20 text-[#3b3a30]">
      <div className="max-w-3xl bg-[#e8d8c3] p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-[#567568]">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm <strong>Sacchi</strong>, a third-year B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning.
          As a web developer and AI enthusiast, I enjoy building intuitive, user-friendly web experiences using both front-end and back-end technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
