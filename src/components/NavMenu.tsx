
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useColorShift } from '@/hooks/useColorShift';
import { ChevronDown } from 'lucide-react';
import { serviceData } from '@/lib/serviceData';

interface NavMenuProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ mobile = false, onItemClick }) => {
  const accentColor = useColorShift();
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Characters', path: '/characters' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const funLinks = [
    { name: 'AI Tarot', path: '/ai-tarot' },
  ];

  const handleLinkClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  if (mobile) {
    return (
      <div className="space-y-2">
        {/* Main Links for Mobile */}
        {mainLinks.map((link) => (
          <motion.div
            key={link.path}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            {link.hasDropdown ? (
              <div className="space-y-2">
                <Link
                  to={link.path}
                  className="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg font-medium"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
                {/* Service submenu for mobile */}
                <div className="ml-4 space-y-1">
                  {serviceData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg text-sm flex items-center gap-2"
                      onClick={handleLinkClick}
                    >
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: service.glowColor }}
                      ></div>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={link.path}
                className="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg font-medium"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            )}
          </motion.div>
        ))}
        
        {/* Fun Links for Mobile */}
        {funLinks.map((link) => (
          <motion.div
            key={link.path}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <Link
              to={link.path}
              className="block px-4 py-3 font-medium rounded-lg text-white"
              style={{ backgroundColor: accentColor }}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }
  
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {/* Main Links */}
      {mainLinks.map((link) => (
        <div key={link.path} className="relative group">
          {link.hasDropdown ? (
            <button
              className="px-3 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center"
              onMouseEnter={() => setShowServiceDropdown(true)}
              onMouseLeave={() => setShowServiceDropdown(false)}
            >
              {link.name}
              <ChevronDown size={16} className="ml-1" />
            </button>
          ) : (
            <Link
              to={link.path}
              className="px-3 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              {link.name}
            </Link>
          )}
          
          {/* Services Dropdown */}
          {link.hasDropdown && showServiceDropdown && (
            <div 
              className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 mt-1 z-50"
              onMouseEnter={() => setShowServiceDropdown(true)}
              onMouseLeave={() => setShowServiceDropdown(false)}
            >
              {serviceData.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3 w-full"
                >
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: service.glowColor }}
                  ></div>
                  <span>{service.title}</span>
                </Link>
              ))}
              <div className="border-t border-gray-100 my-1"></div>
              <Link
                to="/services"
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-3 w-full font-medium"
              >
                View All Services
              </Link>
            </div>
          )}
        </div>
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
