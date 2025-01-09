import React from 'react';

interface StepProps {
  number: string;
  title: string;
}

export function Step({ number, title }: StepProps) {
  return (
    <div className="group flex items-center space-x-4 p-6 rounded-lg bg-black/30 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
      <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-600 transition-all">
        {number}
      </span>
      <span className="text-xl text-white/90 group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
  );
}