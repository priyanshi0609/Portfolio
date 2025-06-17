import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const skills = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'JavaScript Expert',
    'Problem Solver'
  ];

  useEffect(() => {
    const skill = skills[currentSkill];
    let timeout;
    
    if (isTyping) {
      if (displayText.length < skill.length) {
        timeout = setTimeout(() => {
          setDisplayText(skill.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentSkill, skills]);

  const handleDownloadCV = () => {
    // Replace this URL with your actual PDF URL
    const pdfUrl = '/path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'John_Doe_CV.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/johndoe',
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/johndoe',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Mail,
      href: 'mailto:john@example.com',
      label: 'Email',
      color: 'hover:bg-red-500 hover:text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-100 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-100 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-slate-100 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting with Animation */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-lg font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full animate-fadeInUp">
                  👋 Hello, I'm
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 animate-fadeInUp animation-delay-200">
                John
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Doe</span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 animate-fadeInUp animation-delay-400">
                  {displayText}
                  <span className="animate-pulse text-blue-600">|</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-600">
              I craft exceptional digital experiences with modern technologies, 
              focusing on creating accessible and user-friendly web applications 
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start animate-fadeInUp animation-delay-800">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={20} />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              
              <button 
                onClick={handleDownloadCV}
                className="group px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
                <div className="w-0 group-hover:w-6 h-0.5 bg-blue-500 transition-all duration-300"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center justify-center lg:justify-start animate-fadeInUp animation-delay-1000">
              <span className="text-gray-600 font-medium">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-full bg-white shadow-md border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 lg:order-2 animate-fadeInUp animation-delay-1200">
            <div className="relative">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-indigo-100 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-full border border-gray-100 animate-pulse"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="John Doe - Frontend Developer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                {/* Floating Skills Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-blue-50 animate-bounce-slow">
                  <div className="text-2xl">💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400 w-6 h-6" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </div>
  );
};

export default Hero;