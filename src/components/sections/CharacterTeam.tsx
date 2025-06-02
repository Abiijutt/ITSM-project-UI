
import React from 'react';
import { motion } from 'framer-motion';
import { characters } from '@/lib/characterData';
import { useColorShift } from '@/hooks/useColorShift';

const CharacterTeam = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden perspective-container" aria-labelledby="team-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              id="team-heading" 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 text-3d-effect"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Meet Our <span style={{ color: accentColor }}>AI Super Team</span>
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our specialized AI warriors work together seamlessly to deliver exceptional digital services—without any human intervention.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {characters.map((character, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center group hover-3d-lift glass-3d character-3d-entrance transition-all duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative w-24 lg:w-28 h-24 lg:h-28 mx-auto mb-3 lg:mb-4 perspective-container">
                  {/* 3D Glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-float3d layer-3d-1"
                    style={{ backgroundColor: character.glowColor }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    aria-hidden="true"
                  />
                  <div className="card-3d layer-3d-2">
                    <img 
                      src={character.imagePath} 
                      alt={character.name} 
                      className={`w-full h-full object-contain z-10 relative ${character.animationClass} group-hover:scale-110 transition-transform duration-300 animate-float3d`}
                      loading="lazy"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </div>
                </div>
                
                <div className="layer-3d-3">
                  <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-white group-hover:text-white transition-colors">
                    {character.name}
                  </h3>
                  <p className="text-sm lg:text-base mb-2 lg:mb-3 font-medium transition-colors" style={{ color: character.glowColor }}>
                    {character.service}
                  </p>
                  <p className="text-gray-400 text-xs lg:text-sm italic group-hover:text-gray-300 transition-colors">
                    "{character.funnyPhrase}"
                  </p>
                </div>
                
                {/* Enhanced 3D hover sparkle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-spin3d layer-3d-4"
                      style={{
                        left: `${15 + (i * 15)}%`,
                        top: `${25 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotateX: [0, 360, 720],
                        rotateY: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced 3D Call to action */}
          <motion.div
            className="text-center mt-12 lg:mt-16 perspective-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg lg:text-xl text-gray-300 mb-6 animate-float3d">
              Ready to see these warriors in action?
            </p>
            <motion.button
              className="px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-lg font-bold transition-all relative overflow-hidden button-3d"
              style={{ backgroundColor: accentColor }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                translateZ: 20
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 layer-3d-2">Explore Characters</span>
              <motion.div
                className="absolute inset-0 opacity-30 layer-3d-1"
                animate={{
                  background: [
                    `linear-gradient(45deg, ${accentColor}, transparent)`,
                    `linear-gradient(45deg, transparent, ${accentColor})`,
                    `linear-gradient(45deg, ${accentColor}, transparent)`
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced 3D Background decoration */}
      <div className="absolute -bottom-32 left-0 w-full h-64 bg-gradient-to-t from-transparent to-black opacity-50 animate-morph3d" aria-hidden="true"></div>
      
      {/* 3D Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-cube3d"></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-15 animate-spin3d"></div>
    </section>
  );
};

export default CharacterTeam;
