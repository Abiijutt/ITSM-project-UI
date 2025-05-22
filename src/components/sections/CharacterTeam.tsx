
import React from 'react';
import { motion } from 'framer-motion';
import { characters } from '@/lib/characterData';

const CharacterTeam = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" aria-labelledby="team-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="team-heading" className="text-4xl font-bold text-white mb-6">Meet The AI Team</h2>
            <p className="text-xl text-gray-300">
              Our warriors work together seamlessly to deliver exceptional digital services—without any human intervention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <div 
                    className="absolute inset-0 rounded-full opacity-40"
                    style={{ backgroundColor: character.glowColor }}
                    aria-hidden="true"
                  ></div>
                  <img 
                    src={character.imagePath} 
                    alt={character.name} 
                    className={`w-full h-full object-contain z-10 relative ${character.animationClass}`}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">
                  {character.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: character.glowColor }}>
                  {character.service}
                </p>
                <p className="text-gray-400 text-xs italic">
                  "{character.funnyPhrase}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-32 left-0 w-full h-64 bg-gradient-to-t from-transparent to-black opacity-50" aria-hidden="true"></div>
    </section>
  );
};

export default CharacterTeam;
