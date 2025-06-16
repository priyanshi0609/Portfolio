import React from 'react';
import SectionWrapper from './SectionWrapper';

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Stanford University',
    year: '2018 - 2020',
    description:
      'Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of California',
    year: '2014 - 2018',
    description:
      'Focus on frontend development and user experience design. Minor in Digital Arts.',
  },
];

const Education = () => {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic journey"
    >
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-navy-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {education.map((item, index) => (
          <div
            key={index}
            className="relative pl-8 md:pl-16 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-navy-600 before:bg-white md:odd:pl-16 md:even:pl-44 md:even:self-end"
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-navy-800 mb-1">
                {item.degree}
              </h3>
              <p className="text-navy-600 font-medium mb-2">
                {item.institution} | {item.year}
              </p>
              <p className="text-navy-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;