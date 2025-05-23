
import React, { useState, useEffect } from 'react';
import { useColorShift } from '@/hooks/useColorShift';
import AIWalaLogo from './AIWalaLogo';
import ServiceOrbit from './ServiceOrbit';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
  const [isOrbitOpen, setIsOrbitOpen] = useState(false);

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

  const handleOpenOrbit = () => {
    setIsOrbitOpen(true);
  };

  const handleCloseOrbit = () => {
    setIsOrbitOpen(false);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 z-0"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-repeat bg-center"></div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <AIWalaLogo size="large" />
          </div>
          
          <h1 className={`font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight ${isTypingComplete ? 'animate-bounce-in' : ''}`}>
            <span className="relative inline-block h-24 overflow-hidden" style={{
              color: accentColor
            }}>
              <span className="pop">{typedText}</span>
              <span className={`absolute bottom-0 right-0 h-full w-1 bg-aiwala-accent ${isTypingComplete ? 'opacity-0' : 'animate-pulse'}`}></span>
            </span>
          </h1>
          
          {/* Enhanced Dynamic Punjabi Text */}
          <motion.div
            className="relative my-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 relative z-10"
              style={{ 
                background: `linear-gradient(45deg, ${accentColor}, #ff6b6b, #4ecdc4, ${accentColor})`,
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  rotateX: [0, 10, 0],
                  rotateY: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  textShadow: `2px 2px 10px ${accentColor}40`
                }}
              >
                "OOOAAAYYY !! MAIN KALA E VEKH LAWA GA"
              </motion.span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              (Oh yes! I will definitely see and show you the magic!)
            </motion.p>
            
            {/* Floating sparkles around the text */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400"
                style={{
                  left: `${10 + (i * 15)}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles size={16 + (i % 3) * 4} />
              </motion.div>
            ))}
          </motion.div>
          
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
            
            <button 
              className="px-8 py-4 bg-white text-lg border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-sm"
              onClick={handleOpenOrbit}
            >
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
      
      {/* Service Orbit */}
      <ServiceOrbit isOpen={isOrbitOpen} onClose={handleCloseOrbit} />
    </section>
  );
};

export default HeroSection;
