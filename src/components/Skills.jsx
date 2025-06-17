import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Code, Database, Palette, Cpu, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code className="w-5 h-5" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Framer Motion'],
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-5 h-5" />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'Authentication', 'JWT'],
    color: 'from-indigo-50 to-indigo-100',
    iconColor: 'text-indigo-600'
  },
  {
    title: 'UI/UX Design',
    icon: <Palette className="w-5 h-5" />,
    skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Responsive Design', 'Design Systems'],
    color: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'DevOps & Tools',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Jest', 'Testing Library'],
    color: 'from-green-50 to-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'Other Technologies',
    icon: <GitFork className="w-5 h-5" />,
    skills: ['Firebase', 'MongoDB', 'PostgreSQL', 'Redux', 'React Query', 'Webpack', 'Babel'],
    color: 'from-amber-50 to-amber-100',
    iconColor: 'text-amber-600'
  }
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Expertise"
      subtitle="Technologies I work with"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className={`bg-gradient-to-br ${category.color} rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 rounded-xl bg-white shadow-sm ${category.iconColor}`}>
                  {React.cloneElement(category.icon, { className: `w-6 h-6 ${category.iconColor}` })}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium bg-white/90 text-gray-700 border border-gray-200 hover:bg-white hover:shadow-sm transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;