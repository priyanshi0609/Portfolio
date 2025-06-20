import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const SectionWrapper = ({ children, id, title, subtitle }) => {
  return (
    <section id={id} className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8 md:mb-12 lg:mb-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 lg:mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
};

const EducationCard = ({ education, index }) => {
  return (
    <div className="group relative bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 md:hover:-translate-y-2">
      {/* Enhanced Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-100 via-blue-50 to-transparent rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16 lg:-translate-y-20 lg:translate-x-20 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-10 -translate-x-10 md:translate-y-12 md:-translate-x-12 lg:translate-y-16 lg:-translate-x-16 opacity-50"></div>
      
      {/* Header Section */}
      <div className="relative p-4 md:p-6 lg:p-8 pb-3 md:pb-4 lg:pb-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 lg:gap-6">
          {/* Institution Logo/Image */}
          <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300 self-center sm:self-start">
            <img 
              src={education.image} 
              alt={`${education.institution} logo`}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl object-contain shadow-md border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-300"
            />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-900 mb-2 md:mb-3 leading-tight group-hover:text-blue-800 transition-colors duration-300">
              {education.degree}
            </h3>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold text-blue-700 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {education.institution}
            </h4>
            
            {/* Meta Information */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3 lg:gap-4 text-xs md:text-sm text-gray-600 mb-3 md:mb-4 lg:mb-6">
              <div className="flex items-center gap-1 md:gap-2 bg-gray-50 px-2 md:px-3 py-1 md:py-2 rounded-full">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                <span className="font-medium">{education.duration}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-gray-50 px-2 md:px-3 py-1 md:py-2 rounded-full">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                <span className="font-medium">{education.location}</span>
              </div>
              {education.gpa && (
                <div className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 md:px-3 py-1 md:py-2 rounded-full">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-blue-800">GPA: {education.gpa}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8">
        {/* Description */}
        {education.description && (
          <div className="relative">
            <div className="absolute left-0 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed pl-3 md:pl-4 lg:pl-6">
              {education.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Bhagwan Parshuram Institute of Technology (GGSIPU)",
      duration: "2023 - 2027",
      location: "Rohini, Delhi",
      gpa: "8.8",
      image:"college.png",
    },
    {
      degree: "Elementary and Senior Secondary Education",
      institution: "Bal Bharti Public School (Ghaziabad)",
      duration: "2009 - 2023",
      location: "Ghaziabad, Uttar Pradesh",
      gpa: "96%",
      image: "school.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SectionWrapper
        id="education"
        title="Education & Qualifications"
        subtitle="My academic journey and continuous learning path that shaped my expertise in technology and software development"
      >
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              education={education}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Education;