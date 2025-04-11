import React, { useEffect } from 'react';
import Navbar from './Navbar'; // Import your existing Navbar component
import { motion } from 'framer-motion'; // You'll need to install framer-motion for animations

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
        <motion.div 
          initial="hidden"
          animate="visible"
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4a8cff] hidden md:block"></div>
          
          {/* College Entry */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="md:grid md:grid-cols-2 gap-8 items-start relative">
              {/* Left Content */}
              <div className="text-right pr-10 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-[#4a8cff]">B.Tech in Information Technology</h3>
                <p className="text-xl">GGSIPU</p>
                <p className="text-gray-300 my-2">2021 - Present</p>
                <p className="text-gray-300 mb-4">CGPA: 9.2/10</p>
                
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Data Structures & Algorithms</li>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              
              {/* Center Circle */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#4a8cff] z-10 hidden md:block"></div>
              
              {/* Right Content - College Card */}
              <div>
                <div className="bg-[#172b54] rounded-xl overflow-hidden shadow-xl">
                  <div className="h-64 bg-gray-700 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-2 text-gray-300"></p>
                     </div>
                  </div>
                   <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Guru Gobind Singh Indraprastha University</h4>
                    <p className="text-gray-300 mb-4">Sector 16C, Dwarka, New Delhi, Delhi 110078</p>
                    <p className="text-gray-300">
                      Pursuing advanced coursework in Full Stack Web Development, UI/UX Design, and AI/ML. Actively participating in hackathons, coding competitions, and technical clubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* School Entry */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="md:grid md:grid-cols-2 gap-8 items-start relative">
              {/* School Card - Left Side */}
              <div className="mb-8 md:mb-0">
                <div className="bg-[#172b54] rounded-xl overflow-hidden shadow-xl">
                  <div className="h-64 bg-gray-700 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-2 text-gray-300">Add School image here</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Delhi Public School</h4>
                    <p className="text-gray-300 mb-4">Vasant Kunj, New Delhi, Delhi 110070</p>
                    <p className="text-gray-300">
                      Received a strong foundation in science and mathematics. Discovered passion for computer science and programming. Participated in various interschool competitions and led school clubs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Center Circle */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#4a8cff] z-10 hidden md:block"></div>
              
              {/* School Info - Right Side */}
              <div className="text-left pl-10">
                <h3 className="text-2xl font-bold text-[#4a8cff]">Higher Secondary Education</h3>
                <p className="text-xl">Delhi Public School</p>
                <p className="text-gray-300 my-2">2007 - 2019</p>
                <p className="text-gray-300">Class XII: 95%</p>
                <p className="text-gray-300 mb-4">Class X: 92%</p>
                
                <p className="font-semibold mb-2">Activities & Achievements:</p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Science Club President</li>
                  <li>School Representative at National Science Fair</li>
                  <li>Computer Science Excellence Award</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Gained Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-[#172b54] p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Educational <span className="text-[#4a8cff]">Skills Gained</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#0b1736] rounded-lg hover:bg-[#1c336e] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#4a8cff]">Technical Skills</h3>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Full Stack Development</li>
                <li>UI/UX Design</li>
                <li>Data Structures & Algorithms</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div className="p-4 bg-[#0b1736] rounded-lg hover:bg-[#1c336e] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#4a8cff]">Soft Skills</h3>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Public Speaking</li>
                <li>Project Management</li>
                <li>Team Leadership</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="p-4 bg-[#0b1736] rounded-lg hover:bg-[#1c336e] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-[#4a8cff]">Tools & Technologies</h3>
              <ul className="list-disc pl-5 text-gray-300">
                <li>React & Tailwind CSS</li>
                <li>Figma & Adobe XD</li>
                <li>Node.js & Express</li>
                <li>MongoDB & Firebase</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Want to know more about my work?</h3>
          <a href="/projects" className="inline-block bg-[#4a8cff] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
            Check Out My Projects
          </a>
        </motion.div>
      </main>
        </section>
       
    </div>
  );
};

export default EducationPage;