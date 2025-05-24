import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Cpu, Database, Layout, Braces, Wrench } from 'lucide-react';

const AboutSection = () => {
  const experience = [
    "Web Developer intern @EternaInfoTech",
    "Project Chair (Project Shakti) @DrishtiRCBPIT",
    "SheFI Scholar ’24 (Cohort 12)"
  ];

  const techStack = [
    {
      icon: <Layout className="text-pink-400" size={24} />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"]
    },
    {
      icon: <Cpu className="text-green-400" size={24} />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Firebase Auth"]
    },
    {
      icon: <Database className="text-yellow-400" size={24} />,
      title: "Databases",
      skills: ["MongoDB", "Firebase Firestore", "MySQL (basics)"]
    },
    {
      icon: <Braces className="text-blue-400" size={24} />,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS"]
    },
    {
      icon: <Wrench className="text-purple-400" size={24} />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "Postman", "VS Code"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900  text-white flex flex-col">

      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-3"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Web Developer passionate about building responsive, user-focused web applications with clean code, seamless design, and creative functionality
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="px-4 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto">

          {/* About Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400">Who I Am</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">

              {/* Profile */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <div className="h-52 w-52 sm:h-60 sm:w-60 rounded-xl overflow-hidden mx-auto md:mx-0 shadow-lg mb-4">
                  <img 
                    src="/photo.png"
                    alt="Priyanshi Bothra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-300 text-sm space-y-2">
                  <div className="flex justify-center md:justify-start items-center gap-2">
                    <Mail size={18} className="text-blue-400" />
                    priyanshibothra753@gmail.com
                  </div>
                  <div className="flex justify-center md:justify-start items-center gap-2">
                    <MapPin size={18} className="text-blue-400" />
                    New Delhi, India
                  </div>
                  <div className="flex justify-center md:justify-start gap-3 mt-3">
                    <a href="https://github.com/priyanshi0609" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                      <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/priyanshi-bothra-339568219/" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="w-full md:w-2/3 text-gray-300 text-sm sm:text-base">
                <p className="mb-4 leading-relaxed">
                  Hi! I’m Priyanshi Bothra, a 2nd-year IT student & Full Stack Web Developer passionate about building sleek, user-centric web apps. I love turning ideas into interactive digital experiences—whether it’s dashboards, travel platforms, or learning tools.
                </p>
                <p className="mb-4 leading-relaxed">
                  A hackathon finalist, community leader, and active voice at events, I blend tech with creativity, communication, and purpose. Always learning, always creating. Let’s connect and build something impactful!
                </p>

                <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-300 text-base font-medium mb-2">Experience Highlights</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experience.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h4 className="text-blue-300 text-base font-medium mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm">5× Hack Winner</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm">6× Finalist</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {stack.icon}
                    <h4 className="text-lg font-medium">{stack.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default AboutSection;

