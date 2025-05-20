
import React from 'react';
import { useColorShift } from '@/hooks/useColorShift';

interface ServiceCharacterProps {
  image: string;
  title: string;
  description: string;
  glowColor?: string;
}

const ServiceCharacter: React.FC<ServiceCharacterProps> = ({
  image,
  title,
  description,
  glowColor
}) => {
  const accentColor = useColorShift();
  const glow = glowColor || accentColor;
  
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div 
        className="mb-4 relative"
        style={{ filter: `drop-shadow(0 0 10px ${glow}40)` }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-40 h-40 object-contain character-hover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCharacter;
