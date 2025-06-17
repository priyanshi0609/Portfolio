import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-gray-900 cursor-pointer flex items-center group"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
              PB
            </span>
            <span className="ml-2 hidden sm:inline-block text-gray-800 group-hover:text-gray-900 transition-colors">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  activeSection === item.to
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
                activeClass="active"
                spy={true}
                onSetActive={(to) => setActiveSection(to)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full focus:outline-none transition-colors hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg py-2 px-4 border border-gray-100">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className={`px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    activeSection === item.to
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  activeClass="active"
                  spy={true}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(item.to);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;