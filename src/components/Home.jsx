import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight,
  Code,
  Paintbrush,
  Cpu
} from 'lucide-react';
import Navbar from './Navbar';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer', 
      'UI/UX Designer', 
      'AI/ML Enthusiast',
      'Problem Solver',
      'Tech Innovator'
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900  to-blue-900 min-h-screen text-white flex flex-col overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left max-w-2xl"
            >
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-blue-400 font-mono mb-2 text-lg"
              >
                Hello, my name is
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300"
              >
                Priyanshi Bothra
              </motion.h1>
              
              <div className="text-2xl md:text-3xl mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  {text}
                </span>
                <Cursor cursorStyle="|" cursorColor="#93c5fd" />
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-300 mb-8 text-lg leading-relaxed"
              >
                Crafting digital experiences that blend aesthetics with functionality. 
                I specialize in building responsive, performant web applications with 
                intuitive interfaces and robust backends.
              </motion.p>
              
              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <a 
                  href="#contact" 
                  className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
                </a>
                
                <a 
                  href="#projects" 
                  className="relative group border-2 border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-500/10 flex items-center"
                >
                  <span>View Resume</span>
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex justify-center lg:justify-start space-x-5"
              >
                <a 
                  href="mailto:priyanshibothra753@gmail.com" 
                  className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/priyanshi0609" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-300 transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/priyanshi-bothra-339568219/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Main profile image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                  <img 
                    src="/priyanshi.png" 
                    alt="Priyanshi Bothra" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating tech icons around the profile */}
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-6 -left-6 bg-blue-600/20 backdrop-blur-sm p-3 rounded-full border border-blue-400/30 shadow-lg"
                >
                  <Code className="h-6 w-6 text-blue-300" />
                </motion.div>
                
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '1s' }}
                  className="absolute -bottom-6 -right-6 bg-purple-600/20 backdrop-blur-sm p-3 rounded-full border border-purple-400/30 shadow-lg"
                >
                  <Paintbrush className="h-6 w-6 text-purple-300" />
                </motion.div>
                
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '2s' }}
                  className="absolute top-1/2 -right-10 bg-blue-500/20 backdrop-blur-sm p-3 rounded-full border border-blue-400/30 shadow-lg"
                >
                  <Cpu className="h-6 w-6 text-blue-200" />
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 top-4 left-4 rounded-2xl border-2 border-blue-400/10"></div>
              <div className="absolute -z-20 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 top-8 left-8 rounded-2xl border-2 border-purple-400/10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;