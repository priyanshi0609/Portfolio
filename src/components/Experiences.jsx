import React from 'react';
const SectionWrapper = ({ children, id, title, subtitle }) => {
  return (
    <section id={id} className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8 md:mb-12 lg:mb-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 lg:mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
};


const experiences = [
  {
    position: 'Frontend Developer',
    company: 'Eterna Infotech Pvt Ltd | Manipal, Karnataka, India.',
    duration: 'November 2024 – March 2025',
    responsibilities: [
      'Developed responsive web applications using React.js and SaaSUI',
      'Collaborated to implement Gamification features',
      'Improved UX by integrating client feedback and modern UI/UX standards.',
      'Resolved frontend bugs and ensured cross-device UI consistency and performance.'
    ],
  },
];

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="Where I've worked"
    >
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-navy-100/50 hover:border-navy-200/70"
          >
            {/* Subtle navy blur effect in corners */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-navy-500/5 rounded-full blur-xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-700/5 rounded-full blur-xl opacity-30"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 relative z-10">
              <h3 className="text-xl font-bold text-navy-800 group-hover:text-navy-900">
                {exp.position}
              </h3>
              <div className="text-navy-600/90 font-medium">
                {exp.company} | <span className="text-navy-500/80">{exp.duration}</span>
              </div>
            </div>
            <ul className="space-y-3 text-navy-700/90 relative z-10">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start group">
                  <span className="text-navy-500/70 mr-2 mt-1 group-hover:text-navy-600">▹</span>
                  <span className="group-hover:text-navy-800 transition-colors duration-200">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;