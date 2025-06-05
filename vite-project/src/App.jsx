// src/App.jsx
import React from 'react';
import Home from './components/home';
import About from './components/about';
import TechStack from './components/techStack';
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
      <Project />
      <Contacts />
    </div>
  );
}

export default App;
