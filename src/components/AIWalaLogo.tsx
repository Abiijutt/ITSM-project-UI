
import React from 'react';

interface AIWalaLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const AIWalaLogo: React.FC<AIWalaLogoProps> = ({ 
  className = '',
  size = 'medium'
}) => {
  // Determine width based on size prop
  const getWidth = () => {
    switch (size) {
      case 'small': return 'w-40 md:w-52';
      case 'large': return 'w-80 md:w-96';
      default: return 'w-60 md:w-72'; // medium
    }
  };

  return (
    <div className={`aiwala-logo-bg ${getWidth()} ${className}`}>
      <div className="shine"></div>
      <svg className="aiwala-svg" viewBox="0 0 520 140" fill="none">
        {/* Yellow background rect as fallback for crispness */}
        <rect x="0" y="0" width="520" height="140" rx="48" fill="#FFD300"/>
        {/* Group for letter cutouts */}
        <g className="glow">
          {/* Letters in negative space, carefully drawn for bold, wide, soft look */}
          <g className="pop">
            {/* A (wide, super round, bubble style) */}
            <path d="M65,108 Q35,108 35,70 Q35,32 65,32 Q95,32 95,70 Q95,108 65,108 Z" fill="#0052CC"/>
            <ellipse cx="65" cy="76" rx="13" ry="13" fill="#FFD300"/> {/* Negative counter */}
          </g>
          <g className="pop pop2">
            {/* I (soft pill, wide) */}
            <rect x="110" y="37" width="26" height="54" rx="13" fill="#0052CC"/>
            {/* Dot */}
            <ellipse className="pulse-dot" cx="123" cy="28" rx="7.3" ry="7.3" fill="#0052CC"/>
          </g>
          {/* Space */}
          {/* W */}
          <g className="pop pop3">
            <path d="M160,49 Q167,105 178,105 Q189,105 196,49 Q203,105 215,105 Q226,105 233,49 Q240,105 250,105 Q260,105 267,49 Q263,108 250,108 Q237,108 233,49 Q229,108 215,108 Q201,108 196,49 Q191,108 178,108 Q165,108 160,49 Z" fill="#0052CC"/>
          </g>
          {/* A2 */}
          <g className="pop pop4">
            <path d="M287,108 Q257,108 257,70 Q257,32 287,32 Q317,32 317,70 Q317,108 287,108 Z" fill="#0052CC"/>
            <ellipse cx="287" cy="76" rx="13" ry="13" fill="#FFD300"/>
          </g>
          {/* L */}
          <g className="pop pop5">
            <rect x="332" y="37" width="26" height="54" rx="13" fill="#0052CC"/>
            <rect x="332" y="90" width="38" height="15" rx="7" fill="#0052CC"/>
          </g>
          {/* A3 */}
          <g className="pop">
            <path d="M399,108 Q369,108 369,70 Q369,32 399,32 Q429,32 429,70 Q429,108 399,108 Z" fill="#0052CC"/>
            <ellipse cx="399" cy="76" rx="13" ry="13" fill="#FFD300"/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AIWalaLogo;
