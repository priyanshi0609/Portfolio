import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Trophy, Flag, Code2, Youtube } from 'lucide-react';

const achievements = [
  {
    title: '5x Hackathon Winner',
    year: '2024-2025',
    description: 'IIT Delhi Mappls 1st — SDI Top 26/1000+ — Codescript DTU 2nd.',
    icon: <Trophy className="text-blue-600 w-8 h-8" />,
  },
  {
    title: '6x Hackathon Finalist',
    year: '2024-2025',
    description: 'Reached finals in multiple prestigious hackathons across India',
    icon: <Flag className="text-green-600 w-8 h-8" />,
  },
  {
    title: 'Open Source Contributor',
    year: '2024-25',
    description: 'Contributed to several open source projects, enhancing community-driven software development.',
    icon: <Code2 className="text-purple-600 w-8 h-8" />,
  },
  {
    title: 'Youtube Creator',
    year: '2025',
    description: '100+ subscribers, sharing coding knowledge and tech insights',
    icon: <Youtube className="text-red-600 w-8 h-8" />,
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
            <div className="relative mb-4 flex items-center space-x-4">
              <div className="p-3 bg-gray-100 rounded-full shadow-inner">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-800">
                  {achievement.title}
                </h3>
                <p className="text-navy-600 text-sm">{achievement.year}</p>
              </div>
            </div>
            <p className="text-navy-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
