import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const EducationPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const shimmer = {
    hidden: { backgroundPosition: '200% 0' },
    visible: { 
      backgroundPosition: '-200% 0',
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "linear"
      }
    }
  };

  const floatingVariants = {
    hover: {
      y: [0, -8, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  // Custom cursor effect
  const CustomCursor = () => (
    <motion.div
      className="fixed w-6 h-6 rounded-full bg-white/10 border border-white/20 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: cursorPosition.x - 12,
        top: cursorPosition.y - 12,
      }}
      animate={{
        scale: isHoveringContact ? 1.8 : 1,
        backgroundColor: isHoveringContact ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 text-white flex flex-col overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(at_40%_20%,hsla(240,100%,70%,0.3)0px,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(at_80%_0%,hsla(189,100%,56%,0.2)0px,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(at_0%_50%,hsla(355,100%,93%,0.1)0px,transparent_50%)]"></div>
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-500/30"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-300 border border-blue-500/30 mb-6 text-sm font-medium tracking-wider"
              >
                ACADEMIC JOURNEY
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tighter">
                <motion.span 
                  className="inline-block text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Education 
                </motion.span>{" "}
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  variants={shimmer}
                >
                  Redefined
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
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
                className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16"
              >
                <motion.a 
                  href="#education"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/30 hover:border-blue-400/50 text-white group transition-all duration-300"
                >
                  <span>Explore Journey</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                    className="inline-block"
                  >
                    ↓
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        {/* Education Timeline */}
        <section id="education" className="mb-32">
          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400/0 via-blue-400 to-indigo-600/0 hidden md:block origin-top"
            />
            
            {/* College Entry */}
            <div id="college" className="mb-40">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-16"
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                <h2 className="text-3xl font-bold px-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 tracking-wider">
                  HIGHER EDUCATION
                </h2>
                <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </motion.div>
              
              <div className="md:grid md:grid-cols-2 gap-16 items-start relative">
                {/* Left Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-right pr-10 mb-12 md:mb-0"
                >
                  <div className="sticky top-32">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-3">
                      B.Tech in Information Technology
                    </h3>
                    <p className="text-2xl font-medium text-white/90 mt-2">GGSIPU</p>
                    <div className="inline-block px-4 py-1.5 bg-blue-900/30 rounded-full text-blue-300 border border-blue-500/30 my-4 text-sm font-medium tracking-wide">
                      2023 - Present
                    </div>
                    <p className="text-xl text-cyan-300 font-medium mb-8">CGPA: 9.2/10</p>
                    
                    <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 shadow-xl">
                      <p className="font-semibold text-lg mb-4 text-white tracking-wide">RELEVANT COURSEWORK:</p>
                      <motion.ul 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3 text-gray-300"
                      >
                        {['Data Structures & Algorithms', 'Web Development', 'UI/UX Design', 'Database Management Systems'].map((course, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center justify-end gap-3 group"
                          >
                            <span className="group-hover:text-blue-300 transition-colors duration-300">{course}</span>
                            <span className="h-2 w-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform duration-300"></span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
                
                {/* Center Circle */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="absolute left-1/2 top-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 z-10 hidden md:flex items-center justify-center shadow-lg shadow-blue-500/20 border-2 border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-900 border border-white/80"></div>
                </motion.div>
                
                {/* Right Content - College Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/20 group hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="h-72 bg-gradient-to-br from-blue-800/50 to-indigo-900/50 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <motion.img 
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        src="/college.png" 
                        alt="GGSIPU Logo" 
                        className="w-auto h-auto max-w-full max-h-full object-contain p-8 z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Guru Gobind Singh Indraprastha University
                      </h4>
                      <p className="text-blue-200/80 mb-6 italic">
                        Sector 16C, Dwarka, New Delhi, Delhi 110078
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Pursuing advanced coursework in Information Technology, Full Stack Web Development, UI/UX Design, and AI/ML. Actively participating in hackathons, coding competitions, and technical clubs.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {['Hackathons', 'Research', 'Coding Clubs', 'Tech Events'].map((tag, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ y: -2 }}
                            className="px-3 py-1.5 bg-blue-900/50 text-blue-200 rounded-full text-xs font-medium tracking-wide border border-blue-500/30 hover:bg-blue-800/70 transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* School Entry */}
            <div id="school" className="mb-40">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-16"
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                <h2 className="text-3xl font-bold px-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 tracking-wider">
                  SCHOOL EDUCATION
                </h2>
                <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </motion.div>
              
              <div className="md:grid md:grid-cols-2 gap-16 items-start relative">
                {/* School Card - Left Side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12 md:mb-0"
                >
                  <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/20 group hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="h-72 bg-gradient-to-br from-blue-800/50 to-indigo-900/50 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <motion.img 
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        src="/school.png" 
                        alt="Bal Bharati Public School" 
                        className="w-auto h-auto max-w-full max-h-full object-contain p-8 z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                        Bal Bharati Public School
                      </h4>
                      <p className="text-blue-200/80 mb-6 italic">
                        Brij Vihar, Ghaziabad, Uttar Pradesh 201011
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Received a strong foundation in science and mathematics. Discovered passion for computer science and programming. Participated in various interschool competitions and led school clubs.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {['Science Olympiad', 'Programming Club', 'House Captain', 'Debate Team'].map((tag, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ y: -2 }}
                            className="px-3 py-1.5 bg-blue-900/50 text-blue-200 rounded-full text-xs font-medium tracking-wide border border-blue-500/30 hover:bg-blue-800/70 transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
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
                  className="absolute left-1/2 top-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 z-10 hidden md:flex items-center justify-center shadow-lg shadow-blue-500/20 border-2 border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-900 border border-white/80"></div>
                </motion.div>
                
                {/* School Info - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-left pl-10"
                >
                  <div className="sticky top-32">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-3">
                      Higher Secondary Education
                    </h3>
                    <p className="text-2xl font-medium text-white/90 mt-2">Bal Bharati Public School</p>
                    <div className="inline-block px-4 py-1.5 bg-blue-900/30 rounded-full text-blue-300 border border-blue-500/30 my-4 text-sm font-medium tracking-wide">
                      2009 - 2023
                    </div>
                    <p className="text-xl text-cyan-300 font-medium">Class XII: 95%</p>
                    <p className="text-xl text-cyan-300 font-medium mb-8">Class X: 92%</p>
                    
                    <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 shadow-xl">
                      <p className="font-semibold text-lg mb-4 text-white tracking-wide">ACTIVITIES & ACHIEVEMENTS:</p>
                      <motion.ul 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3 text-gray-300"
                      >
                        {['House Captain', 'Vice President (2022-23)', 'Participated in Inter-school Competitions', 'Member of School Science & Technology Club'].map((achievement, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-3 group"
                          >
                            <span className="h-2 w-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform duration-300"></span>
                            <span className="group-hover:text-blue-300 transition-colors duration-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
           
        {/* Professional Experience Section */}
        <section id="experience" className="mb-40">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-20">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h2 className="text-4xl font-bold px-6 text-center tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">Professional </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Experience</span>
              </h2>
              <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            {/* Internship Container */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-blue-500/20 mb-16 hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Company Logo/Image */}
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 rounded-xl p-8 h-full flex items-center justify-center overflow-hidden border border-blue-500/30 shadow-inner group-hover:border-blue-400/50 transition-all duration-500">
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
                <div className="lg:w-2/3">
                  <div className="flex justify-between items-start flex-col lg:flex-row mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mb-2">
                        Web Developer Intern
                      </h3>
                      <p className="text-2xl font-medium text-white/90">Eterna Infotech</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-200 px-5 py-1.5 rounded-full text-sm border border-blue-500/30 shadow-sm">
                        November 2024 - February 2025
                      </span>
                      <span className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-200 px-5 py-1.5 rounded-full text-sm border border-blue-500/30 shadow-sm">
                        3 Months
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-8">
                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 group-hover:border-blue-400/20 transition-all duration-500">
                      <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-wide">
                        RESPONSIBILITIES & ACHIEVEMENTS:
                      </h4>
                      <motion.ul 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300"
                      >
                        {[
                          'Worked on the Frontend side of their Project MTS (My True Skills)',
                          'Managed frontend development issues, ensuring smooth UI performance',
                          'Implemented responsive design techniques across all devices',
                          'Enhanced product features by incorporating client feedback',
                          'Designed gamification elements to boost user engagement'
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeInUp}
                            className="flex items-start gap-3 group"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                            <span className="group-hover:text-blue-300 transition-colors duration-300">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/10 group-hover:border-blue-400/20 transition-all duration-500">
                      <h4 className="text-lg font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-wide">
                        TECHNOLOGIES USED:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {['React.js', 'Tailwind CSS', 'PHP', 'JavaScript', 'GSAP', 'Git', 'Figma'].map((tech, index) => (
                          <motion.span 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ 
                              y: -3,
                              backgroundColor: 'rgba(59, 130, 246, 0.3)',
                              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.25)'
                            }}
                            className="px-4 py-2.5 bg-blue-900/40 text-blue-200 rounded-lg text-sm font-medium tracking-wide border border-blue-500/30 shadow-sm transition-all duration-300"
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
        
        {/* Compact Contact Section */}
        <section id="contact" className="mt-32 mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div 
              className="max-w-2xl mx-auto px-8 py-16 rounded-3xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm border border-blue-500/20 shadow-2xl relative overflow-hidden group"
              onMouseEnter={() => setIsHoveringContact(true)}
              onMouseLeave={() => setIsHoveringContact(false)}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl z-0"
                animate={{
                  x: isHoveringContact ? [0, 20, 0] : 0,
                  y: isHoveringContact ? [0, 20, 0] : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-xl z-0"
                animate={{
                  x: isHoveringContact ? [0, -20, 0] : 0,
                  y: isHoveringContact ? [0, -20, 0] : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 tracking-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  Ready to Collaborate?
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-8 text-lg max-w-md mx-auto leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  Let's discuss how we can work together to create something amazing.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <motion.a 
                    href="/contact" 
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group"
                  >
                    <motion.span
                      variants={floatingVariants}
                      animate="hover"
                      className="inline-block"
                    >
                      👋
                    </motion.span>
                    <span>Get In Touch</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      }}
                      className="inline-block"
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default EducationPage;