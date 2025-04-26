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
                    <p className="text-gray-300 my-2">2021 - Present</p>
                    <p className="text-gray-300 mb-4">CGPA: 9.2/10</p>
                    
                    <p className="font-semibold mb-2">Relevant Coursework:</p>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Data Structures & Algorithms</li>
                      <li>Web Development</li>
                      <li>Machine Learning</li>
                      <li>UI/UX Design</li>
                      <li>Cloud Computing</li>
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
                          alt="GGSIPU Campus" 
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">Guru Gobind Singh Indraprastha University</h4>
                        <p className="text-gray-300 mb-4">Sector 16C, Dwarka, New Delhi, Delhi 110078</p>
                        <p className="text-gray-300">
                          Pursuing advanced coursework in Full Stack Web Development, UI/UX Design, and AI/ML. Actively participating in hackathons, coding competitions, and technical clubs.
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
                          src="/images/dps-school.jpg" 
                          alt="Delhi Public School Campus" 
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
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
                      <li>Science Club President</li>
                      <li>School Representative at National Science Fair</li>
                      <li>Computer Science Excellence Award</li>
                      <li>First place in Inter-school Coding Competition</li>
                      <li>Member of School Mathematics Team</li>
                    </ul>
                    
                    <div className="mt-6 bg-[#0f1f41] p-4 rounded-lg">
                      <h5 className="font-bold text-[#4a8cff]">Final Year Project</h5>
                      <p className="text-gray-300 mt-2">
                        Developed a smart inventory management system for the school's science lab that helped track and manage equipment and chemicals efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Certifications Section (New) */}
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-24 mb-16"
            >
              <h2 className="text-4xl font-bold mb-10 text-center">
                <span className="text-white">Professional </span>
                <span className="text-[#4a8cff]">Certifications</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Certification 1 */}
                <div className="bg-[#172b54] rounded-xl p-6 shadow-xl transition-transform hover:scale-105 duration-300">
                  <div className="h-3 bg-[#4a8cff] rounded-t-xl -mt-6 -mx-6 mb-4"></div>
                  <h3 className="text-xl font-bold text-[#4a8cff] mb-2">Full Stack Web Development</h3>
                  <p className="text-gray-300 mb-1">Udemy</p>
                  <p className="text-gray-400 text-sm mb-4">Completed March 2022</p>
                  <p className="text-gray-300">Comprehensive course covering MERN stack development with real-world projects and industry best practices.</p>
                </div>
                
                {/* Certification 2 */}
                <div className="bg-[#172b54] rounded-xl p-6 shadow-xl transition-transform hover:scale-105 duration-300">
                  <div className="h-3 bg-[#4a8cff] rounded-t-xl -mt-6 -mx-6 mb-4"></div>
                  <h3 className="text-xl font-bold text-[#4a8cff] mb-2">UI/UX Design Fundamentals</h3>
                  <p className="text-gray-300 mb-1">Google</p>
                  <p className="text-gray-400 text-sm mb-4">Completed July 2023</p>
                  <p className="text-gray-300">Professional certification focused on user research, wireframing, prototyping, and design systems.</p>
                </div>
                
                {/* Certification 3 */}
                <div className="bg-[#172b54] rounded-xl p-6 shadow-xl transition-transform hover:scale-105 duration-300">
                  <div className="h-3 bg-[#4a8cff] rounded-t-xl -mt-6 -mx-6 mb-4"></div>
                  <h3 className="text-xl font-bold text-[#4a8cff] mb-2">Machine Learning Specialization</h3>
                  <p className="text-gray-300 mb-1">Coursera</p>
                  <p className="text-gray-400 text-sm mb-4">Completed December 2023</p>
                  <p className="text-gray-300">Three-course specialization covering supervised learning, neural networks, and machine learning systems design.</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
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
                        src="/images/techinnovate-logo.jpg" 
                        alt="TechInnovate Solutions" 
                        className="max-w-full max-h-48 object-contain"
                      />
                    </div>
                  </div>

                  {/* Internship Details */}
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start flex-col md:flex-row">
                      <div>
                        <h3 className="text-2xl font-bold text-[#4a8cff]">Frontend Developer Intern</h3>
                        <p className="text-gray-300 mt-1">June 2023 - August 2023</p>
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
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Redux</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Git</span>
                        <span className="px-3 py-1 bg-[#0f1f41] text-blue-300 rounded-full text-sm">Figma</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Key Project:</h4>
                      <div className="bg-[#0f1f41] p-4 rounded-lg">
                        <h5 className="font-bold text-[#4a8cff]">E-commerce Analytics Dashboard</h5>
                        <p className="text-gray-300 mt-2">
                          Developed an interactive dashboard that visualized sales data, customer metrics, and inventory status. The dashboard featured real-time updates and customizable views to meet specific business needs.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <img 
                            src="/images/dashboard-preview-1.jpg" 
                            alt="Dashboard Preview" 
                            className="rounded-lg w-full h-32 object-cover"
                          />
                          <img 
                            src="/images/dashboard-preview-2.jpg" 
                            alt="Dashboard Preview" 
                            className="rounded-lg w-full h-32 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action for More Experience */}
              <div className="text-center mt-8">
                <p className="text-xl text-gray-300 mb-4">Looking to add more professional experience as I continue my journey</p>
                <div className="inline-block bg-[#172b54] px-6 py-3 rounded-lg border border-[#4a8cff] text-[#4a8cff] hover:bg-[#0f1f41] transition-colors duration-300 cursor-pointer">
                  Open to New Opportunities
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Skills Section (New) */}
          <AnimatePresence>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-28"
            >
              <h2 className="text-4xl font-bold mb-10 text-center">
                <span className="text-white">Technical </span>
                <span className="text-[#4a8cff]">Skills</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Programming */}
                <div className="bg-[#172b54] p-6 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-[#4a8cff] mb-6">Programming Languages</h3>
                  
                  {/* Skill Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">JavaScript/TypeScript</span>
                        <span className="text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-[#0f1f41] rounded-full h-2.5">
                        <div className="bg-[#4a8cff] h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Python</span>
                        <span className="text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-[#0f1f41] rounded-full h-2.5">
                        <div className="bg-[#4a8cff] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Java</span>
                        <span className="text-gray-400">70%</span>
                      </div>
                      <div className="w-full bg-[#0f1f41] rounded-full h-2.5">
                        <div className="bg-[#4a8cff] h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">C/C++</span>
                        <span className="text-gray-400">75%</span>
                      </div>
                      <div className="w-full bg-[#0f1f41] rounded-full h-2.5">
                        <div className="bg-[#4a8cff] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">SQL</span>
                        <span className="text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-[#0f1f41] rounded-full h-2.5">
                        <div className="bg-[#4a8cff] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Frameworks & Tools */}
                <div className="bg-[#172b54] p-6 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-[#4a8cff] mb-6">Frameworks & Tools</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">R</span>
                      </div>
                      <span className="text-gray-300">React.js</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">N</span>
                      </div>
                      <span className="text-gray-300">Node.js</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">T</span>
                      </div>
                      <span className="text-gray-300">TensorFlow</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">F</span>
                      </div>
                      <span className="text-gray-300">Figma</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">T</span>
                      </div>
                      <span className="text-gray-300">Tailwind</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">G</span>
                      </div>
                      <span className="text-gray-300">Git/GitHub</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">M</span>
                      </div>
                      <span className="text-gray-300">MongoDB</span>
                    </div>
                    
                    <div className="bg-[#0f1f41] p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg font-bold text-white">A</span>
                      </div>
                      <span className="text-gray-300">AWS</span>
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