import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Layout, Package, FileCode, Star, X, Calendar, User, Clock } from 'lucide-react';
import Navbar from './Navbar'; 

// Animated section component for reusability
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Category icon mapping
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Web App':
      return <Layout size={16} />;
    case 'Dashboard':
      return <FileCode size={16} />;
    case 'Finance':
      return <Package size={16} />;
    case 'Tool':
      return <Code size={16} />;
    case 'Mobile App':
      return <Package size={16} />;
    default:
      return <Star size={16} />;
  }
};

// Modal component for project details
const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4">
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-navy-800 to-navy-900 border border-blue-900/30 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        style={{
          animation: 'modalFadeIn 0.3s ease-out forwards'
        }}
      >
        {/* Modal header with image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={project.image.includes("/api/placeholder") ? project.image : `/${project.image.split('/')[0]}`}
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/api/placeholder/800/400";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent"></div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-navy-800/80 hover:bg-navy-700 p-2 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-300" />
          </button>
          
          {/* Title overlaid on image */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-600 text-blue-100 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium border border-blue-500/30">
                {getCategoryIcon(project.category)}
                <span>{project.category}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
          </div>
        </div>
        
        {/* Modal content */}
        <div className="p-6 md:p-8">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-blue-200 mb-3">About this project</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          
          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-blue-200 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-900/40 text-blue-200 border border-blue-700/30 transition-all duration-300 hover:bg-blue-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project metadata - using placeholder data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-navy-800/60">
              <Calendar size={20} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-gray-200">May 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-navy-800/60">
              <User size={20} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Team</p>
                <p className="text-gray-200">Solo Project</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-navy-800/60">
              <Clock size={20} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-gray-200">4 weeks</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-navy-800/60">
              <Star size={20} className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Status</p>
                <p className="text-gray-200">Completed</p>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-900/50 text-blue-200 hover:bg-blue-800/70 transition-colors duration-300 border border-blue-700/30 flex-1 text-center"
            >
              <Github size={20} />
              <span className="font-medium">View Code</span>
            </a>
            
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 flex-1 text-center shadow-lg shadow-blue-900/20"
            >
              <ExternalLink size={20} />
              <span className="font-medium">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timeout);
  }, [index]);
  
  return (
    <div 
      className={`bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 hover:shadow-blue-600/10 border border-blue-900/20 cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={project.image.includes("/api/placeholder") ? project.image : `/${project.image.split('/')[0]}`} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 filter brightness-110' : 'scale-100'
          }`}
          onError={(e) => {
            e.target.src = "/api/placeholder/600/400";
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-80' : 'opacity-60'
        }`}></div>
        
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-blue-900/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium text-blue-200 border border-blue-500/30">
          {getCategoryIcon(project.category)}
          {project.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent mb-2">{project.title}</h3>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-900/40 text-blue-200 border border-blue-700/30"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-900/40 text-blue-200 border border-blue-700/30">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-blue-300 font-medium">
            Click to view details
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-700/30">
            <ExternalLink size={14} className="text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedText = ({ children, delay = 0 }) => {
  return (
    <div className="overflow-hidden">
      <div 
        className="transform transition-transform duration-1000"
        style={{ 
          animationDelay: `${delay}ms`,
          animation: 'slideUp 1s forwards'
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateTitle, setAnimateTitle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useRef(null);
  
  // Fixed image paths in the projects array
  const projects = [
    {
      title: "Signal-X",
      description: "Signal-X is an AI-driven traffic management system that uses computer vision, edge computing, and geospatial intelligence to optimize traffic flow. With real-time sensor fusion and adaptive signal control, it reduces congestion and prioritizes emergency vehicles efficiently.",
      image: "signalx.png", // Fixed path
      techStack: ["React", "Pygames", "MongoDB", "TensorFlow", "Python", "OpenCV", "Flask", "Expo", "React Native"],
      github: "https://github.com/priyanshi0609/Signal-X",
      demo: "https://signal-x-zkh5.vercel.app/",
      category: "Web App"
    },
    {
      title: "Recap",
      description: "Recap is an innovative study companion designed to revolutionize how students organize and interact with their study materials. Our platform leverages artificial intelligence to create an intelligent note-taking ecosystem that grows with your learning journey.",
      image: "recap.png", // Fixed path 
      techStack: ["React", "Node.js", "Firebase", "Tailwind CSS", "OCR Recognition", "Cohere AI", "Assembly AI"],
      github: "https://github.com/priyanshi/ecommerce-analytics",
      demo: "https://recap-5ajg.vercel.app/",
      category: "Dashboard"
    },
    {
      title: "Athleto",
      description: "Athleto is a virtual platform designed to support underprivileged athletes in India by providing them with the resources, training, and financial backing they need to excel in their respective sports. Our mission is to bridge the gap between talent and opportunity, ensuring that no athlete is left behind due to economic constraints.",
      image: "athleto.png", // Fixed path
      techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Zustand"],
      github: "https://github.com/priyanshi0609/Athleto",
      demo: "https://athleto-project.vercel.app/",
      category: "Finance"
    },
    {
      title: "Travello",
      description: "An all-in-one platform for planning, creating, and scheduling content across multiple social media platforms with analytics integration.",
      image: "/api/placeholder/600/400", // Using placeholder
      techStack: ["Next.js", "GraphQL", "AWS Lambda", "OAuth", "Material UI"],
      github: "https://github.com/priyanshi/content-scheduler",
      demo: "https://social-scheduler.vercel.app",
      category: "Tool"
    },
  ];
  
  const categories = ['All', 'Web App', 'Dashboard', 'Finance', 'Tool', 'Mobile App'];
  
  // Filter projects based on both category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
    
  useEffect(() => {
    setAnimateTitle(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const scrollProgress = Math.min(scrollPosition / headerHeight, 1);
        headerRef.current.style.opacity = `${1 - scrollProgress * 0.7}`;
        headerRef.current.style.transform = `translateY(${scrollProgress * 50}px)`;
      }
      
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 text-white flex flex-col relative">
      <Navbar />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Particle effects for background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-indigo-500 opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-purple-500 opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Hero section - reduced size */}
      <section ref={headerRef} className="relative py-16 md:py-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Projects</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A collection of my work showcasing innovation and problem-solving in web development, 
              design, and software engineering.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <div id="projects-section" className="container mx-auto pb-20 px-6">
        {/* Search and filters */}
        <AnimatedSection delay={300} className="mb-8">
          <div className="bg-navy-800/50 backdrop-blur-md p-4 rounded-xl border border-blue-900/20 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-navy-900/70 border border-blue-900/30 rounded-lg py-2 px-4 pl-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 placeholder-gray-500"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Category filters - simplified and more compact */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                      activeFilter === category 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-700/20' 
                        : 'bg-navy-800 text-gray-300 hover:bg-navy-700 border border-blue-900/30'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeIn 0.5s forwards'
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      {getCategoryIcon(category)}
                      <span>{category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Project count info */}
        <AnimatedSection delay={400} className="mb-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">
              Showing <span className="text-blue-400 font-medium">{filteredProjects.length}</span> of {projects.length} projects
            </p>
            
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="text-gray-400 mb-4 text-5xl">🔍</div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">Try changing your search or filter criteria</p>
            </div>
          )}
        </div>
        
        {/* Call to action - simplified */}
        <AnimatedSection delay={600} className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-800/20 rounded-xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/30"
            >
              Get In Touch
            </a>
          </div>
        </AnimatedSection>
        
        <style jsx global>{`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Projects;