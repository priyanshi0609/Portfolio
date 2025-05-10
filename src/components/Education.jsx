import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion'; 

const EducationPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Intersection Observer to detect visible sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    // Observe sections with ids
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const shimmer = {
    hidden: { 
      backgroundPosition: '200% 0',
    },
    visible: { 
      backgroundPosition: '-200% 0',
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 text-white flex flex-col">
      <Navbar />
      
      {/* Hero Section with Particles */}
      <section className="relative overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
          <div className="absolute top-40 right-40 w-32 h-32 rounded-full bg-indigo-500 opacity-10 blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-cyan-500 opacity-10 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <motion.span 
                  className="inline-block text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Education 
                </motion.span>{" "}
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={shimmer}
                >
                  Journey
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My academic path that has shaped my skills and knowledge in technology and design.
              </motion.p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-8"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Education Timeline */}
        <section id="education" className="mb-24">
          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-600 hidden md:block origin-top"
            />
            
            {/* College Entry */}
            <div id="college" className="mb-32">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-12"
              >
                <div className="h-0.5 w-12 bg-blue-500"></div>
                <h2 className="text-3xl font-bold px-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Higher Education
                </h2>
                <div className="h-0.5 w-12 bg-blue-500"></div>
              </motion.div>
              
              <div className="md:grid md:grid-cols-2 gap-12 items-start relative">
                {/* Left Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-right pr-10 mb-8 md:mb-0"
                >
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    B.Tech in Information Technology
                  </h3>
                  <p className="text-2xl font-semibold text-white/90 mt-2">GGSIPU</p>
                  <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-300 border border-blue-500/30 my-3">
                    2023 - Present
                  </div>
                  <p className="text-xl text-cyan-300 font-medium mb-6">CGPA: 9.2/10</p>
                  
                  <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 shadow-xl">
                    <p className="font-semibold text-lg mb-3 text-white">Relevant Coursework:</p>
                    <motion.ul 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2 text-gray-300"
                    >
                      {['Data Structures & Algorithms', 'Web Development', 'UI/UX Design', 'Database Management Systems'].map((course, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-center justify-end gap-2"
                        >
                          <span>{course}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
                
                {/* Center Circle */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="absolute left-1/2 top-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 z-10 hidden md:flex items-center justify-center shadow-lg shadow-blue-500/20"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-900 border-2 border-white/80"></div>
                </motion.div>
                
                {/* Right Content - College Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/20 group hover:shadow-blue-500/20 transition-all duration-500">
                    <div className="h-64 bg-gradient-to-br from-blue-800/50 to-indigo-900/50 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <motion.img 
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        src="/college.png" 
                        alt="GGSIPU Logo" 
                        className="w-auto h-auto max-w-full max-h-full object-contain p-4 z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Guru Gobind Singh Indraprastha University
                      </h4>
                      <p className="text-blue-200/80 mb-4 italic">
                        Sector 16C, Dwarka, New Delhi, Delhi 110078
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Pursuing advanced coursework in Information Technology, Full Stack Web Development, UI/UX Design, and AI/ML. Actively participating in hackathons, coding competitions, and technical clubs.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {['Web Dev Club', 'AI Society', 'Hackathons'].map((tag, index) => (
                          <span key={index} className="px-4 py-1.5 bg-blue-900/70 text-blue-200 rounded-full text-sm border border-blue-500/30 hover:bg-blue-800/80 transition-colors duration-300 shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* School Entry */}
            <div id="school" className="mb-32">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-12"
              >
                <div className="h-0.5 w-12 bg-blue-500"></div>
                <h2 className="text-3xl font-bold px-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  School Education
                </h2>
                <div className="h-0.5 w-12 bg-blue-500"></div>
              </motion.div>
              
              <div className="md:grid md:grid-cols-2 gap-12 items-start relative">
                {/* School Card - Left Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 md:mb-0"
                >
                  <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/20 group hover:shadow-blue-500/20 transition-all duration-500">
                    <div className="h-64 bg-gradient-to-br from-blue-800/50 to-indigo-900/50 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <motion.img 
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        src="/school.png" 
                        alt="Bal Bharati Public School" 
                        className="w-auto h-auto max-w-full max-h-full object-contain p-4 z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Bal Bharati Public School
                      </h4>
                      <p className="text-blue-200/80 mb-4 italic">
                        Brij Vihar, Ghaziabad, Uttar Pradesh 201011
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Received a strong foundation in science and mathematics. Discovered passion for computer science and programming. Participated in various interschool competitions and led school clubs.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {['Science Olympiad', 'Programming Club'].map((tag, index) => (
                          <span key={index} className="px-4 py-1.5 bg-blue-900/70 text-blue-200 rounded-full text-sm border border-blue-500/30 hover:bg-blue-800/80 transition-colors duration-300 shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Center Circle */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="absolute left-1/2 top-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 z-10 hidden md:flex items-center justify-center shadow-lg shadow-blue-500/20"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-900 border-2 border-white/80"></div>
                </motion.div>
                
                {/* School Info - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-left pl-10"
                >
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    Higher Secondary Education
                  </h3>
                  <p className="text-2xl font-semibold text-white/90 mt-2">Bal Bharati Public School</p>
                  <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-300 border border-blue-500/30 my-3">
                    2009 - 2023
                  </div>
                  <p className="text-xl text-cyan-300 font-medium">Class XII: 95%</p>
                  <p className="text-xl text-cyan-300 font-medium mb-6">Class X: 92%</p>
                  
                  <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 shadow-xl">
                    <p className="font-semibold text-lg mb-3 text-white">Activities & Achievements:</p>
                    <motion.ul 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2 text-gray-300"
                    >
                      {['House Captain', 'Vice President (2022-23)', 'Participated in Inter-school Competitions', 'Member of School Science & Technology Club'].map((achievement, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
           
        {/* Professional Experience Section */}
        <section id="experience" className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-16">
              <div className="h-0.5 w-16 bg-blue-500"></div>
              <h2 className="text-4xl font-bold px-6 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Professional </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Experience</span>
              </h2>
              <div className="h-0.5 w-16 bg-blue-500"></div>
            </div>
            
            {/* Internship Container */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-500/20 mb-16 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Company Logo/Image */}
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 rounded-xl p-6 h-full flex items-center justify-center overflow-hidden border border-blue-500/30 shadow-inner">
                    <motion.img 
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      src="/eterna.png" 
                      alt="Eterna Infotech" 
                      className="max-w-full max-h-48 object-contain"
                    />
                  </div>
                </div>

                {/* Internship Details */}
                <div className="md:w-2/3">
                  <div className="flex justify-between items-start flex-col md:flex-row mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Web Developer Intern
                      </h3>
                      <p className="text-2xl font-semibold text-white/90 mt-1">Eterna Infotech</p>
                      <p className="text-gray-300 mt-2">November 2024 - February 2025</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-200 px-5 py-1.5 rounded-full text-sm border border-blue-500/30 shadow-sm">
                        3 Months
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-6">
                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm p-5 rounded-xl border border-blue-500/10">
                      <h4 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Responsibilities & Achievements:
                      </h4>
                      <motion.ul 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300"
                      >
                        {[
                          'Worked on the Frontend side of their Project MTS (My True Skills)',
                          'Managed frontend development issues, ensuring smooth and error-free UI performance across all devices',
                          'Implemented responsive design techniques to optimize platform usability across mobile, tablet, and desktop',
                          'Enhanced product features and improved user experience by incorporating client feedback and modern UI/UX practices',
                          'Designed gamification elements to boost user engagement and retention'
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeInUp}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm p-5 rounded-xl border border-blue-500/10">
                      <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {['React.js', 'Tailwind CSS', 'PHP', 'JavaScript', 'GSAP', 'Git', 'Figma'].map((tech, index) => (
                          <motion.span 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -2, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                            className="px-4 py-2 bg-blue-900/40 text-blue-200 rounded-lg text-sm font-medium border border-blue-500/30 shadow-sm transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="mt-20 mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto px-6 py-16 rounded-3xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm border border-blue-500/20 shadow-2xl">
              <h3 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Interested in connecting?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss opportunities for collaboration or learn more about my educational journey.
              </p>
              <motion.a 
                href="/contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              
              <div className="flex justify-center gap-6 mt-10">
                {['LinkedIn', 'GitHub', 'Email'].map((platform, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3, color: '#60a5fa' }}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div className="flex flex-col gap-6">
          {[
            { id: 'education', label: 'Education' },
            { id: 'college', label: 'College' },
            { id: 'school', label: 'School' },
            { id: 'experience', label: 'Experience' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="group flex items-center gap-3"
            >
              <span className={`w-3 h-3 rounded-full ${activeSection === item.id ? 'bg-blue-400 shadow-lg shadow-blue-500/50' : 'bg-gray-500'} transition-all duration-300`}></span>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 text-blue-300 transition-opacity duration-300">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;