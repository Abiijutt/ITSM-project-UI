
import React, { useState, useEffect } from 'react';
import { useColorShift } from '@/hooks/useColorShift';
import UserAvatar from './UserAvatar';

const Header: React.FC = () => {
  const accentColor = useColorShift();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <div 
            className="font-display font-extrabold text-2xl tracking-tight"
            style={{ color: accentColor }}
          >
            AI WALA
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium hover:text-aiwala-accent transition-colors">Services</a>
          <a href="#pricing" className="font-medium hover:text-aiwala-accent transition-colors">Pricing</a>
          <a href="#how-it-works" className="font-medium hover:text-aiwala-accent transition-colors">How it Works</a>
        </nav>
        
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
