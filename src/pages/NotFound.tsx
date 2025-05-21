
import React from 'react';
import { Link } from 'react-router-dom';
import { useColorShift } from '@/hooks/useColorShift';
import { Button } from '@/components/ui/button';
import { MapPin, Compass } from 'lucide-react';

const NotFound = () => {
  const accentColor = useColorShift();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4 relative overflow-hidden">
      {/* Background code patterns */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <pre className="text-xs text-gray-500 opacity-50 leading-tight">
            {Array(50).fill(0).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array(120).fill(0).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? '0' : '1'}</span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      </div>
      
      <div className="z-10 max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png" 
            alt="Rickshaw Bot Lost in the Code" 
            className="w-64 h-64 object-contain animate-float"
          />
        </div>
        
        <h1 className="text-4xl font-display font-bold mb-2 text-white">Lost on the Road</h1>
        <h2 className="text-8xl font-display font-bold mb-6" style={{ color: accentColor }}>404</h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Oops! Our AI Rickshaw Bot took a wrong turn and is now lost in the digital forest. 
          Let's get you back on the main road.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="text-lg px-6 py-6 bg-white text-gray-900 hover:bg-gray-100">
            <Link to="/">
              <MapPin className="mr-2" />
              Re-route me home
            </Link>
          </Button>
          
          <Button 
            asChild
            className="text-lg px-6 py-6 text-white"
            style={{ backgroundColor: accentColor }}
          >
            <Link to="/services">
              <Compass className="mr-2" />
              Explore services
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Digital road sign */}
      <div className="absolute bottom-8 flex items-center justify-center w-full">
        <div className="px-6 py-3 bg-gray-800 rounded-lg text-gray-400 flex items-center text-sm">
          <span className="mr-2 w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
          Error: Path not found | Stack trace: 0xF00D_C0DE_404
        </div>
      </div>
    </div>
  );
};

export default NotFound;
