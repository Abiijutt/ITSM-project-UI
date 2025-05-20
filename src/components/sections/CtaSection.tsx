
import React from 'react';

interface CtaSectionProps {
  onOpenQuestionnaire: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenQuestionnaire
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-aiwala-accent to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Get started with AI WALA today and watch our rickshaw-bot deliver results that would normally take an entire team.
        </p>
        
        <button 
          className="bg-white text-aiwala-accent text-lg font-medium px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg animate-bounce-in"
          onClick={onOpenQuestionnaire}
        >
          Get Your Quote Now
        </button>
      </div>
      
      {/* Background character */}
      <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4">
        <img 
          src="/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png" 
          alt="Silhouette of AI Warrior" 
          className="w-80 h-auto" 
        />
      </div>
    </section>
  );
};

export default CtaSection;
