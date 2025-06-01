
import React from 'react';
import { motion } from 'framer-motion';
import { useColorShift } from '@/hooks/useColorShift';
import { serviceData } from '@/lib/serviceData';

// Create a simple ServiceCard component for this section
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const accentColor = useColorShift();

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${service.glowColor}20` }}
        >
          <img 
            src={service.image} 
            alt={service.title}
            className="w-8 h-8 object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {service.features.slice(0, 3).map((feature: string, i: number) => (
          <span 
            key={i}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const accentColor = useColorShift();

  return (
    <section className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aiwala-accent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              id="services-heading" 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ color: accentColor }}>Superpowers</span> In Action
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Each service delivered with AI precision and superhuman speed
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced bottom CTA */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex gap-1">
                {[accentColor, '#ff6b6b', '#4ecdc4'].map((color, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">All services powered by AI</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
