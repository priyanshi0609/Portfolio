import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experiences';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-50 text-navy-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;