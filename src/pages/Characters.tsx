
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterHero from '@/components/sections/CharacterHero';
import CharacterList from '@/components/sections/CharacterList';
import CharacterTeam from '@/components/sections/CharacterTeam';
import CharacterCta from '@/components/sections/CharacterCta';
import '../styles/character-animations.css';
import '../styles/animation-effects.css';
import { Link } from 'react-router-dom';
import { useColorShift } from '@/hooks/useColorShift';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap } from 'lucide-react';

const Characters = () => {
  const accentColor = useColorShift();
  const [showMagicalIntro, setShowMagicalIntro] = useState(true);
  
  useEffect(() => {
    // Hide magical intro after animation completes
    const timer = setTimeout(() => {
      setShowMagicalIntro(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Magical Portal Entrance Effect */}
      {showMagicalIntro && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          onAnimationComplete={() => setShowMagicalIntro(false)}
        >
          <div className="relative">
            {/* Central magical portal */}
            <motion.div
              className="w-64 h-64 rounded-full relative"
              style={{
                background: `radial-gradient(circle, ${accentColor}80, ${accentColor}40, transparent)`,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1.5, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Portal rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2"
                  style={{ 
                    borderColor: accentColor,
                    borderStyle: 'dashed'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1 + (i * 0.3), 1 + (i * 0.3)],
                    opacity: [0, 1, 0],
                    rotate: [0, 360 * (i + 1)]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Magical sparkles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const radius = 150;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      color: accentColor
                    }}
                    initial={{ 
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 0
                    }}
                    animate={{
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + (i * 0.1),
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles size={16 + (i % 3) * 4} />
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Portal text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <motion.h2
                  className="text-3xl font-bold mb-2"
                  style={{ color: accentColor }}
                  animate={{
                    textShadow: [
                      `0 0 10px ${accentColor}`,
                      `0 0 30px ${accentColor}`,
                      `0 0 10px ${accentColor}`
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  SUMMONING
                </motion.h2>
                <motion.p
                  className="text-white text-lg"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  The AI Super Team
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
      
      <Header />
      
      <main className="flex-grow">
        {/* Enhanced magical entrance wrapper for all sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: showMagicalIntro ? 3 : 0 }}
        >
          {/* Character Hero with enhanced magical effects */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: showMagicalIntro ? 3.2 : 0.2 }}
          >
            <CharacterHero />
          </motion.div>
          
          {/* Character List with staggered magical entrances */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: showMagicalIntro ? 3.4 : 0.4 }}
            className="wizard-entrance-container"
          >
            <CharacterList />
          </motion.div>
          
          {/* Character Team with portal effects */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: showMagicalIntro ? 3.6 : 0.6 }}
          >
            <CharacterTeam />
          </motion.div>
          
          {/* Character CTA with enhanced sparkle effects */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: showMagicalIntro ? 3.8 : 0.8 }}
          >
            <CharacterCta />
          </motion.div>
        </motion.div>
        
        {/* Enhanced Link to See How It Works Page */}
        <div className="text-center py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Magical background effects */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400 opacity-30"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.5, 0.1]
                }}
                transition={{
                  duration: 4 + (i % 3),
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Star size={12 + (i % 3) * 4} />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10">
            <motion.h3
              className="text-3xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to See the <span style={{ color: accentColor }}>Magic</span> in Action?
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                to="/see-how-it-works"
                className="group relative inline-block px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 overflow-hidden"
                style={{ backgroundColor: accentColor }}
              >
                {/* Button background effects */}
                <motion.div
                  className="absolute inset-0 opacity-30"
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
                
                {/* Sparkle effects on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white"
                      style={{
                        left: `${10 + (i * 15)}%`,
                        top: `${20 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Zap size={12} />
                    </motion.div>
                  ))}
                </div>
                
                <span className="relative z-10 flex items-center">
                  See Team in Magical Action
                  <motion.span
                    className="ml-2"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    ✨
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
