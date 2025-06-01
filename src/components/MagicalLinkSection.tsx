
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Zap } from 'lucide-react';

interface MagicalLinkSectionProps {
  accentColor: string;
}

const MagicalLinkSection: React.FC<MagicalLinkSectionProps> = ({ accentColor }) => {
  return (
    <div className="text-center py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Magical background effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400 opacity-30"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 4 + (i % 3),
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Star size={12 + (i % 3) * 4} />
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.h3
          className="text-3xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to See the <span style={{ color: accentColor }}>Magic</span> in Action?
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            to="/see-how-it-works"
            className="group relative inline-block px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 overflow-hidden"
            style={{ backgroundColor: accentColor }}
          >
            {/* Button background effects */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  `linear-gradient(45deg, ${accentColor}, transparent)`,
                  `linear-gradient(45deg, transparent, ${accentColor})`,
                  `linear-gradient(45deg, ${accentColor}, transparent)`
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Sparkle effects on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white"
                  style={{
                    left: `${10 + (i * 15)}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Zap size={12} />
                </motion.div>
              ))}
            </div>
            
            <span className="relative z-10 flex items-center">
              See Team in Magical Action
              <motion.span
                className="ml-2"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ✨
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MagicalLinkSection;
