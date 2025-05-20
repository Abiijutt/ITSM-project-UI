
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollZoomProps {
  children: ReactNode;
  direction?: 'in' | 'out';
  speed?: number; // 1 = normal speed, 2 = double speed, etc.
}

const ScrollZoom: React.FC<ScrollZoomProps> = ({
  children,
  direction = 'in',
  speed = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const inView = rect.top < windowHeight && rect.bottom > 0;
      
      if (inView) {
        const viewportBottom = windowHeight;
        const elementMiddle = rect.top + (rect.height / 2);
        const distanceFromMiddle = Math.abs(viewportBottom / 2 - elementMiddle);
        const maxDistance = windowHeight / 2;
        const visibility = 1 - (distanceFromMiddle / maxDistance);
        
        // Scale based on visibility (0 to 1)
        const scaleFactor = direction === 'in' 
          ? 1 + (visibility * 0.3 * speed)  // Zoom in: start normal, scale up
          : 1.3 - (visibility * 0.3 * speed); // Zoom out: start zoomed, scale down
        
        container.style.transform = `scale(${scaleFactor})`;
        container.style.opacity = `${0.3 + (visibility * 0.7)}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction, speed]);
  
  return (
    <div 
      ref={containerRef}
      className="transition-all duration-300 overflow-hidden"
      style={{ opacity: 0.3 }} // Initial state, will be updated by scroll handler
    >
      {children}
    </div>
  );
};

export default ScrollZoom;
