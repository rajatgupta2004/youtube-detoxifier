import React from 'react';
import { Logo3D } from './Logo3D';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 animate-gradient-xy"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 8 + 4}s linear infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="animate-float">
            <Logo3D />
          </div>
          <h1 className="text-7xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            YouTube Detoxifier
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Transform your YouTube experience into a 
            <span className="text-purple-400"> focused</span>,
            <span className="text-blue-400"> distraction-free</span> journey
          </p>
          <div className="flex gap-4">
            <button className="group relative px-8 py-4 rounded-full text-lg font-semibold overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-lg transition-transform group-hover:scale-110"></div>
              {/* connect this span that when user clicks on this user will redirect to my github page */}
              <a href="https://github.com/rajatgupta2004/Youtube-detoxifier-chrome-extension" target="_blank" rel="noopener noreferrer">
                <span className="relative text-white">Add to Chrome</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}