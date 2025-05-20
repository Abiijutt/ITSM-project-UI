
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CharacterParallax from '@/components/CharacterParallax';
import { useColorShift } from '@/hooks/useColorShift';
import { axe } from 'lucide-react'; 

const Characters = () => {
  const accentColor = useColorShift();

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
              </p>
              
              <div className="flex justify-center animate-bounce">
                <axe size={48} style={{ color: accentColor }} className="animate-pulse" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Characters Section with Parallax */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">The Warriors</h2>
            
            <div className="space-y-32">
              <CharacterParallax 
                imagePath="/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png"
                altText="Cyborg Warrior with Blue Outfit and Axe"
                position="left"
                size="large"
                glowColor="rgba(0, 162, 255, 0.6)"
                animationDelay={0}
              />
              
              <CharacterParallax 
                imagePath="/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png"
                altText="Cyborg Warrior with Red Outfit and Axe"
                position="right"
                size="large"
                glowColor="rgba(162, 60, 20, 0.6)"
                animationDelay={300}
              />
              
              <CharacterParallax 
                imagePath="/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png"
                altText="Cyborg Warrior with Orange Turban and Axe"
                position="center"
                size="large"
                glowColor="rgba(255, 165, 0, 0.6)"
                animationDelay={600}
              />
              
              <CharacterParallax 
                imagePath="/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png"
                altText="Cyborg Warrior with Red Turban and Glowing Purple Axe"
                position="left"
                size="large"
                glowColor="rgba(170, 0, 255, 0.6)"
                animationDelay={900}
              />
              
              <CharacterParallax 
                imagePath="/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png"
                altText="Cyborg Warrior with Green Turban and Glowing Green Axe"
                position="right"
                size="large"
                glowColor="rgba(0, 255, 85, 0.6)"
                animationDelay={1200}
              />
              
              <CharacterParallax 
                imagePath="/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png"
                altText="Cyborg Warrior with Green Outfit Standing"
                position="center"
                size="large"
                glowColor="rgba(0, 128, 85, 0.6)"
                animationDelay={1500}
              />
            </div>
          </div>
        </section>
        
        {/* Parallax Zoom Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">Join Our Team</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI warriors are ready to transform your digital presence. 
                Each character represents a unique blend of human creativity and AI power.
              </p>
              
              <button 
                className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg transform transition-all hover:scale-105"
                style={{ backgroundColor: accentColor }}
              >
                Meet the Team
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
