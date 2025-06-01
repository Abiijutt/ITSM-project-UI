
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 perspective-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="relative">
        {/* Enhanced 3D Central magical portal */}
        <motion.div
          className="w-64 h-64 rounded-full relative portal-3d-effect"
          style={{
            background: `radial-gradient(circle, ${accentColor}80, ${accentColor}40, transparent)`,
          }}
          initial={{ scale: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            rotateX: [0, 45, 0],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 180]
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {/* Enhanced 3D Portal rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-dashed glass-3d"
              style={{ 
                borderColor: accentColor,
                transform: `translateZ(${i * 20}px)`
              }}
              initial={{ scale: 0, opacity: 0, rotateX: 0 }}
              animate={{ 
                scale: [0, 1 + (i * 0.3), 1 + (i * 0.3)],
                opacity: [0, 1, 0],
                rotateX: [0, 360 * (i + 1)],
                rotateY: [0, 180 * (i + 1)],
                rotateZ: [0, 90 * (i + 1)]
              }}
              transition={{ 
                duration: 2, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Enhanced 3D Magical sparkles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const radius = 150;
            return (
              <motion.div
                key={i}
                className="absolute animate-spin3d"
                style={{
                  left: '50%',
                  top: '50%',
                  color: accentColor,
                  transform: `translateZ(${(i % 3) * 30}px)`
                }}
                initial={{ 
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                  rotateX: 0,
                  rotateY: 0
                }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotateX: [0, 360],
                  rotateY: [0, 180],
                  rotateZ: [0, 270]
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
        
        {/* Enhanced 3D Portal text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5, rotateX: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateX: [0, 15, 0]
          }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center layer-3d-3">
            <motion.h2
              className="text-3xl font-bold mb-2 text-3d-effect"
              style={{ color: accentColor }}
              animate={{
                textShadow: [
                  `0 0 10px ${accentColor}`,
                  `0 0 30px ${accentColor}`,
                  `0 0 10px ${accentColor}`
                ],
                rotateY: [0, 5, -5, 0]
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
              className="text-white text-lg hover-3d-lift"
              animate={{
                opacity: [0.7, 1, 0.7],
                translateZ: [0, 10, 0]
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

        {/* Additional 3D floating elements */}
        <div className="absolute -top-20 -left-20 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-cube3d"></div>
        <div className="absolute -bottom-16 -right-16 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-50 animate-morph3d"></div>
      </div>
    </motion.div>
  );
};

export default MagicalPortalIntro;
