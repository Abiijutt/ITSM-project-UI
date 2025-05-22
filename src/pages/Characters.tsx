
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterHero from '@/components/sections/CharacterHero';
import CharacterList from '@/components/sections/CharacterList';
import CharacterTeam from '@/components/sections/CharacterTeam';
import CharacterCta from '@/components/sections/CharacterCta';
import '../styles/character-animations.css';

const Characters = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <CharacterHero />
        <CharacterList />
        <CharacterTeam />
        <CharacterCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
