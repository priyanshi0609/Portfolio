import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from './Navbar';  // Import the Navbar component

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Web Developer', 
      'UI/UX Designer', 
      'AI/ML Enthusiast', 
      
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-24 md:pt-32 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Priyanshi Bothra</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-6 h-12">
            <span>I'm a </span>
            <span className="font-bold text-blue-400">
              {text}
            </span>
            <Cursor cursorStyle="_" />
          </div>
          
          <p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            A passionate developer creating innovative digital experiences. 
            I love turning complex problems into elegant solutions.
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              See My Work
            </a>
          </div>
        </div>
        
        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <img 
              src="/priyanshi.png" 
              alt="Your Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;