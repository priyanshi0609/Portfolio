import React from 'react';
import { Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    link: '#',
    github: '#', // Add GitHub repo link here
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    link: '#',
    github: '#', // Add GitHub repo link here
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current conditions and forecasts using data from a weather API.',
    technologies: ['JavaScript', 'API Integration', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    link: '#',
    github: '#', // Add GitHub repo link here
  },
];

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      title="My Projects"
      subtitle="Some of my recent work"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black border-2 border-black px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-navy-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black border-2 border-black px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-navy-900 transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy-800 mb-2">
                {project.title}
              </h3>
              <p className="text-navy-600 mb-4">{project.description}</p>
              
              {/* Tech Stack Section */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-navy-700 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-navy-400 text-navy-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-navy-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons for mobile */}
              <div className="flex gap-2 mt-4 md:hidden">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-navy-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors duration-200"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-navy-100 text-navy-700 px-4 py-2 rounded-lg font-medium hover:bg-navy-200 transition-colors duration-200"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          View All Projects
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;