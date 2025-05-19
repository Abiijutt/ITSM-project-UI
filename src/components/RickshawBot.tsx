
import React, { useState, useEffect } from 'react';
import { useColorShift } from '@/hooks/useColorShift';
import { MessageCircle } from 'lucide-react';

interface RickshawBotProps {
  onOpenQuestionnaire: () => void;
}

const RickshawBot: React.FC<RickshawBotProps> = ({ onOpenQuestionnaire }) => {
  const accentColor = useColorShift();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Delay entrance for a better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onOpenQuestionnaire();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 flex flex-col items-center ${
        isAnimating ? 'animate-bounce-in' : ''
      }`}
    >
      <div 
        className="relative w-16 h-16 flex items-center justify-center rounded-full cursor-pointer shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
        style={{ backgroundColor: accentColor }}
        onClick={handleClick}
      >
        <MessageCircle className="text-white w-8 h-8" />
      </div>
      <div className="bg-white text-xs font-medium px-3 py-1 rounded-full shadow mt-2">
        Talk to AI WALA
      </div>
    </div>
  );
};

export default RickshawBot;
