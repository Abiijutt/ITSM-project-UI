
import React from 'react';
import { Link } from 'react-router-dom';
import { useColorShift } from '@/hooks/useColorShift';

const NavMenu = () => {
  const accentColor = useColorShift();
  
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Characters', path: '/characters' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const funLinks = [
    { name: 'AI Tarot', path: '/ai-tarot' },
  ];
  
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {/* Main Links */}
      {mainLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="px-3 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
        >
          {link.name}
        </Link>
      ))}
      
      {/* Fun Links with special styling */}
      {funLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="px-3 py-2 font-medium rounded-md transition-colors text-white ml-2"
          style={{ backgroundColor: accentColor }}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
