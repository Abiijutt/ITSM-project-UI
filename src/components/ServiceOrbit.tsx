
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import AIWalaLogo from './AIWalaLogo';
import { X } from 'lucide-react';

interface ServiceOrbitProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceOrbit: React.FC<ServiceOrbitProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (overlayRef.current === e.target) {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  const services = [
    {
      name: "Brand Package",
      icon: "/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png",
      color: "#ff9500",
      angle: 0
    },
    {
      name: "Website & UX",
      icon: "/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png",
      color: "#00a2ff",
      angle: 60
    },
    {
      name: "Social Content",
      icon: "/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png",
      color: "#ff4081",
      angle: 120
    },
    {
      name: "Video Ad",
      icon: "/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png",
      color: "#8c52ff",
      angle: 180
    },
    {
      name: "AI Copy",
      icon: "/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png",
      color: "#00c853",
      angle: 240
    },
    {
      name: "3D Bot",
      icon: "/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png",
      color: "#ffab00",
      angle: 300
    }
  ];
  
  return createPortal(
    <div
      ref={overlayRef}
      className={`fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 ${
        isAnimating ? 'animate-fade-in' : ''
      }`}
      onClick={handleOverlayClick}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="text-white" />
        </button>
      </div>

      <div className="relative w-full max-w-4xl h-[80vh] max-h-[600px]">
        {/* Center AI Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 scale-75 md:scale-100">
          <div className="animation-pulse-glow">
            <AIWalaLogo size="large" />
          </div>
        </div>
        
        {/* Orbital Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-white/10 rounded-full animate-spin-slow"></div>
        
        {/* Service Nodes */}
        {services.map((service, index) => {
          const angle = (service.angle + index * 15) % 360;
          const x = Math.cos((angle * Math.PI) / 180);
          const y = Math.sin((angle * Math.PI) / 180);
          
          return (
            <div
              key={service.name}
              className="absolute w-20 h-20 flex flex-col items-center z-20"
              style={{
                top: `calc(50% + ${y * 200}px)`,
                left: `calc(50% + ${x * 200}px)`,
                transform: 'translate(-50%, -50%)',
                animation: `orbitSpin 20s linear infinite, pulse 2s ease-in-out ${index * 0.5}s infinite alternate`
              }}
            >
              <div 
                className="w-12 h-12 rounded-full p-2 flex items-center justify-center animation-pulse"
                style={{ 
                  backgroundColor: `${service.color}20`,
                  boxShadow: `0 0 15px ${service.color}80`
                }}
              >
                <img src={service.icon} alt={service.name} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-white text-xs mt-1 font-medium">{service.name}</span>
              
              {/* Signal animation */}
              <div className="absolute w-full h-full animate-ping-slow opacity-30 rounded-full" style={{ backgroundColor: service.color }}></div>
              
              {/* Signal line to center */}
              <div 
                className="absolute top-1/2 left-1/2 h-[2px] origin-left z-10 signal-line"
                style={{
                  width: `${Math.sqrt(x*x + y*y) * 200}px`,
                  transform: `rotate(${Math.atan2(y, x) * (180/Math.PI)}deg)`,
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                }}
              ></div>
            </div>
          );
        })}

        {/* Bottom Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white max-w-lg">
          <h2 className="text-2xl font-bold mb-2">AI-Powered Workflow</h2>
          <p className="text-white/70">
            Watch as our central AI system communicates with specialized service bots,
            orchestrating and delivering your digital services in perfect harmony.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ServiceOrbit;
