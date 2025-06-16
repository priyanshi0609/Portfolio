import React from 'react';
import SectionWrapper from './SectionWrapper';

const achievements = [
  {
    title: 'Best UI Design Award 2022',
    issuer: 'Design Association',
    year: '2022',
    description:
      'Recognized for outstanding user interface design in the annual web design competition.',
  },
  {
    title: 'Hackathon Winner',
    issuer: 'TechFest 2021',
    year: '2021',
    description:
      'Won first place in a 48-hour hackathon by building an innovative productivity app.',
  },
  {
    title: 'Open Source Contributor',
    issuer: 'GitHub',
    year: '2020',
    description:
      'Contributed to several popular open-source projects with significant code contributions.',
  },
];

const Achievements = () => {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="My proudest moments"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative mb-6">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-navy-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-navy-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-navy-600 font-medium">
                  {achievement.issuer} | {achievement.year}
                </p>
              </div>
            </div>
            <p className="text-navy-600 relative z-10">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;