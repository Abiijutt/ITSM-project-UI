
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { characters } from '@/lib/characterData';
import { useColorShift } from '@/hooks/useColorShift';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeeHowItWorks = () => {
  const accentColor = useColorShift();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [showOrbit, setShowOrbit] = useState(false);
  
  // Auto-advance through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % characters.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png')] bg-no-repeat bg-center opacity-10"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text-animate">
                <span>See</span> <span>How</span> <span>It</span> <span style={{ color: accentColor }}>Works</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Witness our AI team in action - delivering extraordinary digital services with superhero efficiency
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Service Showcase Section */}
        <section className="py-12 px-4 relative bg-black">
          <div className="container mx-auto max-w-5xl">
            <div className="h-32 mb-16 relative">
              {characters.map((character, index) => (
                <motion.div
                  key={index}
                  className="absolute left-0 right-0 text-center service-rise"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: activeServiceIndex === index ? 1 : 0,
                    y: activeServiceIndex === index ? 0 : 30
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <div 
                    className="inline-flex items-center justify-center p-4 rounded-full mb-4"
                    style={{ backgroundColor: `${character.glowColor}30` }}
                  >
                    <Zap size={24} style={{ color: character.glowColor }} />
                  </div>
                  <h3 
                    className="text-3xl font-bold mb-2"
                    style={{ color: character.glowColor }}
                  >
                    {character.service}
                  </h3>
                  <p className="text-gray-400">{character.name} - {character.funnyPhrase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Formation - Avengers Style */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 -z-10">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-gradient-radial"></div>
            
            {/* Character glow effects */}
            {characters.map((character, index) => (
              <div
                key={index}
                className="absolute rounded-full blur-3xl opacity-20"
                style={{ 
                  backgroundColor: character.glowColor,
                  width: '280px',
                  height: '280px',
                  left: `${(index * 15) + 10}%`,
                  bottom: `${(index % 3) * 10 + 10}%`,
                  transition: 'all 0.5s ease'
                }}
              ></div>
            ))}
          </div>
          
          <div className="container mx-auto text-center mb-10">
            <motion.h2 
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Meet The <span style={{ color: accentColor }}>Avengers</span> of Digital Services
            </motion.h2>
          </div>
          
          <div className="container mx-auto max-w-6xl">
            {/* Avengers-style team formation */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Central character - hero position */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-30 character-element w-48 md:w-64"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 1 }}
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
                ></div>
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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
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
                ></div>
                <p 
                  className="text-base font-bold mt-2"
                  style={{ color: characters[0].glowColor }}
                >
                  {characters[0].name}
                </p>
              </motion.div>
              
              <motion.div
                className="absolute left-[25%] bottom-20 z-10 character-element w-32 md:w-40"
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
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
                ></div>
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
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
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
                ></div>
                <p 
                  className="text-base font-bold mt-2"
                  style={{ color: characters[1].glowColor }}
                >
                  {characters[1].name}
                </p>
              </motion.div>
              
              <motion.div
                className="absolute right-[25%] bottom-20 z-10 character-element w-32 md:w-40"
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
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
                ></div>
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
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
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
                ></div>
                <p 
                  className="text-xs font-bold mt-1"
                  style={{ color: characters[5].glowColor }}
                >
                  {characters[5].name}
                </p>
              </motion.div>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * i + 0.8, duration: 0.7 }}
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
        
        {/* Process Visualization */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">The AI Team Workflow</h2>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-12 left-10 right-10 h-0.5 bg-gray-700 z-0 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: 1, title: "Brief Collection", desc: "AI analyzes your needs" },
                  { step: 2, title: "Team Assembly", desc: "Right characters for the job" },
                  { step: 3, title: "Collaboration", desc: "Characters work together" },
                  { step: 4, title: "Delivery", desc: "Final assets provided" }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.7 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}60` }}
                    >
                      <span className="text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action - Punjabi Style */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-gray-800 bg-opacity-70 rounded-xl p-8 border"
              style={{ borderColor: accentColor }}
            >
              <h3 className="text-3xl font-bold mb-4" style={{ color: accentColor }}>
                "Paa Ji Je Nhi Samjhy Ty Call Krlaiye!"
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                (If you didn't understand brother, just give us a call!)
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-lg text-lg font-bold transition-all hover:scale-105"
                  style={{ backgroundColor: accentColor }}
                >
                  Contact Us Now
                </Link>
                <Link
                  to="/characters"
                  className="px-6 py-3 rounded-lg text-lg font-bold border-2 transition-all hover:bg-gray-700"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  Meet The Characters <ArrowRight className="inline ml-1" size={18} />
                </Link>
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
