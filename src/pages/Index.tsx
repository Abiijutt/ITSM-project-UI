
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import QuestionnaireWizard from '@/components/QuestionnaireWizard';
import RickshawBot from '@/components/RickshawBot';

// Import refactored section components
import FeaturedCharacterSection from '@/components/sections/FeaturedCharacterSection';
import ServicesSection from '@/components/sections/ServicesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
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
        {/* Hero Section */}
        <HeroSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        
        {/* Featured Character with optimized spacing */}
        <div className="mt-16 lg:mt-20">
          <FeaturedCharacterSection />
        </div>
        
        {/* Services Section */}
        <div className="mt-16 lg:mt-20">
          <ServicesSection />
        </div>
        
        {/* How It Works Section */}
        <div className="mt-16 lg:mt-20">
          <HowItWorksSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        </div>
        
        {/* Character Feature Section */}
        <div className="mt-16 lg:mt-20">
          <CharacterFeatureSection />
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 lg:mt-20">
          <StatsSection />
        </div>
        
        {/* Embrace Technology Section */}
        <div className="mt-16 lg:mt-20">
          <EmbraceSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        </div>
        
        {/* CTA Section */}
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
