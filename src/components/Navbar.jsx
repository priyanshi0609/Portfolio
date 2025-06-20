import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {/* Backdrop blur overlay */}
      <div 
        className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/10 backdrop-blur-xl border-b border-white/20' 
            : 'bg-transparent'
        }`}
      />
      
      <nav className="fixed w-full z-50 transition-all duration-500">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'py-3' : 'py-6'
          }`}>
            
            {/* Logo */}
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer group relative"
            >
              <div className="flex items-center space-x-3">
          
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    Priyanshi
                  </span>
                  <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className={`flex items-center space-x-1 p-2 rounded-2xl transition-all duration-300 ${
                scrolled 
                  ? 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg' 
                  : 'bg-black/5 backdrop-blur-sm border border-white/20'
              }`}>
                {navItems.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 group ${
                      activeSection === item.to
                        ? 'text-white shadow-lg'
                        : scrolled 
                          ? 'text-gray-800 hover:text-gray-900' 
                          : 'text-gray-700 hover:text-gray-900'
                    }`}
                    activeClass="active"
                    spy={true}
                    onSetActive={(to) => setActiveSection(to)}
                  >
                    {/* Active background */}
                    {activeSection === item.to && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg"></div>
                    )}
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover indicator */}
                    <div className="absolute -bottom-1 left-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden relative p-3 rounded-xl focus:outline-none transition-all duration-300 group ${
                scrolled 
                  ? 'bg-white/20 backdrop-blur-xl border border-white/30' 
                  : 'bg-black/5 backdrop-blur-sm border border-white/20'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-800" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-800" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
              mobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
            }`}
          >
            <div className="mt-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`relative flex items-center justify-between px-6 py-4 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 group ${
                      activeSection === item.to
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                        : 'text-gray-800 hover:text-gray-900'
                    }`}
                    activeClass="active"
                    spy={true}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(item.to);
                    }}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Hover background */}
                    {activeSection !== item.to && (
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    
                    <span className="relative z-10 flex items-center">
                      <span className="w-2 h-2 bg-current rounded-full mr-3 opacity-60"></span>
                      {item.name}
                    </span>
                    
                    {activeSection === item.to && (
                      <ChevronDown className="w-4 h-4 opacity-60 rotate-90" />
                    )}
                  </Link>
                ))}
              </div>
              
              {/* Mobile menu footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Navigate with ease</span>
                  <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;