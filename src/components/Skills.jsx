import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Code, Database, Palette, Cpu, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code className="w-5 h-5" />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion','React Native','SaaS UI','Shadcn/ui','GSAP'],
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-5 h-5" />,
    skills: ['Node.js', 'Python', 'REST APIs',  'Authentication', 'JWT','PHP'],
  },
  {
    title: 'UI/UX Design',
    icon: <Palette className="w-5 h-5" />,
    skills: ['Figma', 'Adobe XD',  'Wireframing', 'Prototyping', 'Responsive Design', 'Design Systems'],
  },
  {
    title: 'DevOps & Tools',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['Git', 'GitHub',  'Vercel', 'Netlify',  'Testing Library'],
  },
  {
    title: 'Other Technologies',
    icon: <GitFork className="w-5 h-5" />,
    skills: ['Firebase', 'MongoDB', 'PostgreSQL','Supabase',],
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
      className="text-navy-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg border border-blue-100 shadow-xs hover:shadow-sm transition-all duration-200 overflow-hidden"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -3 }}
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                  {React.cloneElement(category.icon, { className: "w-5 h-5" })}
                </div>
                <h3 className="text-lg font-medium text-blue-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-800 border border-blue-100"
                    whileHover={{ 
                      backgroundColor: '#1e3a8a',
                      color: '#fff',
                      borderColor: '#1e3a8a'
                    }}
                    transition={{ duration: 0.15 }}
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