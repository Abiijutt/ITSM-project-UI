
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useColorShift } from '@/hooks/useColorShift';
import RickshawBot from '@/components/RickshawBot';

interface TarotCard {
  name: string;
  image: string;
  type: 'branding' | 'social' | 'web';
  meaning: string;
  flipped: boolean;
}

const AiTarot = () => {
  const accentColor = useColorShift();
  const [cards, setCards] = useState<TarotCard[]>([
    {
      name: 'The Brand Visionary',
      image: '/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png',
      type: 'branding',
      meaning: 'Your brand is destined for visual recognition. Bold colors and memorable imagery will be key to your success.',
      flipped: false
    },
    {
      name: 'The Social Influencer',
      image: '/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png',
      type: 'social',
      meaning: 'Your destiny lies in community building. Create content that resonates emotionally, and your followers will multiply.',
      flipped: false
    },
    {
      name: 'The Web Architect',
      image: '/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png',
      type: 'web',
      meaning: 'Digital foundations will support your growth. Invest in a solid online presence with intuitive navigation and delightful user experience.',
      flipped: false
    }
  ]);
  
  const [isReading, setIsReading] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  
  const shuffleCards = () => {
    setCards(cards => cards.map(card => ({
      ...card,
      flipped: false
    })));
    setIsReading(false);
    setReadingComplete(false);
    
    setTimeout(() => {
      setCards(cards => 
        [...cards].sort(() => Math.random() - 0.5)
      );
    }, 500);
  };
  
  const startReading = () => {
    setIsReading(true);
    
    // Flip cards one by one with delay
    cards.forEach((_, index) => {
      setTimeout(() => {
        setCards(currentCards => 
          currentCards.map((card, cardIndex) => 
            cardIndex === index 
              ? { ...card, flipped: true } 
              : card
          )
        );
        
        // Check if reading is complete
        if (index === cards.length - 1) {
          setTimeout(() => {
            setReadingComplete(true);
          }, 1000);
        }
      }, 1500 * (index + 1));
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-purple-900 to-black">
      <Header />
      
      <main className="flex-grow flex flex-col">
        <section className="py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            AI WALA <span style={{ color: accentColor }} className="block mt-2">Tarot Reading</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Discover your business destiny through the mystic powers of our AI Rickshaw Bot. 
            Draw three cards to reveal insights about your branding, social media, and web presence.
          </p>
        </section>
        
        <section className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative">
          {/* Mystical background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-500 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-500 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Cards display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 z-10 mb-10">
            {cards.map((card, index) => (
              <motion.div 
                key={card.type}
                className={`cursor-pointer`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative perspective-1000">
                  <motion.div 
                    className="relative w-64 h-96 rounded-xl shadow-2xl transform-style-3d transition-all duration-1000"
                    animate={{ rotateY: card.flipped ? 180 : 0 }}
                  >
                    {/* Card back */}
                    <div className={`absolute inset-0 rounded-xl backface-hidden ${card.flipped ? 'opacity-0' : 'opacity-100'} bg-gradient-to-br from-indigo-600 to-purple-900 flex items-center justify-center`}>
                      <div className="p-4 border-4 border-yellow-400 rounded-xl w-5/6 h-5/6 flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-white text-center">AI WALA TAROT</span>
                      </div>
                    </div>
                    
                    {/* Card front */}
                    <div
                      className={`absolute inset-0 rounded-xl backface-hidden rotateY-180 ${card.flipped ? 'opacity-100' : 'opacity-0'} bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-between overflow-hidden p-4 border border-purple-500`}
                    >
                      <h3 className="text-xl font-display font-bold text-white mb-2 text-center">{card.name}</h3>
                      <div className="relative w-36 h-36 mb-2 overflow-hidden rounded-full bg-black flex items-center justify-center">
                        <img src={card.image} alt={card.name} className="h-full object-contain transform scale-90 animate-float" />
                        <div className="absolute inset-0 rounded-full border-2 border-purple-500"></div>
                      </div>
                      <p className="text-sm text-gray-300 text-center" style={{ height: '80px', overflow: 'auto' }}>
                        {card.meaning}
                      </p>
                      <span className="mt-2 px-3 py-1 rounded-full text-xs uppercase tracking-wide" style={{ 
                        backgroundColor: 
                          card.type === 'branding' ? '#ff9500' : 
                          card.type === 'social' ? '#ff4081' : 
                          '#00a2ff',
                        color: 'white'
                      }}>
                        {card.type}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {!isReading ? (
              <Button 
                onClick={startReading} 
                className="text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-display"
              >
                Reveal Your Destiny
              </Button>
            ) : !readingComplete ? (
              <div className="text-xl text-purple-300 animate-pulse font-display">
                Reading your business fortune...
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <p className="text-xl text-white max-w-2xl text-center font-display">
                  The cards have spoken! Your business destiny is revealed.
                </p>
                <div className="flex gap-4 mt-2">
                  <Button 
                    onClick={shuffleCards} 
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                  >
                    Read Again
                  </Button>
                  <Button 
                    onClick={() => setShowQuestionnaire(true)} 
                    className="px-6 py-2 text-white rounded-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    Get Detailed Reading
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12 px-4 bg-black bg-opacity-50 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">How AI Tarot Works</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Our AI Rickshaw Bot analyzes cosmic digital patterns to reveal insights about your business potential.
            Each card represents a key aspect of your digital presence, offering guidance tailored to your journey.
          </p>
        </section>
      </main>
      
      <Footer />
      
      {/* Rickshaw Bot */}
      <RickshawBot onOpenQuestionnaire={() => setShowQuestionnaire(true)} />
    </div>
  );
};

export default AiTarot;
