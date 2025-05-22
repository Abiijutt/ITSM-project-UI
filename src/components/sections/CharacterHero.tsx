
import React from 'react';
import { Axe } from 'lucide-react';
import { useColorShift } from '@/hooks/useColorShift';

const CharacterHero = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden" aria-labelledby="characters-heading">
      <div className="absolute inset-0 opacity-25 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="characters-heading" className="text-5xl md:text-6xl font-bold mb-6">
            AI WALA <span style={{ color: accentColor }} className="block mt-2">Characters</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Meet our cyborg warriors, the embodiment of human-AI fusion technology.
            Each character specializes in a specific digital service.
          </p>
          
          <div className="flex justify-center animate-bounce">
            <Axe size={48} style={{ color: accentColor }} className="animate-pulse" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterHero;
