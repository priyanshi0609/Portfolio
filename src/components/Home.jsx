import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight,
  Code,
  Paintbrush,
  Cpu,
  Menu,
  X,
  Download,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  User,
  Briefcase,
  GraduationCap,
  Trophy,
  Phone,
  Send
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Full Stack Developer', 
    'UI/UX Designer', 
    'AI/ML Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 70;
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(prev => 
          isDeleting 
            ? prev.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex]);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Cpu },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-700' },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'Python', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Django', level: 75, color: 'from-emerald-400 to-emerald-600' },
        { name: 'REST APIs', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'GraphQL', level: 70, color: 'from-pink-400 to-pink-600' },
      ]
    },
    {
      name: 'Languages',
      skills: [
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'Python', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', level: 75, color: 'from-red-400 to-red-600' },
        { name: 'C++', level: 70, color: 'from-blue-400 to-blue-600' },
      ]
    },
    {
      name: 'Web Tools',
      skills: [
        { name: 'Git/GitHub', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Postman', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Figma', level: 80, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 78, color: 'from-blue-500 to-blue-700' },
        { name: 'Firebase', level: 70, color: 'from-yellow-400 to-yellow-600' },
      ]
    },
    {
      name: 'Other',
      skills: [
        { name: 'Machine Learning', level: 75, color: 'from-purple-400 to-purple-600' },
        { name: 'UI/UX Design', level: 85, color: 'from-pink-400 to-pink-600' },
        { name: 'AWS', level: 65, color: 'from-orange-400 to-orange-600' },
        { name: 'CI/CD', level: 70, color: 'from-gray-400 to-gray-600' },
      ]
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/project1.jpg',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Task Manager',
      description: 'Smart task management app with ML-powered priority suggestions',
      tech: ['Python', 'TensorFlow', 'React', 'Flask'],
      image: '/project2.jpg',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring with interactive visualizations',
      tech: ['JavaScript', 'D3.js', 'API Integration'],
      image: '/project3.jpg',
      github: '#',
      live: '#'
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place at Tech Innovation Challenge 2024',
      date: '2024',
      icon: Trophy
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to major React libraries',
      date: '2023-2024',
      icon: Github
    },
    {
      title: 'AWS Certified',
      description: 'AWS Solutions Architect Associate',
      date: '2023',
      icon: Award
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-navy-900 min-h-screen text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-800/90 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Priyanshi
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-blue-500/20">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 p-3 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left Column */}
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <p className="text-blue-400 font-mono mb-2 text-lg">Hello, my name is</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                Priyanshi Bothra
              </h1>
              <div className="text-2xl md:text-3xl mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Crafting digital experiences that blend aesthetics with functionality. 
                I specialize in building responsive, performant web applications with 
                intuitive interfaces and robust backends.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-500/10 flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-5">
                <a href="mailto:priyanshibothra753@gmail.com" className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:-translate-y-1">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://github.com/priyanshi0609" className="text-gray-400 hover:text-purple-300 transition-all duration-300 hover:-translate-y-1">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/priyanshi-bothra-339568219/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl">👩‍💻</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-blue-600/20 backdrop-blur-sm p-3 rounded-full border border-blue-400/30">
                  <Code className="h-6 w-6 text-blue-300" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-purple-600/20 backdrop-blur-sm p-3 rounded-full border border-purple-400/30">
                  <Paintbrush className="h-6 w-6 text-purple-300" />
                </div>
                <div className="absolute top-1/2 -right-10 bg-blue-500/20 backdrop-blur-sm p-3 rounded-full border border-blue-400/30">
                  <Cpu className="h-6 w-6 text-blue-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-navy-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Get to know me!</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with a keen eye for design and a love for creating 
                innovative solutions. With expertise in modern web technologies and a growing interest in 
                AI/ML, I enjoy tackling complex problems and turning ideas into reality.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or designing user interfaces that make people's lives easier and more enjoyable.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>Age: 22</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Location: India</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-400/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                    <div className="text-gray-300">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-navy-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div key={category.name} className="bg-navy-800/80 p-6 rounded-xl border border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-400/30 pb-2 flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-300">{skill.name}</span>
                        <span className="text-blue-400 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-navy-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-navy-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-400/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-300">Bachelor of Technology - Computer Science</h3>
                <span className="text-gray-400 font-medium">2021 - 2025</span>
              </div>
              <p className="text-lg text-purple-300 mb-2">XYZ University</p>
              <p className="text-gray-300">CGPA: 8.5/10</p>
              <p className="text-gray-300 mt-3">
                Relevant coursework: Data Structures, Algorithms, Database Management, 
                Software Engineering, Machine Learning, Web Development
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-xl border border-purple-400/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-purple-300">Higher Secondary Education</h3>
                <span className="text-gray-400 font-medium">2019 - 2021</span>
              </div>
              <p className="text-lg text-blue-300 mb-2">ABC School</p>
              <p className="text-gray-300">Percentage: 92%</p>
              <p className="text-gray-300 mt-3">
                Stream: Science (PCM) with Computer Science
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-navy-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-navy-800/80 p-8 rounded-xl border border-blue-400/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">Frontend Developer Intern</h3>
                  <p className="text-lg text-purple-300">Tech Solutions Inc.</p>
                </div>
                <span className="text-gray-400 font-medium">Jun 2024 - Aug 2024</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed responsive web applications using React.js and Tailwind CSS</li>
                <li>• Collaborated with design team to implement pixel-perfect UI components</li>
                <li>• Improved application performance by 30% through code optimization</li>
                <li>• Participated in code reviews and followed agile development practices</li>
              </ul>
            </div>
            
            <div className="bg-navy-800/80 p-8 rounded-xl border border-purple-400/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">Full Stack Developer</h3>
                  <p className="text-lg text-blue-300">Freelance</p>
                </div>
                <span className="text-gray-400 font-medium">Jan 2024 - Present</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Built end-to-end web applications for various clients using MERN stack</li>
                <li>• Designed and implemented RESTful APIs with proper authentication</li>
                <li>• Created responsive and accessible user interfaces</li>
                <li>• Managed databases and optimized queries for better performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-navy-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-navy-800/80 rounded-xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-400 hover:text-blue-300 transition-colors">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center text-gray-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-navy-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-400/20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{achievement.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{achievement.description}</p>
                <span className="text-purple-400 font-medium">{achievement.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-navy-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Let's Connect!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, exciting projects, 
                or just having a friendly chat about technology and innovation. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-blue-300 font-medium">Email</p>
                    <p className="text-gray-300">priyanshibothra753@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-purple-300 font-medium">Phone</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 mt-8">
                <a href="https://github.com/priyanshi0609" className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/priyanshi-bothra-339568219/" className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:priyanshibothra753@gmail.com" className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-navy-800/80 p-8 rounded-xl border border-blue-400/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-blue-300 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-300 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-300 font-medium mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        <ArrowRight className="h-5 w-5 text-white transform -rotate-90" />
      </button>

      
    </div>
  );
};

export default Portfolio;
