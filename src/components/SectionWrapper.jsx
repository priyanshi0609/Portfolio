import React from 'react';

const SectionWrapper = ({ children, id, title, subtitle }) => {
  return (
    <section id={id} className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;