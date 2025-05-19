
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import QuestionnaireWizard from '@/components/QuestionnaireWizard';
import RickshawBot from '@/components/RickshawBot';
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
        <section className="py-20 bg-gradient-to-br from-aiwala-accent to-black text-white">
          <div className="container mx-auto px-4 text-center">
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
