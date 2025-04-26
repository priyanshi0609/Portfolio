import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion'; 

const EducationPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex flex-col">
      <Navbar />
      <section className="pt-24 pb-12 md:pt-32 md:pb-16"> 
        <main className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-white">Education</span>
                <span className="text-[#4a8cff]"> Journey</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                My academic path that has shaped my skills and knowledge in technology and design.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4a8cff] hidden md:block"></div>
            
            {/* College Entry */}
            <AnimatePresence>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-20"
              >
                <div className="md:grid md:grid-cols-2 gap-8 items-start relative">
                  {/* Left Content */}
                  <div className="text-right pr-10 mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold text-[#4a8cff]">B.Tech in Information Technology</h3>
                    <p className="text-xl">GGSIPU</p>
                    <p className="text-gray-300 my-2">2023 - Present</p>
                    <p className="text-gray-300 mb-4">CGPA: 9.2/10</p>
                    
                    <p className="font-semibold mb-2">Relevant Coursework:</p>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Data Structures & Algorithms</li>
                      <li>Web Development</li>
                      <li>UI/UX Design</li>
                      <li>Database Management Systems</li>
                    </ul>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#4a8cff] z-10 hidden md:block"></div>
                  
                  {/* Right Content - College Card */}
                  <div>
                    <div className="bg-[#172b54] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300">
                    <div className="h-64 bg-gradient-to-r from-blue-900 to-indigo-800 flex items-center justify-center overflow-hidden">
                     <img 
                       src="/college.png" 
                       alt="GGSIPU Logo" 
                      className="w-auto h-auto max-w-full max-h-full object-contain p-4"
                      />
                    </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">Guru Gobind Singh Indraprastha University</h4>
                        <p className="text-gray-300 mb-4">Sector 16C, Dwarka, New Delhi, Delhi 110078</p>
                        <p className="text-gray-300">
                          Pursuing advanced coursework in Information Technology , Full Stack Web Development, UI/UX Design, and AI/ML. Actively participating in hackathons, coding competitions, and technical clubs.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Web Dev Club</span>
                          <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">AI Society</span>
                          <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Hackathons</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* School Entry */}
            <AnimatePresence>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-20"
              >
                <div className="md:grid md:grid-cols-2 gap-8 items-start relative">
                  {/* School Card - Left Side */}
                  <div className="mb-8 md:mb-0">
                    <div className="bg-[#172b54] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300">
                      <div className="h-64 bg-gradient-to-r from-blue-900 to-indigo-800 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/school.png" 
                          alt="Delhi Public School Campus" 
                          className="w-auto h-auto max-w-full max-h-full object-contain p-4"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">Bal Bharati Public School </h4>
                        <p className="text-gray-300 mb-4">Brij Vihar,Ghaziabad, Uttar Pradesh 201011</p>
                        <p className="text-gray-300">
                          Received a strong foundation in science and mathematics. Discovered passion for computer science and programming. Participated in various interschool competitions and led school clubs.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Science Olympiad</span>
                          <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Programming Club</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#4a8cff] z-10 hidden md:block"></div>
                  
                  {/* School Info - Right Side */}
                  <div className="text-left pl-10">
                    <h3 className="text-2xl font-bold text-[#4a8cff]">Higher Secondary Education</h3>
                    <p className="text-xl">Bal Bharati Public School</p>
                    <p className="text-gray-300 my-2">2009 - 2023</p>
                    <p className="text-gray-300">Class XII: 95%</p>
                    <p className="text-gray-300 mb-4">Class X: 92%</p>
                    
                    <p className="font-semibold mb-2">Activities & Achievements:</p>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>House Captain</li>
                      <li>Vice President(2022-23)</li>
                      <li>Participated in Inter-school Competitions</li>
                      <li>Member of School Science&Technology Club</li>
                    </ul>
                    
                   
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
           {/* Professional Experience Section */}
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-28"
            >
              <h2 className="text-4xl font-bold mb-10 text-center">
                <span className="text-white">Professional </span>
                <span className="text-[#4a8cff]">Experience</span>
              </h2>
              
              {/* Internship Container */}
              <div className="bg-[#172b54] p-8 rounded-xl shadow-xl mb-16 transition-transform hover:scale-105 duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo/Image */}
                  <div className="md:w-1/3">
                    <div className="bg-[#0f1f41] rounded-lg p-4 h-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/eterna.png" 
                        alt="TechInnovate Solutions" 
                        className="max-w-full max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  {/* Internship Details */}
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start flex-col md:flex-row">
                      <div>
                        <h3 className="text-2xl font-bold text-[#4a8cff]">Web Developer Intern</h3>
                        <p className="text-xl"> Eterna Infotech</p>
                        <p className="text-gray-300 mt-1">November 2024 - Feburary 2025</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-[#0f1f41] text-blue-300 px-4 py-1 rounded-full text-sm">3 Months</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Responsibilities & Achievements:</h4>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Developed responsive UI components using React.js and Tailwind CSS for the company's flagship e-commerce dashboard</li>
                        <li>Collaborated with UX designers to implement designs that improved user engagement by 35%</li>
                        <li>Optimized application performance resulting in a 40% decrease in page load time</li>
                        <li>Participated in daily stand-ups and weekly code reviews to ensure code quality and consistency</li>
                        <li>Implemented state management solutions using Redux for complex application features</li>
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">React.js</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">php</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Gsap</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Git</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Figma</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              
              
            </motion.div>
          </AnimatePresence>
          
          
          
          {/* Contact Section */}
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Interested in connecting?</h3>
              <a href="/contact" className="inline-block bg-[#4a8cff] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
                Get In Touch
              </a>
            </motion.div>
          </AnimatePresence>
        </main>
      </section>
    </div>
  );
};

export default EducationPage;