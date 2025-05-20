
import React from 'react';
import { useColorShift } from '@/hooks/useColorShift';

interface HowItWorksSectionProps {
  onOpenQuestionnaire: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenQuestionnaire
}) => {
  const accentColor = useColorShift();
  
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 5-step process makes getting world-class digital services easier than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { 
              step: 1, 
              title: "Business Info", 
              description: "Tell us who you are and what industry you're in." 
            },
            { 
              step: 2, 
              title: "Revenue Range", 
              description: "Select your business size for tailored solutions." 
            },
            { 
              step: 3, 
              title: "Competitors", 
              description: "Share competitor websites for AI analysis." 
            },
            { 
              step: 4, 
              title: "Reference Images", 
              description: "Upload visuals that inspire you." 
            },
            { 
              step: 5, 
              title: "Choose Services", 
              description: "Select what you need and get an instant quote." 
            }
          ].map((item, index) => (
            <div key={item.step} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div 
                className="flex items-center justify-center w-16 h-16 rounded-full text-white text-2xl font-bold mb-4 mx-auto shadow-lg" 
                style={{ backgroundColor: accentColor }}
              >
                {item.step}
              </div>
              
              {index < 4 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(50%-32px)] h-[2px] bg-gray-300"></div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-center text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            className="btn-aiwala text-lg px-8 py-4 animate-fade-in-up"
            style={{ backgroundColor: accentColor, animationDelay: '600ms' }}
            onClick={onOpenQuestionnaire}
          >
            Start Your Project Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
