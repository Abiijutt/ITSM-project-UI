
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServiceById } from '@/lib/serviceData';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import ServiceFeature from '@/components/ServiceFeature';
import ServiceProcess from '@/components/ServiceProcess';
import ScrollZoom from '@/components/ScrollZoom';
import { useToast } from '@/components/ui/use-toast';
import { useColorShift } from '@/hooks/useColorShift';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState(serviceId ? getServiceById(serviceId) : undefined);
  const { toast } = useToast();
  const accentColor = useColorShift();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (serviceId) {
      const foundService = getServiceById(serviceId);
      setService(foundService);
      
      if (!foundService) {
        toast({
          title: "Service not found",
          description: "We couldn't find the service you're looking for.",
          variant: "destructive"
        });
      }
    }
  }, [serviceId, toast]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">We couldn't find the service you're looking for.</p>
            <Link to="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 z-0">
            <div 
              className="absolute inset-0 opacity-20"
              style={{ background: `radial-gradient(circle at center, ${service.glowColor}40 0%, transparent 70%)` }}
            ></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="mb-2">
                  <Link to="/services" className="text-sm flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                    <ChevronRight size={14} className="rotate-180 mr-1" />
                    Back to Services
                  </Link>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{service.longDescription}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${service.glowColor}30` }}
                      >
                        <Check size={12} style={{ color: service.glowColor }} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="text-white"
                  style={{ backgroundColor: service.glowColor }}
                >
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <motion.div 
                  className="relative p-4"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img 
                    src={service.characterImage} 
                    alt={service.title}
                    className="z-10 relative"
                    style={{ filter: `drop-shadow(0 0 15px ${service.glowColor}40)` }}
                  />
                  
                  {/* Animated glow effect */}
                  <div 
                    className="absolute inset-0 z-0 rounded-full blur-3xl animate-pulse-slow opacity-40"
                    style={{ backgroundColor: service.glowColor }}
                  ></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <ServiceFeature 
                  key={index}
                  feature={feature}
                  index={index}
                  glowColor={service.glowColor}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Process</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our AI-powered approach ensures consistent quality and exceptional results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <ServiceProcess 
                  key={index}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  isLast={index === service.process.length - 1}
                  glowColor={service.glowColor}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Deliverables Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What You'll Receive</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 bg-opacity-50">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: service.glowColor }}
                  >
                    <Check size={20} className="text-white" />
                  </div>
                  <span className="text-lg">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        {service.testimonial && (
          <section className="py-16 bg-gradient-to-br from-white to-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-5xl font-serif mb-6 text-gray-300">"</div>
                <p className="text-xl italic mb-6">{service.testimonial.quote}</p>
                <p className="font-bold">{service.testimonial.author}</p>
                <p className="text-gray-600">{service.testimonial.company}</p>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <ScrollZoom threshold={0.4}>
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get started with our {service.title} service today and experience the AI WALA difference.
              </p>
              
              <Button 
                size="lg" 
                className="text-white animate-bounce-in"
                style={{ backgroundColor: service.glowColor }}
              >
                Request a Quote
              </Button>
            </ScrollZoom>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Other Services</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {serviceData
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService, index) => (
                  <Link key={index} to={`/services/${relatedService.id}`}>
                    <div 
                      className="p-4 rounded-lg flex items-center gap-4 transition-all hover:scale-105 border border-gray-200 bg-white"
                      style={{ boxShadow: `0 4px 6px ${relatedService.glowColor}10` }}
                    >
                      <img 
                        src={relatedService.image} 
                        alt={relatedService.title} 
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium">{relatedService.title}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
