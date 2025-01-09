import React, { useState } from 'react';
import { Youtube } from 'lucide-react';

export function Logo3D() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position with increased sensitivity
    const rotateX = (y - rect.height / 2) / 5; // Increased sensitivity
    const rotateY = -(x - rect.width / 2) / 5; // Increased sensitivity
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-48 h-48 perspective-1000 cursor-pointer" // Increased size
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative w-full h-full transition-transform duration-300 ease-out preserve-3d hover:scale-110" // Added hover scale and smoother transition
        style={{
          transform: `
            rotateX(${rotation.x}deg) 
            rotateY(${rotation.y}deg)
          `
        }}
      >
        {/* Front face with enhanced glow */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative group">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 animate-pulse-slow blur-2xl opacity-75 group-hover:opacity-100 transition-opacity">
              <Youtube className="w-48 h-48 text-red-500/50" />
            </div>
            {/* Main icon */}
            <Youtube className="w-48 h-48 text-red-500 relative z-10 transition-transform group-hover:scale-105" />
          </div>
        </div>
        
        {/* Enhanced shadow */}
        <div 
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-36 h-8 bg-red-500/20 rounded-full blur-xl transition-all duration-300"
          style={{
            transform: `translateX(-50%) scale(${1.2 + Math.abs(rotation.y) / 50}, ${1.2 + Math.abs(rotation.x) / 50})`
          }}
        />
      </div>
    </div>
  );
}