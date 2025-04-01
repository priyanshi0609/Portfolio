import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Lightbulb, 
  Award, 
  Target, 
  Globe 
} from 'lucide-react';
import Navbar from './Navbar';

const AboutSection = () => {
  const skills = [
    { 
      icon: <Code className="text-blue-500" size={36} />, 
      title: 'Web Development', 
      description: 'Crafting responsive and dynamic web applications using modern technologies.' 
    },
    { 
      icon: <Palette className="text-purple-500" size={36} />, 
      title: 'UI/UX Design', 
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.' 
    },
    { 
      icon: <Lightbulb className="text-yellow-500" size={36} />, 
      title: 'Problem Solving', 
      description: 'Analytical approach to breaking down complex problems and developing innovative solutions.' 
    }
  ];

  const achievements = [
    { 
      icon: <Award className="text-green-500" size={36} />, 
      title: 'Top Performer', 
      description: 'Recognized for outstanding performance in web development projects.' 
    },
    { 
      icon: <Target className="text-red-500" size={36} />, 
      title: 'Goal Oriented', 
      description: 'Consistently delivering high-quality work with precision and dedication.' 
    },
    { 
      icon: <Globe className="text-cyan-500" size={36} />, 
      title: 'Global Perspective', 
      description: 'Experienced in working with international teams and diverse project requirements.' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col">
      {/* Using the Navbar component instead of custom navbar */}
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
                  A dynamic web developer with a passion for creating innovative digital solutions. 
                  My journey in technology is driven by curiosity, creativity, and a commitment to 
                  continuous learning. I thrive on transforming complex ideas into user-friendly 
                  and visually appealing web experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 5 years of experience in full-stack development, I've had the opportunity
                  to work on diverse projects across various industries. My approach combines technical 
                  expertise with an artistic eye for detail, ensuring that every project not only 
                  functions flawlessly but also delivers an exceptional user experience.
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
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-400">My Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center shadow-xl"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">{skill.title}</h4>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-400">My Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl"
                >
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: 10 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-4">{achievement.title}</h4>
                  <p className="text-gray-400">{achievement.description}</p>
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