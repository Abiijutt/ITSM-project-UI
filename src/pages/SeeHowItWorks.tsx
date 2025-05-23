
import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { characters } from '@/lib/characterData';
import { useColorShift } from '@/hooks/useColorShift';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Zap, Star, Sparkles, CheckCircle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/character-animations.css';
import '../styles/glow-effects.css';

// Define the brand journey steps
const brandJourneySteps = [
  {
    phase: "Discovery",
    icon: <Zap className="mb-2" size={32} />,
    description: "Understanding your brand's vision and goals",
    character: characters[5], // Channa Miyan
  },
  {
    phase: "Strategy",
    icon: <Star className="mb-2" size={32} />,
    description: "Developing the perfect approach for your brand",
    character: characters[3], // Guddi Rani
  },
  {
    phase: "Creation",
    icon: <Sparkles className="mb-2" size={32} />,
    description: "Crafting your brand identity and assets",
    character: characters[2], // Paa Ji Soorma
  },
  {
    phase: "Implementation",
    icon: <CheckCircle className="mb-2" size={32} />,
    description: "Building your digital presence",
    character: characters[0], // Babbu Chaudhry
  },
  {
    phase: "Growth",
    icon: <Rocket className="mb-2" size={32} />,
    description: "Expanding your reach and visibility",
    character: characters[1], // Tufail Jutt
  }
];

