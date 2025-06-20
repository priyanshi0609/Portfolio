import React from 'react';
import SectionWrapper from './SectionWrapper';

const experiences = [
  {
    position: 'Frontend Developer',
    company: 'Eterna Infotech Pvt Ltd | Manipal, Karnataka, India.',
    duration: 'November 2024 – March 2025',
    responsibilities: [
      'Developed responsive web applications using React and Redux',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Optimized applications for maximum speed and scalability',
    ],
  },
  {
    position: 'Technical Team Member',
    company: 'The NAMESPACE Community | New Delhi, Delhi, India',
    duration: '2016 - 2018',
    responsibilities: [
      'Built and maintained client websites using HTML, CSS, and JavaScript',
      'Assisted in the development of WordPress themes and plugins',
      'Participated in agile development processes',
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
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-navy-800">
                {exp.position}
              </h3>
              <div className="text-navy-600 font-medium">
                {exp.company} | {exp.duration}
              </div>
            </div>
            <ul className="space-y-2 text-navy-600">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-navy-500 mr-2 mt-1">•</span>
                  {resp}
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