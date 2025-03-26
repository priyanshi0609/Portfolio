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
    <section id="about" className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 md:py-24">
        <Navbar />
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative digital experiences that transform complex challenges into elegant, user-centric solutions.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              A dynamic web developer with a passion for creating innovative digital solutions. 
              My journey in technology is driven by curiosity, creativity, and a commitment to 
              continuous learning. I thrive on transforming complex ideas into user-friendly 
              and visually appealing web experiences.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Code className="text-blue-400" size={24} />
              </div>
              <div className="bg-purple-500/20 p-3 rounded-full">
                <Palette className="text-purple-400" size={24} />
              </div>
            </div>
          </motion.div>

          {/* Skills and Expertise */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 flex items-center space-x-6 shadow-xl"
                >
                  <div>{skill.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
            My Professional Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl"
              >
                <div className="flex justify-center mb-6">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{achievement.title}</h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;