
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCharacter from './ServiceCharacter';
import { useColorShift } from '@/hooks/useColorShift';
import { serviceData } from '@/lib/serviceData';

const ServiceShowcase = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Digital Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From brand identity to interactive 3D experiences, our AI warriors deliver cutting-edge digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <ServiceCharacter
                title={service.title}
                description={service.description}
                image={service.image}
                glowColor={service.glowColor}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
