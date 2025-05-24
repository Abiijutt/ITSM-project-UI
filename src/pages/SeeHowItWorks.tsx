
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { motion } from 'framer-motion';
import { characters } from '@/lib/characterData';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeeHowItWorks = () => {
  const accentColor = useColorShift();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg, ${accentColor}20, transparent, ${accentColor}10)`
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="font-black text-4xl md:text-6xl lg:text-8xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="block"
              style={{ color: accentColor }}
              animate={{
                textShadow: [
                  `0 0 20px ${accentColor}`,
                  `0 0 40px ${accentColor}`,
                  `0 0 20px ${accentColor}`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Meet Your
            </motion.span>
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              AI SUPER TEAM
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Seven specialized AI warriors working in perfect harmony to build your brand from scratch.
          </motion.p>
        </div>
      </section>
      
      {/* Character Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-gray-700/80 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <motion.div 
                    className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"
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
                  />
                  <img 
                    src={character.imagePath} 
                    alt={character.name} 
                    className="w-full h-full object-contain z-10 relative group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {character.name}
                </h3>
                <p className="text-base mb-3 font-medium" style={{ color: character.glowColor }}>
                  {character.service}
                </p>
                <p className="text-gray-400 text-sm italic mb-4">
                  "{character.funnyPhrase}"
                </p>
                <p className="text-gray-500 text-xs">
                  {character.phraseTranslation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-black">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-4xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to See Them <span style={{ color: accentColor }}>In Action?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get your instant quote and watch the magic happen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105"
              style={{ backgroundColor: accentColor }}
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SeeHowItWorks;
