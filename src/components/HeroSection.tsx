
import React, { useState, useEffect } from 'react';
import { useColorShift } from '@/hooks/useColorShift';

interface HeroSectionProps {
  onOpenQuestionnaire: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuestionnaire
}) => {
  const accentColor = useColorShift();
  const [typedText, setTypedText] = useState('');
  const fullText = "OOOAAAYYY !! MAIN KALA E VEKH LAWA GA";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout;
    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(typeNextCharacter, 100);
      } else {
        setIsTypingComplete(true);
      }
    };

    // Start typing after a brief delay
    const initialDelay = setTimeout(() => {
      typeNextCharacter();
    }, 500);
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(typingTimer);
    };
  }, []);

  return <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 z-0"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-repeat bg-center"></div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className={`font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tight ${isTypingComplete ? 'animate-bounce-in' : ''}`}>
            <span className="block mb-2">AI WALA</span>
            <span className="relative inline-block h-24 overflow-hidden" style={{
            color: accentColor
          }}>
              <span className="pop">{typedText}</span>
              <span className={`absolute bottom-0 right-0 h-full w-1 bg-aiwala-accent ${isTypingComplete ? 'opacity-0' : 'animate-pulse'}`}></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            Your zero-human, fully automated AI digital agency that delivers branding, web, social, and video—all through one rickshaw bot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
          animationDelay: '500ms'
        }}>
            <button className="btn-aiwala text-lg px-8 py-4" style={{
            backgroundColor: accentColor
          }} onClick={onOpenQuestionnaire}>
              Get Your Quote
            </button>
            
            <button className="px-8 py-4 bg-white text-lg border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-sm">
              See How it Works
            </button>
          </div>
          
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-gray-500 animate-fade-in-up" style={{
          animationDelay: '800ms'
        }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: accentColor
            }}></div>
              <span>100% Automated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: accentColor
            }}></div>
              <span>5-Step Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: accentColor
            }}></div>
              <span>Fixed Pricing</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shape */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-aiwala-accent bg-opacity-5 blur-3xl pointer-events-none"></div>
    </section>;
};

export default HeroSection;
