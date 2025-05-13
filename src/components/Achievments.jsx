import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, BookOpen, Code, Mic } from 'lucide-react';
import Navbar from './Navbar';

// Sample achievements data - replace with your own
const achievements = [
  {
    id: 1,
    title: "First Place @IIT'Delhi Hackathon",
    image: "A1.jpg",
    description: "Led a team of four developers to create an innovative solution for climate change awareness, winning first place at the Global Tech Hackathon 2024.",
    icon: <Award className="text-yellow-400" size={24} />
  },
  {
    id: 2,
    title: "My Boyfriend- Arsh Tiwari",
    image: "arshu.jpg",
    description: "My Favorite Achievement 💙 -Not every win comes with a medal—some come with a smile that makes your worst day better and your best days unforgettable. This is him—my constant, my calm, my chaos, and the best part of my journey so far.💫",
    icon: <Award className="text-blue-400" size={24} />
  },
  {
    id: 3,
    title: "Open Source Contribution Award",
    image: "/api/placeholder/600/400",
    description: "Recognized for significant contributions to major open-source projects, improving performance by 35% through code optimization.",
    icon: <Code className="text-green-400" size={24} />
  },
  {
    id: 4,
    title: "Tech Speaker of the Year",
    image: "/api/placeholder/600/400",
    description: "Selected as the Tech Speaker of the Year at the annual Developer Conference for an inspiring presentation on modern web architecture.",
    icon: <Mic className="text-red-400" size={24} />
  },
];

export default function AchievementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance the carousel 
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Fixed Navbar at the top */}
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      
      {/* Main content with padding to account for navbar */}
      <div className="pt-20 pb-6 px-6 min-h-screen flex flex-col items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
          <span className="relative inline-block">
            My Achievements
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
          </span>
        </h1>
        
        <div className="w-full max-w-5xl relative z-10">
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-800 bg-opacity-30 backdrop-blur-lg border border-gray-700 hover:border-gray-600 transition-all duration-500">
            <div className="aspect-w-16 aspect-h-9">
              {/* Current achievement */}
              <div 
                className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Image */}
                  <div className="lg:w-1/2 p-6">
                    <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-500 group">
                      <div className="relative">
                        <img 
                          src={achievements[currentIndex].image} 
                          alt={achievements[currentIndex].title}
                          className="w-full h-72 object-cover"
                        />
                       
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4 flex items-center">
                      <div className="h-10 w-1 bg-gradient-to-b from-purple-500 to-blue-500 mr-4 rounded-full"></div>
                      <div className="flex items-center space-x-3">
                        {achievements[currentIndex].icon}
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                          {achievements[currentIndex].title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {achievements[currentIndex].description}
                    </p>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                        Learn More
                      </button>
                      <button className="px-4 py-2 border border-gray-600 rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300">
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg hover:scale-110 z-20"
              aria-label="Previous achievement"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg hover:scale-110 z-20"
              aria-label="Next achievement"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none 
                  ${index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-400 to-blue-400 w-8 shadow-md shadow-blue-400/30' 
                    : 'bg-gray-500 w-3 hover:bg-gray-400'}`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 right-6 bg-gray-900/80 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm border border-gray-700 shadow-lg">
            <span className="font-mono">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="font-mono">{String(achievements.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10%, 5%) rotate(5deg);
          }
          50% {
            transform: translate(-5%, 10%) rotate(-5deg);
          }
          75% {
            transform: translate(5%, -5%) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}