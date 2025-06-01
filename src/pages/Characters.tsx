
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterHero from '@/components/sections/CharacterHero';
import CharacterList from '@/components/sections/CharacterList';
import CharacterTeam from '@/components/sections/CharacterTeam';
import CharacterCta from '@/components/sections/CharacterCta';
import MagicalPortalIntro from '@/components/MagicalPortalIntro';
import MagicalLinkSection from '@/components/MagicalLinkSection';
import { useColorShift } from '@/hooks/useColorShift';

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
      <MagicalPortalIntro
        showMagicalIntro={showMagicalIntro}
        accentColor={accentColor}
        onAnimationComplete={() => setShowMagicalIntro(false)}
      />
      
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
        <MagicalLinkSection accentColor={accentColor} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
