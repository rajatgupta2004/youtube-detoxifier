import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Screenshots } from './components/Screenshots';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      
      <footer className="bg-black/30 backdrop-blur-lg py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 YouTube Detoxifier. Made with{' '}
            <span className="text-red-500">❤️</span> for a better YouTube experience.
          </p>
          <a href='https://github.com/rajatgupta2004/' target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className='w-8 h-8 rounded-full items-center mx-auto mt-4  bg-white'/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;