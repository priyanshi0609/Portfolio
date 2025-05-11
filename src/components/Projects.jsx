import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Layout, Package, FileCode, Star, X, Calendar, User, Clock, Search, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

// Enhanced animated section component with more options
const AnimatedSection = ({ children, delay = 0, className = "", direction = "up", amount = 0.1 }) => {
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
      { threshold: amount }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, amount]);

  const getTransform = () => {
    switch (direction) {
      case "up": return "translateY(20px)";
      case "down": return "translateY(-20px)";
      case "left": return "translateX(20px)";
      case "right": return "translateX(-20px)";
      default: return "translateY(20px)";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Enhanced category icon mapping with colors
const getCategoryIcon = (category) => {
  const iconClass = "w-4 h-4";
  switch (category) {
    case 'Web App':
      return <Layout className={`${iconClass} text-blue-400`} />;
    case 'Dashboard':
      return <FileCode className={`${iconClass} text-purple-400`} />;
    case 'Finance':
      return <Package className={`${iconClass} text-emerald-400`} />;
    case 'Tool':
      return <Code className={`${iconClass} text-amber-400`} />;
    case 'Mobile App':
      return <Package className={`${iconClass} text-pink-400`} />;
    default:
      return <Star className={`${iconClass} text-indigo-400`} />;
  }
};

// Enhanced Project Modal with tabs and more details
const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');
  
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
    <div className="fixed inset-0 bg-navy-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-navy-800 to-navy-900 border border-blue-900/30 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
        style={{
          animation: 'modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Close button - more prominent */}
        <button 
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 p-2 rounded-full transition-all duration-300 shadow-lg z-10 group"
        >
          <X size={20} className="text-white group-hover:rotate-90 transition-transform" />
        </button>
        
        {/* Modal header with image */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img 
            src={project.image.includes("/api/placeholder") ? project.image : `/${project.image}`}
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "/api/placeholder/800/400";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div>
          
          {/* Title and category */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-900/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium border border-blue-700/30">
                {getCategoryIcon(project.category)}
                <span className="text-blue-200">{project.category}</span>
              </div>
              <div className="bg-navy-800/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium border border-navy-700/30 text-gray-300">
                <Clock size={14} className="text-amber-400" />
                <span>4 weeks</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-blue-100 max-w-2xl">{project.description.split('.')[0]}.</p>
          </div>
        </div>
        
        {/* Tabs navigation */}
        <div className="border-b border-navy-700/50 px-6 md:px-8">
          <div className="flex overflow-x-auto">
            {['overview', 'technologies', 'features', 'gallery'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Modal content */}
        <div className="p-6 md:p-8">
          {/* Overview tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-200 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-navy-800/50 rounded-lg p-4 border border-navy-700/30">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Challenge</h4>
                  <p className="text-gray-300">Creating a scalable solution that could handle real-time traffic data processing while maintaining high accuracy in signal predictions.</p>
                </div>
                <div className="bg-navy-800/50 rounded-lg p-4 border border-navy-700/30">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Solution</h4>
                  <p className="text-gray-300">Implemented a hybrid architecture combining edge computing for real-time processing with cloud-based analytics for historical pattern recognition.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Technologies tab */}
          {activeTab === 'technologies' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Technology Stack
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.techStack.map((tech, i) => (
                  <div 
                    key={i} 
                    className="bg-navy-800/40 rounded-lg p-4 border border-navy-700/30 hover:border-blue-700/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-900/50 to-navy-800 flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Code size={16} className="text-blue-400" />
                      </div>
                      <span className="font-medium text-gray-200">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-navy-800/50 rounded-lg p-4 border border-navy-700/30 mt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Architecture</h4>
                <p className="text-gray-300">The system follows a microservices architecture with containerized deployment using Docker and Kubernetes for orchestration, ensuring scalability and reliability.</p>
              </div>
            </div>
          )}
          
          {/* Features tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Key Features
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Real-time traffic monitoring",
                  "AI-powered signal optimization",
                  "Emergency vehicle prioritization",
                  "Historical data analytics",
                  "Cross-platform compatibility",
                  "Scalable cloud infrastructure"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900/50 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ChevronRight size={12} className="text-blue-400" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Gallery tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Project Gallery
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-navy-800/50 rounded-lg overflow-hidden border border-navy-700/30 aspect-video">
                    <div className="w-full h-full bg-navy-700/30 flex items-center justify-center">
                      <span className="text-gray-500">Screenshot {item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Action buttons - sticky at bottom */}
          <div className="sticky bottom-0 bg-gradient-to-t from-navy-900 via-navy-900/90 to-transparent pt-8 pb-4 -mx-6 md:-mx-8 px-6 md:px-8 mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-800 hover:bg-navy-700 transition-colors duration-300 border border-navy-700/50 flex-1 text-center group"
              >
                <Github size={18} className="text-gray-300 group-hover:text-white" />
                <span className="font-medium text-gray-300 group-hover:text-white">View Code</span>
              </a>
              
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex-1 text-center shadow-lg shadow-blue-900/20 group"
              >
                <span className="font-medium">Live Demo</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Project Card with better hover effects
const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div 
      ref={cardRef}
      className="relative bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-blue-900/20 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        animationDelay: `${index * 100}ms`,
        animation: 'cardFadeIn 0.6s forwards',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none`}></div>
      
      {/* Image container */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={project.image.includes("/api/placeholder") ? project.image : `/${project.image}`}
          alt={project.title} 
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          onError={(e) => {
            e.target.src = "/api/placeholder/600/400";
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-90' : 'opacity-80'
        }`}></div>
        
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-navy-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium text-blue-200 border border-blue-700/30 group-hover:bg-blue-900/80 transition-colors">
          {getCategoryIcon(project.category)}
          {project.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 relative">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-navy-700/70 text-gray-300 border border-navy-600/50 group-hover:border-blue-700/50 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-navy-700/70 text-gray-300 border border-navy-600/50">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-blue-300 font-medium group-hover:text-blue-200 transition-colors">
            View case study →
          </div>
          <div className="w-8 h-8 rounded-full bg-navy-700/70 flex items-center justify-center border border-navy-600/50 group-hover:bg-blue-900/70 group-hover:border-blue-700/50 transition-colors">
            <ExternalLink size={14} className="text-blue-300 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const headerRef = useRef(null);
  
  const projects = [
    {
      title: "Signal-X",
      description: "Signal-X is an AI-driven traffic management system that uses computer vision, edge computing, and geospatial intelligence to optimize traffic flow. With real-time sensor fusion and adaptive signal control, it reduces congestion and prioritizes emergency vehicles efficiently.",
      image: "signalx.png",
      techStack: ["React", "Pygames", "MongoDB", "TensorFlow", "Python", "OpenCV", "Flask", "Expo", "React Native"],
      github: "https://github.com/priyanshi0609/Signal-X",
      demo: "https://signal-x-zkh5.vercel.app/",
      category: "Web App"
    },
    {
      title: "Recap",
      description: "Recap is an innovative study companion designed to revolutionize how students organize and interact with their study materials. Our platform leverages artificial intelligence to create an intelligent note-taking ecosystem that grows with your learning journey.",
      image: "recap.png",
      techStack: ["React", "Node.js", "Firebase", "Tailwind CSS", "OCR Recognition", "Cohere AI", "Assembly AI"],
      github: "https://github.com/priyanshi/ecommerce-analytics",
      demo: "https://recap-5ajg.vercel.app/",
      category: "Dashboard"
    },
    {
      title: "Athleto",
      description: "Athleto is a virtual platform designed to support underprivileged athletes in India by providing them with the resources, training, and financial backing they need to excel in their respective sports. Our mission is to bridge the gap between talent and opportunity.",
      image: "athleto.png",
      techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Zustand"],
      github: "https://github.com/priyanshi0609/Athleto",
      demo: "https://athleto-project.vercel.app/",
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
    {
      title: "Sahyog",
      description: "A modern payment processing platform with fraud detection and real-time analytics built for e-commerce businesses.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Node.js", "Stripe API", "MongoDB", "Redis"],
      github: "https://github.com/priyanshi/payment-processor",
      demo: "https://nexus-pay.vercel.app",
      category: "Finance"
    },
    {
      title: "Voxel",
      description: "3D modeling tool for game developers with real-time collaboration features and cloud rendering capabilities.",
      image: "/api/placeholder/600/400",
      techStack: ["Three.js", "WebGL", "WebSockets", "Node.js", "MongoDB"],
      github: "https://github.com/priyanshi/voxel-editor",
      demo: "https://voxel-3d.vercel.app",
      category: "Tool"
    },
  ];
  
  const categories = ['All', 'Web App', 'Dashboard', 'Finance', 'Tool', 'Mobile App'];
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
    
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 text-white flex flex-col relative overflow-x-hidden">
      <Navbar />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-5 blur-xl"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}, transparent)`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero section */}
      <section ref={headerRef} className="relative py-20 md:py-28 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection delay={100}>
            <div className="inline-flex items-center bg-navy-800/50 border border-navy-700/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              <span className="text-sm text-blue-300">Featured Projects</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Portfolio</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A curated collection of my professional work, showcasing innovative solutions and creative problem-solving in modern web development.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      <div className="container mx-auto pb-28 px-6 relative z-10">
        {/* Search and filters */}
        <AnimatedSection delay={300} className="mb-8">
          <div className="bg-navy-800/50 backdrop-blur-md p-4 rounded-xl border border-blue-900/20 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Enhanced search input */}
              <div className="relative w-full md:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-navy-900/70 border border-blue-900/30 rounded-lg py-2.5 px-4 pl-10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 placeholder-gray-500 transition-all duration-300"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X size={18} className="text-gray-500 hover:text-gray-300 transition-colors" />
                  </button>
                )}
              </div>
              
              {/* Enhanced category filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-1.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeFilter === category 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-700/30' 
                        : 'bg-navy-800 text-gray-300 hover:bg-navy-700 border border-blue-900/30 hover:border-blue-700/50'
                    }`}
                  >
                    {getCategoryIcon(category)}
                    <span>{category}</span>
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
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <X size={16} />
                Clear search
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-navy-800/50 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        ) : (
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-800/50 rounded-full mb-6">
                  <Search size={32} className="text-gray-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
                <p className="text-gray-400 max-w-md mx-auto">We couldn't find any projects matching your search. Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('All');
                  }}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                  <span>Reset filters</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Call to action */}
        <AnimatedSection delay={600} className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-800/20 rounded-xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-600/10 blur-3xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions. Let's collaborate to create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-900/30"
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 bg-navy-800/70 border border-navy-700/50 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-navy-700/80 transition-colors duration-300"
              >
                <span>Learn About Me</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
        
        <style jsx global>{`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
            }
          }
          
          @keyframes cardFadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Projects;