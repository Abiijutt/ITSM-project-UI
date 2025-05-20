
import React from 'react';
import ServiceCharacter from './ServiceCharacter';
import { useColorShift } from '@/hooks/useColorShift';

const ServiceShowcase = () => {
  const accentColor = useColorShift();
  
  const services = [
    {
      title: "Brand Package",
      description: "Complete brand identity development with logo, colors, and guidelines",
      image: "/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png",
      glowColor: "#ff9500"
    },
    {
      title: "Website & UX",
      description: "User-centric website design with intuitive navigation and experience",
      image: "/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png",
      glowColor: "#00a2ff"
    },
    {
      title: "Social Content",
      description: "Engaging content creation for all social media platforms",
      image: "/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png",
      glowColor: "#ff4081"
    },
    {
      title: "Video Ad",
      description: "Eye-catching video advertisements that convert viewers into customers",
      image: "/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png",
      glowColor: "#8c52ff"
    },
    {
      title: "AI Copy",
      description: "Persuasive AI-generated copywriting for all your marketing needs",
      image: "/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png",
      glowColor: "#00c853"
    },
    {
      title: "3D Rickshaw Bot",
      description: "Custom 3D bot creations for immersive digital experiences",
      image: "/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png",
      glowColor: "#ffab00"
    }
  ];
  
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
          {services.map((service, index) => (
            <ServiceCharacter
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              glowColor={service.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