const SeeHowItWorks = () => {
  const accentColor = useColorShift();
  const [activeStep, setActiveStep] = useState(0);
  const [showTeam, setShowTeam] = useState(false);
  const [visibleCharacters, setVisibleCharacters] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll to activate timeline steps
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineTop = timelineRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Calculate which step should be active based on scroll position
        if (timelineTop < windowHeight * 0.8) {
          const scrollPosition = window.scrollY;
          const timelineHeight = timelineRef.current.offsetHeight;
          const stepHeight = timelineHeight / brandJourneySteps.length;
          const currentStep = Math.min(
            Math.floor((scrollPosition - timelineTop + windowHeight * 0.8) / stepHeight),
            brandJourneySteps.length - 1
          );
          
          if (currentStep >= 0 && currentStep !== activeStep) {
            setActiveStep(currentStep);
            // Add the current character to visible characters if not already there
            setVisibleCharacters(prev => 
              prev.includes(currentStep) ? prev : [...prev, currentStep]
            );
          }
          
          // Show team assembly when we reach the end of the timeline
          if (currentStep >= brandJourneySteps.length - 1) {
            setTimeout(() => {
              setShowTeam(true);
            }, 1000);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);
  
  // Auto progress through the timeline for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => {
        const nextStep = (prev + 1) % brandJourneySteps.length;
        
        // Add the character to visible characters
        setVisibleCharacters(prevChars => 
          prevChars.includes(nextStep) ? prevChars : [...prevChars, nextStep]
        );
        
        // Show team assembly when we reach the end
        if (nextStep === brandJourneySteps.length - 1) {
          setTimeout(() => {
            setShowTeam(true);
          }, 1000);
        }
        
        return nextStep;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Magical Introduction */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-radial"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png')] bg-no-repeat bg-center bg-contain opacity-10"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative mb-6">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold hero-text-animate inline-block"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >The</motion.span>{" "}
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >Brand</motion.span>{" "}
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >Building</motion.span>{" "}
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    style={{ color: accentColor }}
                    className="relative"
                  >
                    Journey
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent w-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 0.8 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </motion.span>
                </motion.h1>
                
                <motion.div 
                  className="absolute -top-10 -right-10 w-32 h-32 text-yellow-400 opacity-70"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 0.7 }}
                  transition={{ duration: 1, delay: 1.7, type: "spring" }}
                >
                  <Sparkles size={32} className="absolute top-0 right-0" />
                  <Sparkles size={24} className="absolute top-12 right-12" />
                  <Sparkles size={18} className="absolute top-20 right-6" />
                </motion.div>
              </div>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                Witness our superhero AI team transform your brand through a magical journey
                of discovery, strategy, creation, implementation and growth.
              </motion.p>
              
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <Link to="#brand-journey" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold flex items-center space-x-2 hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
                  <span>Begin the Journey</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="relative h-64 md:h-96"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32 md:w-48 md:h-48">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: `${accentColor}30` }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.9, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <motion.img 
                      src={characters[2].imagePath} 
                      alt="Main Character" 
                      className="w-3/4 h-3/4 object-contain"
                      style={{ filter: `drop-shadow(0 0 10px ${characters[2].glowColor})` }}
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Orbiting characters */}
              {characters.slice(0, 5).map((character, i) => {
                if (i === 2) return null; // Skip the center character
                const angle = (i * (360 / 4)) % 360;
                const delay = i * 0.2;
                const radius = 160;
                
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 w-16 h-16 md:w-24 md:h-24"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ 
                      x: x, 
                      y: y, 
                      opacity: 1, 
                      scale: 1,
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 20,
                      delay: 2.5 + delay,
                      repeat: Infinity,
                      repeatType: "loop",
                      type: "tween",
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gray-800 bg-opacity-50 flex items-center justify-center p-1 shadow-lg">
                      <img 
                        src={character.imagePath} 
                        alt={character.name} 
                        className="w-full h-full object-contain"
                        style={{ filter: `drop-shadow(0 0 5px ${character.glowColor})` }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
        
        {/* Brand Journey Timeline Section */}
        <section id="brand-journey" className="py-20 px-4 relative" ref={timelineRef}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                The Brand Building <span style={{ color: accentColor }}>Journey</span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Follow the magical transformation of your brand through our superhero team's expertise
              </motion.p>
            </div>
            
            {/* Timeline Steps */}
            <div className="relative mt-20">
              {/* Timeline connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700">
                <motion.div 
                  className="absolute top-0 w-full bg-gradient-to-b"
                  style={{ 
                    background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
                    height: `${((activeStep + 1) / brandJourneySteps.length) * 100}%`
                  }}
                />
              </div>
              
              {/* Timeline steps */}
              {brandJourneySteps.map((step, index) => {
                const isActive = activeStep >= index;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative mb-24">
                    <div 
                      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    >
                      {/* Timeline dot */}
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10"
                        style={{ 
                          backgroundColor: isActive ? step.character.glowColor : 'gray',
                          boxShadow: isActive ? `0 0 15px ${step.character.glowColor}` : 'none'
                        }}
                        animate={isActive ? {
                          scale: [1, 1.3, 1],
                        } : {}}
                        transition={{ 
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      />
                      
                      {/* Step content */}
                      <div className="w-full md:w-1/2 mb-6 md:mb-0 px-6">
                        <motion.div 
                          className={`bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg ${isActive ? 'border' : ''}`}
                          style={{ borderColor: isActive ? step.character.glowColor : 'transparent' }}
                          initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        >
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0"
                            style={{ backgroundColor: `${step.character.glowColor}30` }}
                          >
                            <div style={{ color: step.character.glowColor }}>
                              {step.icon}
                            </div>
                          </div>
                          <h3 
                            className="text-2xl font-bold mb-2 text-center md:text-left"
                            style={{ color: isActive ? step.character.glowColor : 'white' }}
                          >
                            {step.phase}
                          </h3>
                          <p className="text-gray-300 text-center md:text-left">{step.description}</p>
                          
                          {/* Character quote */}
                          {isActive && (
                            <motion.div 
                              className="mt-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg border-l-4"
                              style={{ borderColor: step.character.glowColor }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            >
                              <p className="text-sm italic">"{step.character.funnyPhrase}"</p>
                              <p className="text-xs text-gray-400">{step.character.phraseTranslation}</p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Character visualization */}
                      <div className="w-full md:w-1/2 px-6 flex justify-center md:justify-start">
                        <AnimatePresence>
                          {isActive && (
                            <motion.div 
                              className="relative w-48 h-64"
                              initial={{ opacity: 0, y: 50, scale: 0.8 }}
                              animate={{ 
                                opacity: 1, 
                                y: 0, 
                                scale: 1,
                                transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 }
                              }}
                              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                            >
                              {/* Character image */}
                              <img 
                                src={step.character.imagePath} 
                                alt={step.character.name} 
                                className="w-full h-full object-contain z-10 relative character-entrance"
                                style={{ filter: `drop-shadow(0 0 15px ${step.character.glowColor})` }}
                              />
                              
                              {/* Service visualization */}
                              <motion.div 
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center z-20"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ 
                                  opacity: 1, 
                                  y: 0,
                                  transition: { delay: 0.8, duration: 0.5 }
                                }}
                              >
                                <div 
                                  className="inline-flex items-center justify-center p-4 rounded-full mb-2"
                                  style={{ backgroundColor: `${step.character.glowColor}40` }}
                                >
                                  <Zap size={20} style={{ color: step.character.glowColor }} />
                                </div>
                                <div 
                                  className="text-lg font-bold service-rise"
                                  style={{ color: step.character.glowColor }}
                                >
                                  {step.character.service}
                                </div>
                              </motion.div>
                              
                              {/* Glowing base */}
                              <motion.div 
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-6 rounded-full blur-xl"
                                style={{ backgroundColor: step.character.glowColor }}
                                animate={{ 
                                  opacity: [0.5, 0.8, 0.5],
                                  scale: [1, 1.2, 1]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }}
                              />
                              
                              {/* Character name */}
                              <motion.p 
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-bold text-center whitespace-nowrap"
                                style={{ color: step.character.glowColor }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                              >
                                {step.character.name}
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Team Assembly - Avengers Style */}
        <section className="py-24 px-4 relative bg-black">
          <div className="absolute inset-0 -z-10">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-gradient-radial"></div>
            
            {/* Character glow effects */}
            {characters.map((character, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full blur-3xl opacity-20"
                style={{ 
                  backgroundColor: character.glowColor,
                  width: '280px',
                  height: '280px',
                  left: `${(index * 15) + 10}%`,
                  bottom: `${(index % 3) * 10 + 10}%`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: showTeam ? 0.2 : 0,
                  scale: showTeam ? 1 : 0.5
                }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
              />
            ))}
          </div>
          
          <div className="container mx-auto text-center mb-10">
            <motion.h2 
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              The <span style={{ color: accentColor }}>Superhero</span> Team Assembly
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              When our AI characters join forces, they create an unstoppable team that delivers extraordinary results
            </motion.p>
          </div>
          
          <div className="container mx-auto max-w-6xl">
            {/* Avengers-style team formation */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Central character - hero position */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-30 character-element w-48 md:w-64"
                initial={{ opacity: 0, y: 100 }}
                animate={{ 
                  opacity: showTeam ? 1 : 0,
                  y: showTeam ? 0 : 100
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3
                }}
              >
                <img 
                  src={characters[2].imagePath} 
                  alt={characters[2].name} 
                  className="w-full h-auto"
                  style={{ filter: `drop-shadow(0 0 15px ${characters[2].glowColor})` }}
                />
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-6 rounded-full blur-xl"
                  style={{ backgroundColor: characters[2].glowColor }}
                />
                <p 
                  className="text-lg font-bold mt-2"
                  style={{ color: characters[2].glowColor }}
                >
                  {characters[2].name}
                </p>
              </motion.div>
              
              {/* Left side characters */}
              <motion.div
                className="absolute left-[10%] md:left-[15%] bottom-10 z-20 character-element w-36 md:w-48"
                initial={{ opacity: 0, x: -100 }}
                animate={{ 
                  opacity: showTeam ? 1 : 0,
                  x: showTeam ? 0 : -100
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.5
                }}
              >
                <img 
                  src={characters[0].imagePath} 
                  alt={characters[0].name} 
                  className="w-full h-auto"
                  style={{ filter: `drop-shadow(0 0 10px ${characters[0].glowColor})` }}
                />
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-4 rounded-full blur-lg"
                  style={{ backgroundColor: characters[0].glowColor }}
                />
                <p 
                  className="text-base font-bold mt-2"
                  style={{ color: characters[0].glowColor }}
                >
                  {characters[0].name}
                </p>
              </motion.div>
              
              <motion.div
                className="absolute left-[25%] bottom-20 z-10 character-element w-32 md:w-40"
                initial={{ opacity: 0, x: -80, y: 80 }}
                animate={{ 
                  opacity: showTeam ? 1 : 0,
                  x: showTeam ? 0 : -80,
                  y: showTeam ? 0 : 80
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.7
                }}
              >
                <img 
                  src={characters[3].imagePath} 
                  alt={characters[3].name} 
                  className="w-full h-auto"
                  style={{ filter: `drop-shadow(0 0 8px ${characters[3].glowColor})` }}
                />
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-3 rounded-full blur-lg"
                  style={{ backgroundColor: characters[3].glowColor }}
                />
                <p 
                  className="text-sm font-bold mt-2"
                  style={{ color: characters[3].glowColor }}
                >
                  {characters[3].name}
                </p>
              </motion.div>
              
              {/* Right side characters */}
              <motion.div
                className="absolute right-[10%] md:right-[15%] bottom-10 z-20 character-element w-36 md:w-48"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: showTeam ? 1 : 0,
                  x: showTeam ? 0 : 100
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.5
                }}
              >
                <img 
                  src={characters[1].imagePath} 
                  alt={characters[1].name} 
                  className="w-full h-auto"
                  style={{ filter: `drop-shadow(0 0 10px ${characters[1].glowColor})` }}
                />
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-4 rounded-full blur-lg"
                  style={{ backgroundColor: characters[1].glowColor }}
                />
                <p 
                  className="text-base font-bold mt-2"
                  style={{ color: characters[1].glowColor }}
                >
                  {characters[1].name}
                </p>
              </motion.div>
              
              <motion.div
                className="absolute right-[25%] bottom-20 z-10 character-element w-32 md:w-40"
                initial={{ opacity: 0, x: 80, y: 80 }}
                animate={{ 
                  opacity: showTeam ? 1 : 0,
                  x: showTeam ? 0 : 80,
                  y: showTeam ? 0 : 80
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.7
                }}
              >
                <img 
                  src={characters[4].imagePath} 
                  alt={characters[4].name} 
                  className="w-full h-auto"
                  style={{ filter: `drop-shadow(0 0 8px ${characters[4].glowColor})` }}
                />
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-3 rounded-full blur-lg"
                  style={{ backgroundColor: characters[4].glowColor }}
                />
                <p 
                  className="text-sm font-bold mt-2"
                  style={{ color: characters[4].glowColor }}
                >
                  {characters[4].name}
                </p>
              </motion.div>
              
              {/* Far back character */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-5 z-5 character-element w-28 md:w-36"
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: showTeam ? 0.8 : 0,
                  y: showTeam ? 0 : 40
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.9
                }}
              >
                <img 
                  src={characters[5].imagePath} 
                  alt={characters[5].name} 
                  className="w-full h-auto opacity-80"
                  style={{ filter: `drop-shadow(0 0 6px ${characters[5].glowColor})` }}
                />
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 rounded-full blur-md"
                  style={{ backgroundColor: characters[5].glowColor }}
                />
                <p 
                  className="text-xs font-bold mt-1"
                  style={{ color: characters[5].glowColor }}
                >
                  {characters[5].name}
                </p>
              </motion.div>
              
              {/* Energy connecting lines between characters */}
              {showTeam && characters.map((_, i) => {
                if (i === 2 || i > 4) return null; // Skip center character and extra characters
                
                // Connect to center character
                return (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute left-1/2 top-1/2 h-1 bg-gradient-to-r z-0"
                    style={{
                      width: i % 2 === 0 ? '25%' : '30%',
                      transformOrigin: i % 2 === 0 ? 'left center' : 'right center',
                      transform: `translate(-50%, -50%) rotate(${i % 2 === 0 ? -25 - (i * 10) : 25 + ((i-1) * 10)}deg)`,
                      background: `linear-gradient(to ${i % 2 === 0 ? 'left' : 'right'}, ${accentColor}, transparent)`,
                    }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.7, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 + (i * 0.1) }}
                  />
                );
              })}
              
              {/* Team power surge effect */}
              {showTeam && (
                <motion.div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${accentColor}50 0%, transparent 70%)` 
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.7, 0],
                    scale: [0, 1.5, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              )}
            </div>
          </div>
          
          {/* Team capabilities */}
          <div className="container mx-auto mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Shield className="mb-2" size={32} />,
                  title: "Team Synergy",
                  desc: "Our AI characters work together seamlessly, combining their unique abilities"
                },
                {
                  icon: <Star className="mb-2" size={32} />,
                  title: "Superhero Speed",
                  desc: "Deliver projects at superhuman speed with our AI-powered team"
                },
                {
                  icon: <Zap className="mb-2" size={32} />,
                  title: "Unlimited Power",
                  desc: "AI never tires, never sleeps, and delivers consistently perfect results"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i, duration: 0.7 }}
                >
                  <div className="flex justify-center" style={{ color: accentColor }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action - Punjabi Style */}
        <section className="py-16 px-4 bg-gradient-to-t from-gray-900 to-black">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-gray-800 bg-opacity-70 rounded-xl p-8 border relative overflow-hidden"
              style={{ borderColor: accentColor }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 text-yellow-400 opacity-30"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles size={80} />
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold mb-4 relative" 
                style={{ color: accentColor }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="relative inline-block">
                  "Paa Ji Je Nhi Samjhy Ty Call Krlaiye!"
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent w-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                (If you didn't understand brother, just give us a call!)
              </motion.p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 rounded-lg text-lg font-bold transition-all hover:scale-105 block"
                    style={{ backgroundColor: accentColor }}
                  >
                    Contact Us Now
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Link
                    to="/characters"
                    className="px-6 py-3 rounded-lg text-lg font-bold border-2 transition-all hover:bg-gray-700 block"
                    style={{ borderColor: accentColor, color: accentColor }}
                  >
                    Meet The Characters <ArrowRight className="inline ml-1" size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SeeHowItWorks;
