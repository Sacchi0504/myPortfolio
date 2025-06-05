// src/pages/Contact.jsx
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#fdf6ec] text-[#3b3a30] py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#567568] mb-8">Get in Touch</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="https://www.linkedin.com/in/sacchi052004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm bg-[#e8d8c3] px-4 py-2 rounded-md shadow hover:bg-[#d7c5aa] hover:scale-105 transition-all duration-300"
        >
          <Linkedin size={20} className="text-[#567568]" />
          LinkedIn
        </a>

        <a
          href="https://github.com/Sacchi0504"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm bg-[#e8d8c3] px-4 py-2 rounded-md shadow hover:bg-[#d7c5aa] hover:scale-105 transition-all duration-300"
        >
          <Github size={20} className="text-[#567568]" />
          GitHub
        </a>

        <a
          href="mailto:sacchi052004@gmail.com"
          className="flex items-center gap-2 text-sm bg-[#e8d8c3] px-4 py-2 rounded-md shadow hover:bg-[#d7c5aa] hover:scale-105 transition-all duration-300"
        >
          <Mail size={20} className="text-[#567568]" />
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
