
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface MagicalPortalIntroProps {
  showMagicalIntro: boolean;
  accentColor: string;
  onAnimationComplete: () => void;
}

const MagicalPortalIntro: React.FC<MagicalPortalIntroProps> = ({
  showMagicalIntro,
  accentColor,
  onAnimationComplete
}) => {
  if (!showMagicalIntro) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="relative">
        {/* Central magical portal */}
        <motion.div
          className="w-64 h-64 rounded-full relative"
          style={{
            background: `radial-gradient(circle, ${accentColor}80, ${accentColor}40, transparent)`,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {/* Portal rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-dashed"
              style={{ 
                borderColor: accentColor
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1 + (i * 0.3), 1 + (i * 0.3)],
                opacity: [0, 1, 0],
                rotate: [0, 360 * (i + 1)]
              }}
              transition={{ 
                duration: 2, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Magical sparkles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const radius = 150;
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  color: accentColor
                }}
                initial={{ 
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + (i * 0.1),
                  ease: "easeInOut"
                }}
              >
                <Sparkles size={16 + (i % 3) * 4} />
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Portal text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold mb-2"
              style={{ color: accentColor }}
              animate={{
                textShadow: [
                  `0 0 10px ${accentColor}`,
                  `0 0 30px ${accentColor}`,
                  `0 0 10px ${accentColor}`
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              SUMMONING
            </motion.h2>
            <motion.p
              className="text-white text-lg"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              The AI Super Team
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MagicalPortalIntro;
