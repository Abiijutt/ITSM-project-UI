
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import QuestionnaireWizard from '@/components/QuestionnaireWizard';
import RickshawBot from '@/components/RickshawBot';

// Import refactored section components
import FeaturedCharacterSection from '@/components/sections/FeaturedCharacterSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CharacterTeam from '@/components/sections/CharacterTeam';
import CharacterFeatureSection from '@/components/sections/CharacterFeatureSection';
import StatsSection from '@/components/sections/StatsSection';
import CtaSection from '@/components/sections/CtaSection';
import EmbraceSection from '@/components/sections/EmbraceSection';

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  // Ensure page starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenQuestionnaire = () => {
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with optimized spacing */}
        <HeroSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        
        {/* Featured Character with reduced top margin */}
        <div className="mt-8 lg:mt-12">
          <FeaturedCharacterSection />
        </div>
        
        {/* Services Section with optimized spacing */}
        <div className="mt-12 lg:mt-16">
          <ServicesSection />
        </div>
        
        {/* Meet Our AI Team - Replacing How It Works */}
        <div className="mt-16 lg:mt-20">
          <CharacterTeam />
        </div>
        
        {/* Character Feature Section with optimized spacing */}
        <div className="mt-12 lg:mt-16">
          <CharacterFeatureSection />
        </div>
        
        {/* Stats Section with reduced spacing */}
        <div className="mt-12 lg:mt-16">
          <StatsSection />
        </div>
        
        {/* Embrace Technology Section with optimized spacing */}
        <div className="mt-12 lg:mt-16">
          <EmbraceSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        </div>
        
        {/* CTA Section with final spacing */}
        <div className="mt-16 lg:mt-20">
          <CtaSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        </div>
      </main>
      
      <Footer />
      
      {/* Floating Rickshaw Bot */}
      <RickshawBot onOpenQuestionnaire={handleOpenQuestionnaire} />
      
      {/* Questionnaire Modal */}
      <QuestionnaireWizard 
        isOpen={isQuestionnaireOpen} 
        onClose={handleCloseQuestionnaire} 
      />
    </div>
  );
};

export default Index;
