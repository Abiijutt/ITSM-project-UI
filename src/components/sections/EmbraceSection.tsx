
import React from 'react';
import { useColorShift } from '@/hooks/useColorShift';
import AIWalaLogo from '@/components/AIWalaLogo';

interface EmbraceSectionProps {
  onOpenQuestionnaire: () => void;
}

const EmbraceSection: React.FC<EmbraceSectionProps> = ({
  onOpenQuestionnaire
}) => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Embracing Technology Early</h2>
          
          <div className="flex justify-center mb-12">
            <div className="w-64 h-64 relative">
              <AIWalaLogo className="absolute inset-0" size="medium" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-4 border-white/20 animate-spin-slow"></div>
              </div>
            </div>
          </div>
          
          <p className="text-xl mb-8 text-gray-300">
            AI WALA is pioneering the future of digital services. We adapt to emerging technologies 
            before they become mainstream, ensuring you're always ahead of the curve.
          </p>
          
          <p className="text-lg mb-12 text-gray-400">
            Join us in this technological revolution. Let AI WALA handle your digital presence
            while you focus on what truly matters - growing your business.
          </p>
          
          <button 
            className="px-8 py-4 rounded-lg text-lg font-medium animate-fade-in-up"
            style={{ backgroundColor: accentColor }}
            onClick={onOpenQuestionnaire}
          >
            Be Part of the Change
          </button>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" 
             style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
             style={{ background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)` }}></div>
      </div>
    </section>
  );
};

export default EmbraceSection;
