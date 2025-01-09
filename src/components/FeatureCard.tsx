import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-8 rounded-2xl bg-black/50 backdrop-blur-lg relative z-10 h-full transform transition-transform group-hover:scale-[1.02] group-hover:-translate-y-1">
        <div className="space-y-4">
          <div className="transform group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}