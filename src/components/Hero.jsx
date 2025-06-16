import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <SectionWrapper id="hero" title="" subtitle="">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-24 md:pt-0">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            Hi, I'm <span className="text-navy-600">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-navy-700 mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg text-navy-600 mb-8 max-w-lg">
            I build exceptional digital experiences with modern technologies.
            Currently focused on creating accessible, user-friendly web
            applications.
          </p>
          <div className="flex space-x-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-navy-700 text-navy-700 hover:bg-navy-50 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-navy-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-navy-100 rounded-full opacity-30 animate-pulse delay-100"></div>
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;