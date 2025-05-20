
import React, { useState } from 'react';
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

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

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
        <HeroSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        
        {/* Featured Character */}
        <FeaturedCharacterSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* How It Works */}
        <HowItWorksSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        
        {/* Character Feature Section */}
        <CharacterFeatureSection />
        
        {/* Testimonial/Stats Section */}
        <StatsSection />
        
        {/* CTA Section */}
        <CtaSection onOpenQuestionnaire={handleOpenQuestionnaire} />
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
