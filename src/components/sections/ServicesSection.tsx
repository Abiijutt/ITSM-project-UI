
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '@/lib/pricingData';
import { useColorShift } from '@/hooks/useColorShift';
import ServiceShowcase from '@/components/ServiceShowcase';

const ServicesSection = () => {
  const accentColor = useColorShift();
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI WALA delivers end-to-end digital agency services with zero human intervention.
            Our AI rickshaw-bot handles it all!
          </p>
        </div>
        
        <ServiceShowcase />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
  );
};

export default ServicesSection;
