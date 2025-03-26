import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { 
  AtSign, 
  Github, 
  Linkedin, 
  Download, 
  ArrowRight 
} from 'lucide-react';
import Navbar from './Navbar';

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
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl"
            >
              <img 
                src="/priyanshi.png" 
                alt="Priyanshi Bothra" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left max-w-xl"
            >
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 whitespace-nowrap"
              >
                Hi, I'm <span className="text-blue-400">Priyanshi Bothra</span>
              </motion.h1>
              
              <div className="text-2xl md:text-3xl mb-6 h-12">
                <span>I'm a </span>
                <span className="font-bold text-blue-300">
                  {text}
                </span>
                <Cursor cursorStyle="_" />
              </div>
              
              <p className="text-gray-300 mb-8 text-lg">
                A passionate developer creating innovative digital experiences. 
                I love turning complex problems into elegant solutions.
              </p>
              
              {/* Action Buttons and Social Icons */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex space-x-4">
                  <a 
                    href="#contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
                  >
                    Contact Me <ArrowRight className="ml-2" />
                  </a>
                  <a 
                    href="#projects" 
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
                  >
                    See My Work
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-3 ml-4">
                  <a 
                    href="mailto:priyanshibothra753@gmail.com" 
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <AtSign />
                  </a>
                  <a 
                    href="https://github.com/priyanshi0609" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <Github />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/priyanshi-bothra-339568219/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <Linkedin />
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <Download />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;