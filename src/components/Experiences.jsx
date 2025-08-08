import React from 'react';

const SectionWrapper = ({ children, id, title, subtitle }) => {
  return (
    <section
      id={id}
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="mb-8 md:mb-12 lg:mb-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 lg:mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

const experiences = [
  {
    position: 'Frontend Developer',
    company: 'Eterna Infotech Pvt Ltd ',
    duration: 'November 2024 – March 2025',
    responsibilities: [
      'Developed responsive web applications using React.js and SaaSUI.',
      'Collaborated to implement Gamification features.',
      'Improved UX by integrating client feedback and modern UI/UX standards.',
      'Resolved frontend bugs and ensured cross-device UI consistency and performance.',
    ],
  },
  {
    position: 'AI Intern',
    company: 'MapmyIndia (Mappls) ',
    duration: 'July 2024 – September 2024',
    responsibilities: [
      'Built an intelligent Address Parser using Mappls APIs to extract structured location data from unformatted text.',
      'Integrated Mappls geospatial APIs for location-based features into web applications.',
      'Optimized API calls for faster rendering of large geospatial datasets.',
      'Collaborated with backend teams to ensure seamless data flow and improved UX for location services.',
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
      <div className="space-y-8 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500 opacity-40 rounded-full pointer-events-none"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-navy-100/50 hover:border-blue-300/70 max-w-xl mx-auto md:mx-0 md:w-[48%] ${
              index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-6 md:-left-4 top-6 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 relative z-10">
              <h3 className="text-xl font-bold text-navy-800">
                {exp.position}
              </h3>
              <div className="text-navy-600/90 font-medium mt-1 md:mt-0">
                {exp.company} |{' '}
                <span className="text-navy-500/80">{exp.duration}</span>
              </div>
            </div>
            <ul className="space-y-3 text-navy-700/90 relative z-10">
              {exp.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="flex items-start group transition-colors duration-200"
                >
                  <span className="text-blue-400 mr-2 mt-1 group-hover:text-blue-500">
                    ▹
                  </span>
                  <span className="group-hover:text-navy-800">
                    {resp}
                  </span>
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
