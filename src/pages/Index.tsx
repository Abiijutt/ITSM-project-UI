
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import QuestionnaireWizard from '@/components/QuestionnaireWizard';
import RickshawBot from '@/components/RickshawBot';

// Import only the essential sections for a cleaner design
import ServicesSection from '@/components/sections/ServicesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import StatsSection from '@/components/sections/StatsSection';
import CtaSection from '@/components/sections/CtaSection';

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
        {/* Hero Section - Now cleaner and more professional */}
        <HeroSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        
        {/* Services Section - Core offering */}
        <section className="py-20 bg-white">
          <ServicesSection />
        </section>
        
        {/* How It Works Section - Clear process */}
        <section className="py-20 bg-gray-50">
          <HowItWorksSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        </section>
        
        {/* Stats Section - Social proof */}
        <section className="py-20 bg-white">
          <StatsSection />
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <CtaSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        </section>
      </main>
      
      <Footer />
      
      {/* Floating Rickshaw Bot - Single clean widget */}
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
