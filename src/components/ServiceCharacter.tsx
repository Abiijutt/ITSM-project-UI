
import React from 'react';
import { motion } from 'framer-motion';

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
  glowColor = '#3b82f6'
}) => {
  return (
    <motion.div 
      className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 relative">
        <div 
          className="w-32 h-32 mx-auto rounded-2xl overflow-hidden relative"
          style={{ 
            background: `linear-gradient(135deg, ${glowColor}15, ${glowColor}05)`,
            border: `2px solid ${glowColor}20`
          }}
        >
          <img 
            src={image} 
            alt={`${title} character`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      {/* Subtle hover indicator */}
      <div 
        className="w-12 h-1 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: glowColor }}
      />
    </motion.div>
  );
};

export default ServiceCharacter;
