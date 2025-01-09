import React from 'react';
import { Step } from './Step';

export function HowItWorks() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 animate-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Step number="01" title="Install Extension" />
            <Step number="02" title="Watch YouTube Normally" />
            <Step number="03" title="Enjoy Distraction-Free Experience" />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="YouTube Interface"
                className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}