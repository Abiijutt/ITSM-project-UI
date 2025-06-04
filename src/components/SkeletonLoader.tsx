
import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="h-4 bg-gray-700 rounded animate-pulse"
          style={{ width: `${Math.random() * 40 + 60}%` }}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: index * 0.1 
          }}
        />
      ))}
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-gray-800 rounded-lg p-6 space-y-4">
    <motion.div 
      className="h-6 bg-gray-700 rounded w-3/4"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <SkeletonLoader lines={3} />
    <motion.div 
      className="h-10 bg-gray-700 rounded w-1/3"
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    />
  </div>
);

export const ImageSkeleton = ({ className }: { className?: string }) => (
  <motion.div
    className={`bg-gray-700 rounded ${className}`}
    animate={{ opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  />
);

export default SkeletonLoader;
