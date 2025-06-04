
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AIWalaLogo from './AIWalaLogo';
import UserAvatar from './UserAvatar';
import { Button } from './ui/button';
import { useColorShift } from '@/hooks/useColorShift';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const accentColor = useColorShift();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Characters', href: '/characters' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <AIWalaLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActivePath(item.href) 
                    ? 'text-white border-b-2' 
                    : 'text-gray-300'
                }`}
                style={{ 
                  borderColor: isActivePath(item.href) ? accentColor : 'transparent' 
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/book-appointment">
              <Button 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Book Call
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white"
              >
                FAQ
              </Button>
            </Link>
            <UserAvatar />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActivePath(item.href) ? 'text-white' : 'text-gray-300'
                  }`}
                  style={{ color: isActivePath(item.href) ? accentColor : undefined }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <Link to="/book-appointment" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full mb-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Book Consultation
                  </Button>
                </Link>
                <UserAvatar />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
