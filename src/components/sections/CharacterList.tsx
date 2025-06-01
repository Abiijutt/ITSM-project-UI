
import React, { useEffect } from 'react';
import { characters } from '@/lib/characterData';
import CharacterCard from '@/components/CharacterCard';

const CharacterList = () => {
  // Add animation to characters on load
  useEffect(() => {
    const characterElements = document.querySelectorAll('.character-element');
    characterElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden" aria-labelledby="warriors-heading">
      <div className="container mx-auto">
        <h2 id="warriors-heading" className="text-4xl font-bold text-center text-white mb-16">The Warriors</h2>
        
        <div className="space-y-32">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterList;
