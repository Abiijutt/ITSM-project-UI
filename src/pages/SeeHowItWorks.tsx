
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { characters } from '@/lib/characterData';
import { useColorShift } from '@/hooks/useColorShift';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/character-animations.css';

const SeeHowItWorks = () => {
  const accentColor = useColorShift();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  
  // Auto-advance through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % characters.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Service icons based on the character's service
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'website-ux':
        return <Zap size={32} />;
      case 'video-ad':
        return <ArrowRight size={32} />;
      case 'brand-package':
        return <Shield size={32} />;
      case 'social-content':
        return <Medal size={32} />;
      case '3d-rickshaw-bot':
        return <Zap size={32} />;
      case 'ai-copy':
        return <Medal size={32} />;
      default:
        return <Zap size={32} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-radial"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                See How It <span style={{ color: accentColor }}>Works</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our AI warriors work together as a team to deliver exceptional digital services
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Services Rising Animation Section */}
        <section className="py-12 px-4 text-white relative bg-gray-900">
          <div className="container mx-auto">
            <div className="relative h-40 mb-16">
              {characters.map((character, index) => (
                <motion.div
                  key={index}
                  className="absolute left-0 right-0 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: activeServiceIndex === index ? 1 : 0,
                    y: activeServiceIndex === index ? 0 : 50
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className="inline-flex items-center justify-center p-6 rounded-full mb-4"
                    style={{ backgroundColor: `${character.glowColor}30` }}
                  >
                    <span style={{ color: character.glowColor }}>
                      {getServiceIcon(character.serviceId)}
                    </span>
                  </div>
                  <h3 
                    className="text-3xl font-bold mb-2"
                    style={{ color: character.glowColor }}
                  >
                    {character.service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Formation Section */}
        <section className="py-20 px-4 text-white bg-black relative overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              The Avengers of Digital Services
            </h2>
            
            <div className="relative">
              {/* Team Background Effects */}
              <div className="absolute inset-0 -z-10">
                {characters.map((character, index) => (
                  <div
                    key={index}
                    className="absolute rounded-full blur-3xl opacity-20"
                    style={{ 
                      backgroundColor: character.glowColor,
                      width: '300px',
                      height: '300px',
                      left: `${(index * 15) + 10}%`,
                      top: `${(index % 2) * 20 + 30}%`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Character Team Formation */}
              <div className="flex flex-wrap justify-center items-end">
                {characters.map((character, index) => {
                  // Calculate position based on index
                  const positions = [
                    { scale: 1.2, order: 1, mt: "mt-0" }, // center-front
                    { scale: 1.0, order: 2, mt: "mt-12" }, // left side
                    { scale: 1.0, order: 3, mt: "mt-12" }, // right side
                    { scale: 0.9, order: 4, mt: "mt-20" }, // back left
                    { scale: 0.9, order: 5, mt: "mt-20" }, // back right
                    { scale: 0.85, order: 6, mt: "mt-24" }, // far back
                  ];
                  
                  const pos = positions[index % positions.length];
                  
                  return (
                    <motion.div
                      key={index}
                      className={`character-element relative px-2 ${pos.mt}`}
                      style={{ 
                        zIndex: 10 - pos.order,
                        order: pos.order,
                        flex: "0 0 auto",
                        width: `${pos.scale * 16}rem`,
                        maxWidth: "100%"
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      {/* Glow effect */}
                      <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 rounded-full blur-md"
                        style={{ backgroundColor: character.glowColor }}
                      ></div>
                      
                      {/* Character Image */}
                      <img 
                        src={character.imagePath} 
                        alt={character.name}
                        className="w-full h-auto object-contain relative z-10"
                        style={{ 
                          filter: `drop-shadow(0 0 10px ${character.glowColor}80)`,
                          transform: activeServiceIndex === index ? "scale(1.1)" : "scale(1)",
                          transition: "transform 0.5s ease"
                        }}
                      />
                      
                      {/* Character Name */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 text-center pb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      >
                        <h3 
                          className="text-lg font-bold"
                          style={{ color: character.glowColor }}
                        >
                          {character.name}
                        </h3>
                      </motion.div>
                      
                      {/* Service Tooltip on Hover */}
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-2 rounded-lg text-white text-sm transition-opacity duration-300 whitespace-nowrap">
                        {character.service}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action - Punjabi Style */}
        <section className="py-16 px-4 text-white bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 border-2"
              style={{ borderColor: accentColor }}
            >
              <h3 className="text-3xl font-bold mb-6" style={{ color: accentColor }}>
                "Paa Ji Je Nhi Samjhy Ty Call Krlaiye!"
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                (If you didn't understand brother, just give us a call!)
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 rounded-lg text-lg font-bold transition-all"
                  style={{ backgroundColor: accentColor }}
                >
                  Call Us Now
                </Link>
                <Link
                  to="/characters"
                  className="px-8 py-3 rounded-lg text-lg font-bold border-2 transition-all hover:bg-gray-700"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  Meet The Team
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
