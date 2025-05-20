
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import QuestionnaireWizard from '@/components/QuestionnaireWizard';
import RickshawBot from '@/components/RickshawBot';
import CharacterParallax from '@/components/CharacterParallax';
import ScrollZoom from '@/components/ScrollZoom';
import { services } from '@/lib/pricingData';
import { useColorShift } from '@/hooks/useColorShift';

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const accentColor = useColorShift();

  const handleOpenQuestionnaire = () => {
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection onOpenQuestionnaire={handleOpenQuestionnaire} />
        
        {/* Featured Character */}
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
                  className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
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
                    className="w-60 md:w-80 h-auto filter drop-shadow-2xl character-hover"
                    style={{ filter: `drop-shadow(0 10px 15px rgba(255, 165, 0, 0.5))` }}
                  />
                </ScrollZoom>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full" style={{background: `${accentColor}20`}} className="blur-3xl"></div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI WALA delivers end-to-end digital agency services with zero human intervention.
                Our AI rickshaw-bot handles it all!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.id} className="card-aiwala animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.included.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our 5-step process makes getting world-class digital services easier than ever before.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { 
                  step: 1, 
                  title: "Business Info", 
                  description: "Tell us who you are and what industry you're in." 
                },
                { 
                  step: 2, 
                  title: "Revenue Range", 
                  description: "Select your business size for tailored solutions." 
                },
                { 
                  step: 3, 
                  title: "Competitors", 
                  description: "Share competitor websites for AI analysis." 
                },
                { 
                  step: 4, 
                  title: "Reference Images", 
                  description: "Upload visuals that inspire you." 
                },
                { 
                  step: 5, 
                  title: "Choose Services", 
                  description: "Select what you need and get an instant quote." 
                }
              ].map((item, index) => (
                <div key={item.step} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-full text-white text-2xl font-bold mb-4 mx-auto shadow-lg" 
                    style={{ backgroundColor: accentColor }}
                  >
                    {item.step}
                  </div>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(50%-32px)] h-[2px] bg-gray-300"></div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                  <p className="text-center text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button 
                className="btn-aiwala text-lg px-8 py-4 animate-fade-in-up"
                style={{ backgroundColor: accentColor, animationDelay: '600ms' }}
                onClick={handleOpenQuestionnaire}
              >
                Start Your Project Now
              </button>
            </div>
          </div>
        </section>
        
        {/* Character Feature Section */}
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
        
        {/* Testimonial/Stats Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose AI WALA?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The future of digital agencies is here—with zero human intervention and maximum results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "250+", label: "Projects Delivered" },
                { value: "48hrs", label: "Average Turnaround" },
                { value: "85%", label: "Client Cost Savings" },
                { value: "24/7", label: "AI-Powered Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div 
                    className="text-5xl font-black mb-2"
                    style={{ color: accentColor }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xl text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-aiwala-accent to-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Get started with AI WALA today and watch our rickshaw-bot deliver results that would normally take an entire team.
            </p>
            
            <button 
              className="bg-white text-aiwala-accent text-lg font-medium px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg animate-bounce-in"
              onClick={handleOpenQuestionnaire}
            >
              Get Your Quote Now
            </button>
          </div>
          
          {/* Background character */}
          <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4">
            <img 
              src="/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png" 
              alt="Silhouette of AI Warrior" 
              className="w-80 h-auto" 
            />
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Floating Rickshaw Bot */}
      <RickshawBot onOpenQuestionnaire={handleOpenQuestionnaire} />
      
      {/* Questionnaire Modal */}
      <QuestionnaireWizard 
        isOpen={isQuestionnaireOpen} 
        onClose={handleCloseQuestionnaire} 
      />
    </div>
  );
};

export default Index;
