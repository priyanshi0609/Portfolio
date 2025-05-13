import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample achievements data - replace with your own
const achievements = [
  {
    id: 1,
    title: "First Place Hackathon Winner",
    image: "/api/placeholder/600/400",
    description: "Led a team of four developers to create an innovative solution for climate change awareness, winning first place at the Global Tech Hackathon 2024."
  },
  {
    id: 2,
    title: "Outstanding Research Paper",
    image: "/api/placeholder/600/400",
    description: "Published a peer-reviewed research paper on advanced web development techniques in the International Journal of Computer Science."
  },
  {
    id: 3,
    title: "Open Source Contribution Award",
    image: "/api/placeholder/600/400",
    description: "Recognized for significant contributions to major open-source projects, improving performance by 35% through code optimization."
  },
  {
    id: 4,
    title: "Tech Speaker of the Year",
    image: "/api/placeholder/600/400",
    description: "Selected as the Tech Speaker of the Year at the annual Developer Conference for an inspiring presentation on modern web architecture."
  },
];

export default function AchievementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-indigo-900 text-white p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center relative">
        <span className="relative inline-block">
          Achievements
          <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 rounded-full"></span>
        </span>
      </h1>
      
      <div className="w-full max-w-4xl relative">
        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-navy-800 bg-opacity-50 backdrop-blur-sm">
          <div className="aspect-w-16 aspect-h-9">
            {/* Current achievement */}
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Image */}
                <div className="md:w-1/2 p-4">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={achievements[currentIndex].image} 
                      alt={achievements[currentIndex].title}
                      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="mb-2 flex items-center">
                    <div className="h-8 w-1 bg-purple-500 mr-3"></div>
                    <h2 className="text-2xl font-bold text-purple-300">
                      {achievements[currentIndex].title}
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {achievements[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Previous achievement"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Next achievement"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none 
                ${index === currentIndex 
                  ? 'bg-purple-400 w-6' 
                  : 'bg-gray-400 hover:bg-gray-300'}`}
              aria-label={`Go to achievement ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded-full text-sm text-white">
          {currentIndex + 1} / {achievements.length}
        </div>
      </div>
    </div>
  );
}