
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceFeatureProps {
  feature: string;
  index: number;
  glowColor: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ feature, index, glowColor }) => {
  return (
    <motion.div 
      className="rounded-xl p-6 bg-white shadow-lg transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03 }}
    >
      <div 
        className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
        style={{ backgroundColor: `${glowColor}20` }}
      >
        <div 
          className="w-6 h-6 rounded-full" 
          style={{ backgroundColor: glowColor }}
        ></div>
      </div>
      <p className="text-lg font-medium">{feature}</p>
    </motion.div>
  );
};

export default ServiceFeature;
