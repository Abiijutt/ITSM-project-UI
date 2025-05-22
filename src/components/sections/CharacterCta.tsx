
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollZoom from '@/components/ScrollZoom';
import { useColorShift } from '@/hooks/useColorShift';

const CharacterCta = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-20 bg-black text-white" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 text-center">
        <ScrollZoom threshold={0.3}>
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">Want to see our warriors in action?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our AI team handle your digital needs. No humans, just pure AI power!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/how-it-works" 
              className="px-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: accentColor }}
              aria-label="Learn how our AI services work"
            >
              See How It Works
            </Link>
            
            <Link 
              to="/services" 
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 shadow-lg hover:shadow-xl transition-all"
              style={{ borderColor: accentColor, color: accentColor }}
              aria-label="Explore our AI-powered services"
            >
              Explore Our Services
            </Link>
          </div>
        </ScrollZoom>
      </div>
    </section>
  );
};

export default CharacterCta;
