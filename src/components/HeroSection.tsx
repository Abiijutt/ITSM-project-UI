
import React, { useState, useEffect } from 'react';
import { useColorShift } from '@/hooks/useColorShift';
import AIWalaLogo from './AIWalaLogo';
import ServiceOrbit from './ServiceOrbit';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 z-0"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-repeat bg-center"></div>
      
      <div className="container mx-auto px-4 z-10 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center mb-6 lg:mb-8">
            <AIWalaLogo size="large" />
          </div>
          
          {/* Fixed text visibility with proper container */}
          <div className="relative w-full max-w-3xl mx-auto overflow-visible">
            <h1 className={`font-display font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight ${isTypingComplete ? 'animate-bounce-in' : ''}`}>
              <span 
                className="relative inline-block min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center w-full" 
                style={{ color: accentColor }}
              >
                <span className="pop relative z-10">{typedText}</span>
                <span className={`absolute right-0 h-[80%] w-1 bg-aiwala-accent ${isTypingComplete ? 'opacity-0' : 'animate-pulse'}`}></span>
              </span>
            </h1>
          </div>
          
          {/* Enhanced Dynamic Punjabi Text with better spacing */}
          <motion.div
            className="relative my-6 lg:my-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black mb-3 lg:mb-4 relative z-10 leading-relaxed"
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
              className="text-sm lg:text-base text-gray-600 italic"
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
                className="absolute text-yellow-400 pointer-events-none"
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
                <Sparkles size={14 + (i % 3) * 3} />
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up leading-relaxed">
            Your zero-human, fully automated AI digital agency that delivers branding, web, social, and video—all through one rickshaw bot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center animate-fade-in-up pt-4 lg:pt-6" style={{
            animationDelay: '500ms'
          }}>
            <button className="btn-aiwala text-lg px-6 lg:px-8 py-3 lg:py-4" style={{
              backgroundColor: accentColor
            }} onClick={onOpenQuestionnaire}>
              Get Your Quote
            </button>
            
            {/* Infinity Gauntlet Button */}
            <Link 
              to="/characters"
              className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white text-lg rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span>See How it Works</span>
                
                {/* Infinity Stones */}
                <div className="flex gap-1">
                  {[
                    { color: '#ff6b6b', delay: 0 },    // Power (Red)
                    { color: '#4ecdc4', delay: 0.2 },  // Time (Green)
                    { color: '#45b7d1', delay: 0.4 },  // Space (Blue)
                    { color: '#feca57', delay: 0.6 },  // Mind (Yellow)
                    { color: '#ff9ff3', delay: 0.8 },  // Reality (Pink)
                    { color: '#96ceb4', delay: 1.0 }   // Soul (Orange/Green)
                  ].map((stone, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full relative"
                      style={{ backgroundColor: stone.color }}
                      animate={{
                        boxShadow: [
                          `0 0 5px ${stone.color}`,
                          `0 0 15px ${stone.color}, 0 0 25px ${stone.color}`,
                          `0 0 5px ${stone.color}`
                        ],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 2,
                        delay: stone.delay,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Gauntlet glow effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                    'linear-gradient(45deg, #45b7d1, #feca57)',
                    'linear-gradient(45deg, #ff9ff3, #96ceb4)',
                    'linear-gradient(45deg, #ff6b6b, #4ecdc4)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </Link>
          </div>
          
          <div className="pt-6 lg:pt-8 flex flex-wrap justify-center gap-6 lg:gap-8 text-gray-500 animate-fade-in-up" style={{
            animationDelay: '800ms'
          }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: accentColor
              }}></div>
              <span className="text-sm lg:text-base">100% Automated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: accentColor
              }}></div>
              <span className="text-sm lg:text-base">5-Step Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
                backgroundColor: accentColor
              }}></div>
              <span className="text-sm lg:text-base">Fixed Pricing</span>
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
