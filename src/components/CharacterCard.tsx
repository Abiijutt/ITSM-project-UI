
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CharacterParallax from '@/components/CharacterParallax';
import { CharacterWithService } from '@/lib/characterData';

interface CharacterCardProps {
  character: CharacterWithService;
  index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
  return (
    <div className="relative character-element">
      <CharacterParallax 
        imagePath={character.imagePath}
        altText={character.altText}
        position={character.position}
        size="large"
        glowColor={character.glowColor}
        animationDelay={index * 300}
      />
      
      <motion.div 
        className={`absolute ${character.position === 'left' ? 'md:top-1/2 md:right-0 top-full right-1/2 md:transform-none transform translate-x-1/2 md:-translate-y-1/2 md:mr-8' : 
          character.position === 'right' ? 'md:top-1/2 md:left-0 top-full left-1/2 md:transform-none transform -translate-x-1/2 md:-translate-y-1/2 md:ml-8' : 
          'top-full left-1/2 transform -translate-x-1/2 -translate-y-24'} 
          bg-gray-900 p-4 rounded-lg shadow-lg text-center border-2 max-w-md ${character.animationClass} z-10`}
        style={{ borderColor: character.glowColor }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-1" style={{ color: character.glowColor }}>
          {character.name}
        </h3>
        <p className="text-white font-medium mb-2">
          Service: {character.service}
        </p>
        <p className="text-white italic mb-1 text-lg">
          "{character.funnyPhrase}"
        </p>
        <p className="text-gray-400 text-sm">
          {character.phraseTranslation}
        </p>
        
        <Link 
          to={`/services/${character.serviceId}`} 
          className="mt-3 inline-block px-4 py-2 rounded-md text-sm font-medium text-white"
          style={{ backgroundColor: character.glowColor }}
          aria-label={`See ${character.service} details`}
        >
          See {character.service}
        </Link>
      </motion.div>
    </div>
  );
};

export default CharacterCard;
