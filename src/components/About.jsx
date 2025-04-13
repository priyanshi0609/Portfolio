import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Lightbulb, 
  Award, 
  Trophy, 
  Medal,
  Star,
  Bot,
} from 'lucide-react';
import Navbar from './Navbar';

const AboutSection = () => {
  const skills = [
    { 
      icon: <Code className="text-blue-500" size={36} />, 
      title: 'Full-stack Web Development', 
      description: 'Proficient in front-end and backend, I build dynamic, responsive, and scalable web applications with modern frameworks',
    },
    { 
      icon: <Palette className="text-purple-500" size={36} />, 
      title: 'UI/UX Design', 
      description: 'Passionate about creating intuitive, user-friendly interfaces with a focus on accessibility, aesthetics, and seamless user experiences'
    },
    { 
      icon: <Bot className="text-blue-500" size={36} />, 
      title: 'AI/ML Enthusiast', 
      description: 'Exploring the potential of artificial intelligence and machine learning to develop intelligent solutions that enhance automation and decision-making' 
    },
    { 
      icon:<Lightbulb className="text-yellow-500" size={36} />,
      title: 'Data Structure and Algorithms',
      description: 'Strong problem-solving skills with a deep understanding of algorithms and optimization techniques, essential for efficient coding and competitive programming.'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero section with title */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-blue-400">Me</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Passionate about creating innovative digital experiences that transform complex challenges into elegant, user-centric solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section id="about-content" className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* About Myself Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">Who I Am</h3>
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  className="h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl"
                >
                  <span className="text-6xl">👨‍💻</span>
                </motion.div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-300 leading-relaxed mb-6">
                I am Priyanshi Bothra, a Full Stack Web Developer, UI/UX Designer, and AI/ML Enthusiast, currently pursuing B.Tech IT at GGSIPU. Passionate about crafting seamless digital experiences, I thrive on curiosity, creativity, and commitment. Beyond coding, I am a confident speaker and natural communicator, actively hosting events and engaging with communities. I love competing in Hackathons and Coding competitions, constantly pushing boundaries to innovate and excel.
                </p>
                
                <div className="flex space-x-4">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-blue-500/20 p-3 rounded-full"
                  >
                    <Code className="text-blue-400" size={24} />
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-purple-500/20 p-3 rounded-full"
                  >
                    <Palette className="text-purple-400" size={24} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* My Expertise Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-400 text-center">My Expertise</h3>
            
            {/* 2x2 Matrix Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "rgba(30, 41, 59, 0.7)" 
                  }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-700/50 flex flex-col h-full transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gray-900/50 mr-4">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{skill.title}</h4>
                  </div>
                  <p className="text-gray-400 mt-2">{skill.description}</p>
                  
                  {/* Decorative element */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;