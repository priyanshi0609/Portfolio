import React, { useState } from 'react';
import { Github, ExternalLink, Code, Layers, Zap, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Signal-X',
    description: 'AI-powered traffic optimization system using YOLOv8 for real-time vehicle detection and Arduino-controlled signals to dynamically adjust traffic flow.',
    technologies: ['YOLOv8', 'Python', 'MapMyIndia API', 'Arduino', 'Expo', 'OpenCV'],
    image: 'signalx.png',
    link: 'https://signal-x-zkh5.vercel.app/',
    github: 'https://github.com/priyanshi0609/Signal--X',
    category: 'AI/ML'
  },
  {
    title: 'Recap',
    description: 'Recap is a smart learning platform built with React and Firebase that uses AI from Groq, Cohere, and AssemblyAI to organize notes, convert handwritten/audio input into text, and generate flashcards and quizzes.',
    technologies: ['React', 'tailwindCSS', 'Firebase', 'Node.js', 'Shadcn UI', 'ocr recognition','AssemblyAI', 'Cohere', 'Groq'],
    image: 'recap.png',
    link: 'https://recap-5ajg.vercel.app/',
    github: 'https://github.com/priyanshi0609/Recap',
    category: 'Full Stack',
  },
  {
    title: 'Travello',
    description: 'Our platform enhances travel by guiding you to hidden gems through AI-powered, gamified itineraries tailored to your interests and real-time conditions.',
    technologies: ['React', 'Express', 'Python', 'Mapbox','MongoDB', 'Tailwind CSS'],
    image: 'travello.png',
    link: 'https://synapse-2ezy.vercel.app/',
    github: 'https://github.com/priyanshi0609/Synapse',
    category: 'Travel',
  },
  {
    title: 'Sahyog',
    description: 'Sahyog is an AI-powered disaster management platform using React, Express, and Google Cloud to predict disasters, assess damage via imagery, and coordinate real-time relief.',
    technologies: ['GoogleCloud', 'VertexAI', 'GeminiAPI', 'Twilio', 'Hyperledger Fabric', 'Oculus SDK','opencv', 'React',],
    image: 'sahyog.png',
    link: 'https://sahyog-project.vercel.app/',
    github: 'https://github.com/priyanshi0609/Sahyog',
    category: 'AI/ML'
  },
  {
    title: 'Athleto',
    description: 'Athleto is a Next.js and Supabase-based platform empowering underprivileged Indian athletes with AI talent scouting, gamified crowdfunding, AR/VR training, sponsorship matching, and resource access',
    technologies: ['Nextjs', 'Typescript', 'Zustand', 'supabase', 'Razorpay', 'GeminiAPI',],
    image: 'athleto.png',
    link: 'https://athleto-project.vercel.app/',
    github: 'https://github.com/priyanshi0609/Athleto',
    category: 'Full Stack',
  },
  {
    title: 'LearnMate',
    description: 'A smart, AI-driven platform that creates personalized revision plans, identifies weak areas from test data, and assists students with doubt resolution using Google Gemini, LangChain, and Vector Search.',
    technologies: ['React', 'Python', 'MCP', 'Pandas', 'Regular Expressions', 'PyMuPDF', 'Gemini API', 'RAGs', 'LangChain'],
    image: 'Learnmate.png',
    link: 'https://learn-mate-omega.vercel.app',
    github: 'https://github.com/priyanshi0609/LearnMate',
    category: 'EdTech',
 },
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of innovative solutions and technical excellence"
    >
      {/* Category Filter with Glass Morphism Effect */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 backdrop-blur-sm ${
              activeFilter === category
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/80 text-gray-700 hover:bg-white hover:text-blue-600 border border-gray-200 hover:border-blue-200 shadow-sm'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid with Motion Animations */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative group"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            
            <div className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-xl">
              {/* Image Section with Gradient Overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-blue-700 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {project.title}
                    {hoveredProject === index && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-blue-500"
                      >
                        <Zap size={16} fill="currentColor" />
                      </motion.span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={16} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Built With</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ y: -2 }}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-medium">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:border-blue-200 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
    </SectionWrapper>
  );
};

export default Projects;