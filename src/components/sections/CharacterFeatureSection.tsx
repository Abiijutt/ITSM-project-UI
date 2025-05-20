
import React from 'react';
import { Link } from 'react-router-dom';
import CharacterParallax from '@/components/CharacterParallax';
import { useColorShift } from '@/hooks/useColorShift';

const CharacterFeatureSection = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <CharacterParallax 
              imagePath="/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png"
              altText="Cyborg Warrior with Purple Glowing Axe"
              position="center"
              size="medium"
              glowColor="rgba(170, 0, 255, 0.6)"
            />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Advanced AI</h2>
            <p className="text-lg mb-8">
              Our digital warriors represent the cutting-edge AI technologies we employ to deliver
              unparalleled digital services. Each warrior brings a unique set of skills:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-5 p-5 rounded-lg hover:bg-opacity-10 transition-all">
                <h3 className="text-xl font-medium mb-3" style={{ color: accentColor }}>Machine Learning</h3>
                <p className="text-gray-300">Adaptive algorithms that learn from every interaction to deliver ever-improving results.</p>
              </div>
              
              <div className="bg-white bg-opacity-5 p-5 rounded-lg hover:bg-opacity-10 transition-all">
                <h3 className="text-xl font-medium mb-3" style={{ color: accentColor }}>Natural Language Processing</h3>
                <p className="text-gray-300">Understanding and generating human language with remarkable accuracy.</p>
              </div>
              
              <div className="bg-white bg-opacity-5 p-5 rounded-lg hover:bg-opacity-10 transition-all">
                <h3 className="text-xl font-medium mb-3" style={{ color: accentColor }}>Computer Vision</h3>
                <p className="text-gray-300">Sophisticated image recognition and processing for stunning visual content.</p>
              </div>
              
              <div className="bg-white bg-opacity-5 p-5 rounded-lg hover:bg-opacity-10 transition-all">
                <h3 className="text-xl font-medium mb-3" style={{ color: accentColor }}>Generative Design</h3>
                <p className="text-gray-300">Creating original designs and content that perfectly match your brand identity.</p>
              </div>
            </div>
            
            <Link 
              to="/characters" 
              className="inline-block px-8 py-3 rounded-lg text-black font-bold transition-all hover:scale-105 hover:shadow-glow"
              style={{ backgroundColor: accentColor }}
            >
              Meet Our AI Team
            </Link>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-radial"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-repeat bg-center"></div>
      </div>
    </section>
  );
};

export default CharacterFeatureSection;
