
import { useState, useEffect } from 'react';

export function useColorShift(baseColor: string = '#0008A0', shiftRange: number = 15) {
  const [currentColor, setCurrentColor] = useState(baseColor);

  useEffect(() => {
    // Convert hex color to HSL
    const hexToHSL = (hex: string) => {
      // Remove the # if present
      hex = hex.replace(/^#/, '');
      
      // Parse the hex values
      let r = parseInt(hex.substring(0, 2), 16) / 255;
      let g = parseInt(hex.substring(2, 4), 16) / 255;
      let b = parseInt(hex.substring(4, 6), 16) / 255;
      
      // Find max and min values
      let max = Math.max(r, g, b);
      let min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        if (max === r) {
          h = (g - b) / d + (g < b ? 6 : 0);
        } else if (max === g) {
          h = (b - r) / d + 2;
        } else {
          h = (r - g) / d + 4;
        }
        
        h = h * 60;
      }
      
      return { h, s, l };
    };

    // Convert HSL to hex color
    const hslToHex = (h: number, s: number, l: number) => {
      h /= 360;
      
      let r, g, b;
      
      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1/6) return p + (q - p) * 6 * t;
          if (t < 1/2) return q;
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        };
        
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      
      const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };
    
    // Apply random hue shift on initial load
    const hsl = hexToHSL(baseColor);
    const randomShift = (Math.random() * 2 - 1) * shiftRange; // Random value between -shiftRange and +shiftRange
    const newHue = (hsl.h + randomShift + 360) % 360; // Ensure hue is between 0-360
    
    const shiftedColor = hslToHex(newHue, hsl.s, hsl.l);
    setCurrentColor(shiftedColor);
    
    // Gradually shift back to base color over 2 seconds
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = (timestamp - startTime) / 2000; // 2000ms = 2s
      
      if (progress < 1) {
        // Linear interpolation between shifted color and base color
        const currentHsl = hexToHSL(shiftedColor);
        const baseHsl = hexToHSL(baseColor);
        
        // Find shortest path for hue interpolation
        let hueDiff = baseHsl.h - currentHsl.h;
        if (hueDiff > 180) hueDiff -= 360;
        if (hueDiff < -180) hueDiff += 360;
        
        const interpolatedHue = currentHsl.h + hueDiff * progress;
        const interpolatedS = currentHsl.s + (baseHsl.s - currentHsl.s) * progress;
        const interpolatedL = currentHsl.l + (baseHsl.l - currentHsl.l) * progress;
        
        const interpolatedColor = hslToHex(
          (interpolatedHue + 360) % 360,
          interpolatedS,
          interpolatedL
        );
        
        setCurrentColor(interpolatedColor);
        requestAnimationFrame(animate);
      } else {
        setCurrentColor(baseColor);
      }
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [baseColor, shiftRange]);

  return currentColor;
}
