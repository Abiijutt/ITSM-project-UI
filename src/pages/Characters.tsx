
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterParallax from '@/components/CharacterParallax';
import { useColorShift } from '@/hooks/useColorShift';
import { Axe } from 'lucide-react';  
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceData } from '@/lib/serviceData';

interface CharacterWithService {
  imagePath: string;
  name: string;
  altText: string;
  glowColor: string;
  position: "left" | "right" | "center";
  service: string;
  funnyPhrase: string;
  phraseTranslation: string;
  serviceId: string;
}

const Characters = () => {
  const accentColor = useColorShift();

  // Character data with service assignments and Punjabi phrases
  const characters: CharacterWithService[] = [
    {
      imagePath: "/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png",
      name: "Neela Yoddha",
      altText: "Cyborg Warrior with Blue Outfit and Axe",
      glowColor: "rgba(0, 162, 255, 0.6)",
      position: "left",
      service: "Website & UX Design",
      funnyPhrase: "Tainu pata hai? Meinu code likhna bahut pasand hai!",
      phraseTranslation: "(Do you know? I love writing code!)",
      serviceId: "web-ux"
    },
    {
      imagePath: "/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png",
      name: "Laal Singh",
      altText: "Cyborg Warrior with Red Outfit and Axe",
      glowColor: "rgba(162, 60, 20, 0.6)",
      position: "right",
      service: "Video Production",
      funnyPhrase: "Oi! Video banaan vich meri koi jod nahi!",
      phraseTranslation: "(Hey! Nobody can match me in making videos!)",
      serviceId: "video-ads"
    },
    {
      imagePath: "/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png",
      name: "Kesri Jawan",
      altText: "Cyborg Warrior with Orange Turban and Axe",
      glowColor: "rgba(255, 165, 0, 0.6)",
      position: "center",
      service: "Branding & Identity",
      funnyPhrase: "Brands ta mere haath da khel hai, paaji!",
      phraseTranslation: "(Brands are just child's play for me, brother!)",
      serviceId: "branding"
    },
    {
      imagePath: "/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png",
      name: "Jaamani Kaur",
      altText: "Cyborg Warrior with Red Turban and Glowing Purple Axe",
      glowColor: "rgba(170, 0, 255, 0.6)",
      position: "left",
      service: "Social Media Content",
      funnyPhrase: "Oye hoye! Viral hona mera kaam hai!",
      phraseTranslation: "(Oh wow! Going viral is my job!)",
      serviceId: "social"
    },
    {
      imagePath: "/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png",
      name: "Hara Sher",
      altText: "Cyborg Warrior with Green Turban and Glowing Green Axe",
      glowColor: "rgba(0, 255, 85, 0.6)",
      position: "right",
      service: "3D Bot Creation",
      funnyPhrase: "Main ta 3D vich jeena shuru kar ditta!",
      phraseTranslation: "(I've started living in 3D!)",
      serviceId: "3d-bot"
    },
    {
      imagePath: "/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png",
      name: "Hara Beta",
      altText: "Cyborg Warrior with Green Outfit Standing",
      glowColor: "rgba(0, 128, 85, 0.6)",
      position: "center",
      service: "AI Copywriting",
      funnyPhrase: "Meri kalam ton likhe shabd, dil nu tuhnde!",
      phraseTranslation: "(The words from my pen touch the heart!)",
      serviceId: "ai-copy"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI WALA <span style={{ color: accentColor }} className="block mt-2">Characters</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Meet our cyborg warriors, the embodiment of human-AI fusion technology.
                Each character specializes in a specific digital service.
              </p>
              
              <div className="flex justify-center animate-bounce">
                <Axe size={48} style={{ color: accentColor }} className="animate-pulse" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Characters Section with Parallax */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">The Warriors</h2>
            
            <div className="space-y-32">
              {characters.map((character, index) => (
                <div key={index} className="relative">
                  <CharacterParallax 
                    imagePath={character.imagePath}
                    altText={character.altText}
                    position={character.position}
                    size="large"
                    glowColor={character.glowColor}
                    animationDelay={index * 300}
                  />
                  
                  <motion.div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-24 bg-gray-900 p-4 rounded-lg shadow-lg text-center border-2 max-w-md"
                    style={{ borderColor: character.glowColor }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-1" style={{ color: character.glowColor }}>
                      {character.name}
                    </h3>
                    <p className="text-white font-medium mb-2">
                      Service: {character.service}
                    </p>
                    <p className="text-white italic mb-1 text-lg">
                      "{character.funnyPhrase}"
                    </p>
                    <p className="text-gray-400 text-sm">
                      {character.phraseTranslation}
                    </p>
                    
                    <Link 
                      to={`/services/${character.serviceId}`} 
                      className="mt-3 inline-block px-4 py-2 rounded-md text-sm font-medium text-white"
                      style={{ backgroundColor: character.glowColor }}
                    >
                      See {character.service}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Meet The AI Team</h2>
                <p className="text-xl text-gray-300">
                  Our warriors work together seamlessly to deliver exceptional digital services—without any human intervention.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {characters.map((character, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 rounded-xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative w-28 h-28 mx-auto mb-4">
                      <div 
                        className="absolute inset-0 rounded-full opacity-40"
                        style={{ backgroundColor: character.glowColor }}
                      ></div>
                      <img 
                        src={character.imagePath} 
                        alt={character.name} 
                        className="w-full h-full object-contain z-10 relative"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-white">
                      {character.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: character.glowColor }}>
                      {character.service}
                    </p>
                    <p className="text-gray-400 text-xs italic">
                      "{character.funnyPhrase}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -bottom-32 left-0 w-full h-64 bg-gradient-to-t from-transparent to-black opacity-50"></div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <ScrollZoom threshold={0.3}>
              <h2 className="text-4xl font-bold mb-6">Want to see our warriors in action?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our AI team handle your digital needs. No humans, just pure AI power!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link 
                  to="/how-it-works" 
                  className="px-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: accentColor }}
                >
                  See How It Works
                </Link>
                
                <Link 
                  to="/services" 
                  className="px-8 py-4 rounded-lg font-bold text-lg border-2 shadow-lg hover:shadow-xl transition-all"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  Explore Our Services
                </Link>
              </div>
            </ScrollZoom>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
