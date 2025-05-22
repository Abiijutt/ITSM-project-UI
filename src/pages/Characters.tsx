
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterHero from '@/components/sections/CharacterHero';
import CharacterList from '@/components/sections/CharacterList';
import CharacterTeam from '@/components/sections/CharacterTeam';
import CharacterCta from '@/components/sections/CharacterCta';
import '../styles/character-animations.css';
import { Link } from 'react-router-dom';
import { useColorShift } from '@/hooks/useColorShift';

const Characters = () => {
  const accentColor = useColorShift();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <CharacterHero />
        <CharacterList />
        <CharacterTeam />
        <CharacterCta />
        
        {/* Link to See How It Works Page */}
        <div className="text-center py-10 bg-black">
          <Link
            to="/see-how-it-works"
            className="inline-block px-6 py-3 rounded-lg text-lg font-bold transition-all hover:scale-105"
            style={{ backgroundColor: accentColor }}
          >
            See Team in Action
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
