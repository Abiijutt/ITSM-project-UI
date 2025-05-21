
import React, { useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useColorShift } from '@/hooks/useColorShift';
import { motion } from 'framer-motion';
import ScrollZoom from '@/components/ScrollZoom';
import ServiceOrbit from '@/components/ServiceOrbit';
import { ArrowRight, Check, Zap, Infinity, RotateView } from 'lucide-react';

const HowItWorks = () => {
  const accentColor = useColorShift();
  const [showOrbit, setShowOrbit] = React.useState(false);
  
  // Ref for orbit animation container
  const orbitRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Add scroll-based animations if needed
      if (orbitRef.current) {
        const rect = orbitRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          // Add visible class or other effects
          orbitRef.current.classList.add('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-gray-100 to-white">
          <div className="absolute inset-0 z-0 opacity-25">
            <div className="absolute inset-0 bg-gradient-radial from-blue-100 to-transparent"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                See How It <span style={{ color: accentColor }}>Works</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the future of digital services with our fully automated AI-powered workflow.
                No humans involved – just pure digital intelligence.
              </motion.p>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-80 h-80 mx-auto relative mb-16"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png" 
                    alt="AI WALA Bot" 
                    className="w-48 h-48 object-contain animate-float"
                  />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute w-full h-full animate-spin-slow pointer-events-none">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 150 * Math.cos(rad);
                    const y = 150 * Math.sin(rad);
                    return (
                      <div 
                        key={i}
                        className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
                        style={{ 
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                          backgroundColor: `${accentColor}20` 
                        }}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: accentColor }}></div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              
              <motion.button
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: accentColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowOrbit(true)}
              >
                Launch Interactive Demo
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* The AI Process Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Zero-Human Workflow</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how AI WALA delivers premium-quality digital services with absolutely no human intervention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <Zap size={36} />,
                  title: "AI Input Analysis",
                  description: "Our AI system processes your questionnaire responses and analyzes your business needs with deep learning algorithms."
                },
                {
                  icon: <RotateView size={36} />,
                  title: "Multi-Model Processing",
                  description: "Multiple specialized AI models collaborate to create digital assets across branding, web design, content, and more."
                },
                {
                  icon: <Infinity size={36} />,
                  title: "Iterative Refinement",
                  description: "The AI continuously improves outputs through feedback loops and comparative analysis against industry standards."
                },
                {
                  icon: <ArrowRight size={36} />,
                  title: "Automated Delivery",
                  description: "Final assets are automatically packaged and delivered to your dashboard without any human review or intervention."
                }
              ].map((step, index) => (
                <ScrollZoom 
                  key={index} 
                  threshold={0.3}
                  delay={index * 100}
                  className="border border-gray-200 rounded-xl p-8 bg-white hover:border-gray-300 transition-all"
                >
                  <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                    <div style={{ color: accentColor }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </ScrollZoom>
              ))}
            </div>
          </div>
        </section>
        
        {/* Interactive Orbit Demo Section */}
        <section ref={orbitRef} className="py-20 px-4 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">AI Service Orchestration</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our central AI system communicates with specialized service bots, orchestrating the entire workflow without human intervention.
            </p>
            
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto flex flex-col items-center">
              <div className="w-60 h-60 relative mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full bg-gray-900 shadow-xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png" 
                    alt="AI WALA Bot" 
                    className="w-32 h-32 object-contain animate-float"
                  />
                </div>
                
                {/* Simplified orbit visualization */}
                <div className="absolute w-full h-full animate-spin-slow pointer-events-none">
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 110 * Math.cos(rad);
                    const y = 110 * Math.sin(rad);
                    return (
                      <div 
                        key={i}
                        className="absolute w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                        style={{ 
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                          backgroundColor: `${accentColor}30` 
                        }}
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <button 
                className="px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: accentColor }}
                onClick={() => setShowOrbit(true)}
              >
                Launch Interactive Orbit View
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  { title: "100% Automated", value: "All Services" },
                  { title: "24/7 Availability", value: "Always On" },
                  { title: "Error Rate", value: "< 0.01%" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-300">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn more about our zero-human, fully automated digital service process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Is there really no human involvement?",
                  answer: "Absolutely none. From initial input analysis to final delivery, every step is handled by our AI systems. We've eliminated human intervention to deliver faster, more consistent results."
                },
                {
                  question: "How does the AI create designs without human guidance?",
                  answer: "Our AI has been trained on millions of design examples across industries and follows established design principles. It analyzes your specific needs and competitor styles to generate appropriate designs without human intervention."
                },
                {
                  question: "What happens if I'm not satisfied with the results?",
                  answer: "Our AI system can generate multiple options and refine its output based on your feedback. You can request revisions, and the AI will adjust accordingly without any human designers involved."
                },
                {
                  question: "How do you ensure quality without human oversight?",
                  answer: "Our AI includes quality assurance algorithms that check outputs against industry standards and your specific requirements. The system continuously verifies and improves results through internal validation loops."
                },
                {
                  question: "Is the process slower without humans?",
                  answer: "Quite the opposite! By removing human bottlenecks and operating 24/7, our AI completes projects significantly faster than traditional agencies—often delivering in hours what would take days or weeks with human involvement."
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all">
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto text-center">
            <ScrollZoom>
              <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Start your project now and see our AI-powered workflow in action.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: accentColor }}
                  onClick={() => setShowOrbit(true)}
                >
                  See Interactive Demo <ArrowRight className="ml-2 inline" />
                </button>
                
                <Link 
                  to="/characters" 
                  className="px-8 py-4 rounded-lg font-bold text-lg border-2 shadow-lg hover:shadow-xl transition-all"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  Meet Our AI Characters
                </Link>
              </div>
            </ScrollZoom>
          </div>
        </section>
      </main>
      
      {/* Interactive Service Orbit Modal */}
      <ServiceOrbit isOpen={showOrbit} onClose={() => setShowOrbit(false)} />
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
