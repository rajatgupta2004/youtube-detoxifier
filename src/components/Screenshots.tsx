import React, { useState } from 'react';

const screenshots = [
  {
    id: 1,
    url: 'https://i.postimg.cc/bdcmrZzN/img1.jpg', // Ensure this path is correct
    title: " ",
    description: "Shorts Fre Home page"
  },
  {
    id: 2,
    url: "https://i.postimg.cc/DwgKVTgb/img2.jpg",
    title: " ",
    description: "All relevant to the topic Videos"
  },
  {
    id: 3,
    url: "https://i.postimg.cc/XJtRK7Vt/img3.jpg",
    title: " ",
    description: "Remove all the Recommended Videos"
  }
];

export function Screenshots() {
  
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-24 bg-black/30 backdrop-blur-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-gradient-x"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 animate-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          See It In Action
        </h2>

        <div className="relative w-3/4 h-full items-center mx-auto">
          {/* Main Screenshot Display */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
            <img
              src={screenshots[activeIndex].url}
              alt={screenshots[activeIndex].title}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Screenshot Info */}
          <div className="absolute pl-1 bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-gray-300 w-56">
              {screenshots[activeIndex].description}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-8 pb-5 pt-5 justify-center">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-lg overflow-hidden w-32 aspect-video transition-all ${
                  index === activeIndex ? 'ring-2 ring-purple-500 scale-110' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <img
                  src={screenshot.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}