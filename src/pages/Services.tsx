import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/pricingData';
import { Button } from '@/components/ui/button';
import { useColorShift } from '@/hooks/useColorShift';
import { useUser } from '@/contexts/UserContext';
import { useToast } from '@/components/ui/use-toast';
import { Bot, Code, Database, Star } from 'lucide-react';

const Services = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const navigate = useNavigate();
  const accentColor = useColorShift();
  const { user } = useUser();
  const { toast } = useToast();
  
  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };
  
  const handleGetStarted = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to start a project with these services",
      });
      navigate('/auth');
      return;
    }
    
    if (selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service to continue",
        variant: "destructive",
      });
      return;
    }
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the services you need and our AI rickshaw-bot will deliver world-class results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedServices.includes(service.id)}
                  onClick={() => toggleService(service.id)}
                  index={index}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Button
                size="lg"
                style={{ backgroundColor: accentColor }}
                className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform"
                onClick={handleGetStarted}
              >
                {user ? "Start Your Project" : "Sign In to Get Started"}
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI rickshaw-bot leverages cutting-edge technologies to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="text-center mb-4">
                  <div className="inline-block p-3 rounded-full bg-blue-50 mb-3">
                    <Bot className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">AI Processing</h3>
                </div>
                <p className="text-gray-600">
                  Leveraging GPT-4 and advanced machine learning models to understand your business needs and generate tailored content.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="text-center mb-4">
                  <div className="inline-block p-3 rounded-full bg-purple-50 mb-3">
                    <Code className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold">Modern Frameworks</h3>
                </div>
                <p className="text-gray-600">
                  Building with React, Next.js, Tailwind CSS, and other modern frameworks to create responsive, high-performance websites.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="text-center mb-4">
                  <div className="inline-block p-3 rounded-full bg-green-50 mb-3">
                    <Database className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Robust Backend</h3>
                </div>
                <p className="text-gray-600">
                  Using Supabase, Firebase, and AWS services to provide secure, scalable, and high-performance backend solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="text-center mb-4">
                  <div className="inline-block p-3 rounded-full bg-amber-50 mb-3">
                    <Star className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold">Analytics Integration</h3>
                </div>
                <p className="text-gray-600">
                  Implementing Google Analytics, Hotjar, and custom tracking solutions to measure performance and user engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Why Sign In?</h2>
              <p className="text-xl mb-8">
                Creating an account with AI WALA gives you access to exclusive benefits and features.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Project Tracking</h3>
                  <p>Track the progress of your projects from start to finish and receive real-time updates.</p>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Custom Dashboard</h3>
                  <p>Access your personalized dashboard to manage all your digital projects in one place.</p>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Priority Support</h3>
                  <p>Get prioritized support and assistance from our AI rickshaw-bot.</p>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-3">Save Preferences</h3>
                  <p>Store your brand preferences and project details for faster future projects.</p>
                </div>
              </div>
              
              {!user && (
                <Button
                  size="lg"
                  style={{ backgroundColor: accentColor }}
                  className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform"
                  onClick={() => navigate('/auth')}
                >
                  Sign In Now
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
