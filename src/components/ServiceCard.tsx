
import React from 'react';
import { Service } from '@/lib/pricingData';
import { useColorShift } from '@/hooks/useColorShift';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isSelected, onClick, index }) => {
  const accentColor = useColorShift();

  return (
    <div 
      className={`card-aiwala cursor-pointer transition-all transform hover:-translate-y-1 animate-fade-in-up`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        borderColor: isSelected ? accentColor : 'transparent',
      }}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div 
          className={`w-5 h-5 rounded flex items-center justify-center mt-1 ${
            isSelected ? 'bg-aiwala-accent' : 'border border-aiwala-gray'
          }`}
        >
          {isSelected && <Check className="w-3 h-3 text-white" />}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold">{service.name}</h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
          
          <div className="mt-4 space-y-2">
            {service.included.map((item, i) => (
              <div key={i} className="flex items-center text-sm gap-2">
                <div className="w-1 h-1 rounded-full bg-aiwala-accent"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
