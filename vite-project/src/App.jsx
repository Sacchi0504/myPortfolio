// src/App.jsx
import React from 'react';
import Home from './components/home';
import About from './components/about';
import TechStack from './components/techStack';
import Experience from './components/experience';
import Education from './components/education';
import Project from './components/project';
import Contacts from './components/contacts';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <Experience />
      <Education />
      <Project />
      <Contacts />
    </div>
  );
}

export default App;
