import React, { useState, useEffect } from 'react';
import { Github , ExternalLink } from 'lucide-react';
import Navbar from './Navbar'; 

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timeout);
  }, [index]);
  
  return (
    <div 
      className={`bg-navy-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="h-56 overflow-hidden relative group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-50"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900 text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Github  size={18} />
            <span>Code</span>
          </a>
          
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateTitle, setAnimateTitle] = useState(false);
  
  const projects = [
    {
      title: "Signal-X",
      description: "Signal-X is an AI-powered traffic management system using advanced computer vision, edge computing, and geospatial intelligence. With real-time sensor fusion, machine learning algorithms, and adaptive signal control, it enables dynamic congestion management and emergency vehicle prioritization.",
      image: "/Signalx.png/600/400",
      techStack: ["React", "Pygames", "MongoDB", "TensorFlow", "Python","opencv","Flask","expo","react-native"],
      github: "https://github.com/priyanshi0609/Signal-X",
      demo: "https://signal-x-zkh5.vercel.app/",
      category: "Web App"
    },
    {
      title: "Recap",
      description: "Comprehensive analytics platform that visualizes sales data, customer behavior, and inventory management for e-commerce businesses.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Redux", "Express", "D3.js", "PostgreSQL"],
      github: "https://github.com/priyanshi/ecommerce-analytics",
      demo: "https://ecom-analytics-demo.netlify.app",
      category: "Dashboard"
    },
    {
      title: "Athleto",
      description: "Real-time cryptocurrency tracker with price alerts, portfolio management, and predictive trend analysis based on historical data.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Firebase", "Chart.js", "Tailwind CSS", "CoinGecko API"],
      github: "https://github.com/priyanshi/crypto-tracker",
      demo: "https://crypto-market-tracker.web.app",
      category: "Finance"
    },
    {
      title: "Travello",
      description: "An all-in-one platform for planning, creating, and scheduling content across multiple social media platforms with analytics integration.",
      image: "/api/placeholder/600/400",
      techStack: ["Next.js", "GraphQL", "AWS Lambda", "OAuth", "Material UI"],
      github: "https://github.com/priyanshi/content-scheduler",
      demo: "https://social-scheduler.vercel.app",
      category: "Tool"
    },
    
  ];
  
  const categories = ['All', 'Web App', 'Dashboard', 'Finance', 'Tool', 'Mobile App'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  useEffect(() => {
    setAnimateTitle(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const projectsSection = document.getElementById('projects-section');
      
      if (projectsSection) {
        const sectionTop = projectsSection.offsetTop;
        if (scrollPosition > sectionTop - 500) {
          setAnimateTitle(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col">
      <Navbar /> 
      
      <div id="projects-section" className="container mx-auto pt-24 pb-16 px-6">
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold mb-4 transition-all duration-1000 ${
            animateTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">My </span>
            <span className="text-blue-400">Projects</span>
          </h1>
          <p className={`text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            animateTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A collection of my work in web development, design, and software engineering.
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-navy-800 text-gray-300 hover:bg-navy-700'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.5s forwards'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;