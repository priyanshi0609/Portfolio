import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-navy-800 mb-4">
            Who am I?
          </h3>
          <p className="text-navy-600 mb-6">
            I'm a passionate frontend developer with 5 years of experience
            creating modern web applications. I specialize in React.js and have
            a strong eye for design and user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-navy-800 mb-2">Personal Info</h4>
              <ul className="space-y-2 text-navy-600">
                <li>
                  <span className="font-medium">Name:</span> John Doe
                </li>
                <li>
                  <span className="font-medium">Email:</span> john@example.com
                </li>
                <li>
                  <span className="font-medium">Location:</span> San Francisco, CA
                </li>
                <li>
                  <span className="font-medium">Freelance:</span> Available
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-navy-800 mb-2">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Coding', 'Design', 'Music', 'Travel', 'Photography', 'Gaming'].map((interest) => (
                  <span
                    key={interest}
                    className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;