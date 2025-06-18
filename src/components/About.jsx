import React, { useState, useEffect } from 'react';
import { User, Award } from 'lucide-react';

const SectionWrapper = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  </section>
);

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative group">
            {/* Animated background circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Main image container */}
            <div className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-700 hover:scale-105 ${
              imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <img
                src="photo.png"
                alt="Priyanshi Bothra"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Header */}
          <div className={`transform transition-all duration-700 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who am I?
              </h3>
            </div>
          </div>
          
          {/* Description */}
          <div className={`space-y-6 transform transition-all duration-700 delay-200 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed text-lg">
                Hi, I'm <span className="font-semibold text-blue-600">Priyanshi Bothra</span>, a passionate Full Stack Web Developer, creative UI/UX Designer, 
                and an enthusiastic learner in the world of AI/ML. With a strong foundation in both frontend 
                and backend technologies, I love building seamless digital experiences that are both functional 
                and visually engaging.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed text-lg">
                Beyond code, I actively contribute to leadership and community-building activities — having served 
                as the Project Chair in Rotract club and as the PR Head in a college society, showcasing my ability 
                to lead, communicate, and collaborate effectively. I'm a firm believer in continuous learning, and 
                when I'm not immersed in tech, you'll find me dancing, reading, or exploring new ideas with curiosity 
                and joy.
              </p>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className={`transform transition-all duration-700 delay-400 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award size={16} className="text-blue-600" />
                  </div>
                  Professional Highlights
                </h4>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  SWE Intern @Mappls | Ex-WebD Intern @Eterna Infotech | 5× Hackathon Winner | 6× Finalist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;