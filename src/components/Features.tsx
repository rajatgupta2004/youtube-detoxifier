import React from 'react';
import { Shield, Brain, Focus } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <div className="py-24 bg-black/30 backdrop-blur-lg relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-gradient-x"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-green-400" />}
            title="Distraction Blocker"
            description="Smart filtering removes irrelevant content and keeps you focused on what matters"
          />
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-blue-400" />}
            title="AI-Powered"
            description="Advanced algorithms learn from your preferences to deliver personalized recommendations"
          />
          <FeatureCard
            icon={<Focus className="w-12 h-12 text-purple-400" />}
            title="Enhanced Focus"
            description="Clean, minimalist interface eliminates visual clutter and improves concentration"
          />
        </div>
      </div>
    </div>
  );
}