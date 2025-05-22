
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollZoom from '@/components/ScrollZoom';
import { useColorShift } from '@/hooks/useColorShift';

const FeaturedCharacterSection = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our AI Warriors</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI warriors represent the fusion of human creativity and artificial intelligence,
              ready to transform your digital presence with unmatched efficiency and precision.
            </p>
            <Link 
              to="/characters" 
              className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105 animate-pulse-slow"
              style={{ backgroundColor: accentColor }}
            >
              View All Characters
            </Link>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <ScrollZoom direction="in" speed={1.5}>
              <img 
                src="/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png" 
                alt="Featured AI Warrior with Orange Turban"
                className="w-60 md:w-80 h-auto filter drop-shadow-2xl character-hover pop3"
                style={{ filter: `drop-shadow(0 10px 15px rgba(255, 165, 0, 0.5))` }}
              />
            </ScrollZoom>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl" 
           style={{background: `${accentColor}20`}}></div>
    </section>
  );
};

export default FeaturedCharacterSection;
