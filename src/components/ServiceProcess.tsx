
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProcessProps {
  step: number;
  title: string;
  description: string;
  isLast: boolean;
  glowColor: string;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ 
  step, 
  title, 
  description, 
  isLast,
  glowColor
}) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: step * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center text-center">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 z-10"
          style={{ backgroundColor: glowColor }}
        >
          {step}
        </div>
        
        {!isLast && (
          <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-0 h-[2px]" style={{ backgroundColor: `${glowColor}40` }}></div>
        )}
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceProcess;
