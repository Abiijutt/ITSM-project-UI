
import React from 'react';
import { useColorShift } from '@/hooks/useColorShift';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const accentColor = useColorShift();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div 
              className="font-display font-extrabold text-2xl tracking-tight"
              style={{ color: accentColor }}
            >
              AI WALA
            </div>
            <p className="text-sm text-gray-400">
              All your digital needs—delivered by one rickshaw bot.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Brand Package</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Website & UX</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Social & Content</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Video Ads & AI Copy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">3D Rickshaw Bot</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">Automated Support 24/7</li>
              <li className="text-sm text-gray-400">support@aiwala.ai</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AI WALA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
