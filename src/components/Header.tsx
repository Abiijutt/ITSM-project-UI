
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useColorShift } from '@/hooks/useColorShift';
import UserAvatar from './UserAvatar';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const accentColor = useColorShift();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" 
            className="font-display font-extrabold text-2xl tracking-tight hover:scale-105 transition-transform"
            style={{ color: accentColor }}
          >
            AI WALA
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/services" 
            className={`font-medium transition-colors ${isActive('/services') ? 'text-aiwala-accent' : 'hover:text-aiwala-accent'}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors ${isActive('/about') ? 'text-aiwala-accent' : 'hover:text-aiwala-accent'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition-colors ${isActive('/contact') ? 'text-aiwala-accent' : 'hover:text-aiwala-accent'}`}
          >
            Contact
          </Link>
          <Link 
            to="/dashboard" 
            className={`font-medium transition-colors ${isActive('/dashboard') ? 'text-aiwala-accent' : 'hover:text-aiwala-accent'}`}
          >
            Dashboard
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <UserAvatar />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute left-0 right-0 animate-fade-in-up">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              to="/services" 
              className={`py-2 px-3 rounded-md ${isActive('/services') ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`py-2 px-3 rounded-md ${isActive('/about') ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 px-3 rounded-md ${isActive('/contact') ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
            >
              Contact
            </Link>
            <Link 
              to="/dashboard" 
              className={`py-2 px-3 rounded-md ${isActive('/dashboard') ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
            >
              Dashboard
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
