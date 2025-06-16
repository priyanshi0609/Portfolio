import React from 'react';
import SectionWrapper from './SectionWrapper';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'UI/UX Design', level: 75 },
];

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="What I'm good at"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-navy-800 font-medium">{skill.name}</span>
              <span className="text-navy-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-navy-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
                data-level={skill.level}
                onLoad={(e) => {
                  setTimeout(() => {
                    e.target.style.width = `${e.target.dataset.level}%`;
                  }, index * 100);
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;