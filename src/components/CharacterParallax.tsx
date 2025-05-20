
import React, { useEffect, useRef } from 'react';

interface CharacterParallaxProps {
  imagePath: string;
  altText: string;
  position?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  glowColor?: string;
  animationDelay?: number;
}

const CharacterParallax: React.FC<CharacterParallaxProps> = ({
  imagePath,
  altText,
  position = 'center',
  size = 'medium',
  glowColor = 'rgba(123, 31, 162, 0.5)',
  animationDelay = 0
}) => {
  const characterRef = useRef<HTMLDivElement>(null);
  
  // Set sizing based on props
  const getSize = () => {
    switch (size) {
      case 'small': return 'w-48 md:w-64';
      case 'large': return 'w-80 md:w-96';
      default: return 'w-64 md:w-80';
    }
  };
  
  // Set positioning based on props
  const getPosition = () => {
    switch (position) {
      case 'left': return 'justify-start';
      case 'right': return 'justify-end';
      default: return 'justify-center';
    }
  };
  
  // Handle parallax scroll effect
  useEffect(() => {
    const character = characterRef.current;
    if (!character) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const characterPosition = character.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Only animate when character is visible in viewport
      if (characterPosition - windowHeight < scrollPosition && characterPosition + character.offsetHeight > scrollPosition) {
        // Calculate how far into the viewport the element is
        const distanceFromTop = scrollPosition + windowHeight - characterPosition;
        const percentageScrolled = Math.min(distanceFromTop / windowHeight, 1);
        
        // Apply transformations based on scroll position
        const yTransform = 50 - (percentageScrolled * 100);
        const scaleValue = 0.9 + (percentageScrolled * 0.3);
        const opacityValue = Math.min(0.3 + percentageScrolled, 1);
        
        character.style.transform = `translateY(${yTransform}px) scale(${scaleValue})`;
        character.style.opacity = opacityValue.toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`flex ${getPosition()} my-12 px-4 overflow-visible`}>
      <div 
        ref={characterRef}
        className={`${getSize()} transition-transform duration-500 filter hover:scale-105`} 
        style={{
          opacity: 0.3, 
          transform: 'translateY(50px) scale(0.9)',
          animationDelay: `${animationDelay}ms`,
          filter: `drop-shadow(0 0 15px ${glowColor})`,
        }}
      >
        <img 
          src={imagePath} 
          alt={altText}
          className="w-full h-auto object-contain character-hover"
        />
      </div>
    </div>
  );
};

export default CharacterParallax;
