
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterHero from '@/components/sections/CharacterHero';
import CharacterTeam from '@/components/sections/CharacterTeam';
import CharacterFeatureSection from '@/components/sections/CharacterFeatureSection';
import CharacterCta from '@/components/sections/CharacterCta';
import MagicalPortalIntro from '@/components/MagicalPortalIntro';
import { useColorShift } from '@/hooks/useColorShift';

const Characters = () => {
  const [showMagicalIntro, setShowMagicalIntro] = useState(true);
  const accentColor = useColorShift();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMagicalIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setShowMagicalIntro(false);
  };

  return (
    <>
      <MagicalPortalIntro 
        showMagicalIntro={showMagicalIntro}
        accentColor={accentColor}
        onAnimationComplete={handleAnimationComplete}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Header />
        
        <main>
          <CharacterHero />
          <CharacterTeam />
          <CharacterFeatureSection />
          <CharacterCta />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Characters;
