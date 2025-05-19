
import React, { useEffect, useState } from 'react';
import { PricingTier, pricingTiers } from '@/lib/pricingData';
import { useColorShift } from '@/hooks/useColorShift';

interface QuoteCalculatorProps {
  selectedTier: string;
  selectedServices: string[];
}

const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ 
  selectedTier, 
  selectedServices 
}) => {
  const accentColor = useColorShift();
  const [total, setTotal] = useState(0);
  const [currentTier, setCurrentTier] = useState<PricingTier | null>(null);

  useEffect(() => {
    const tier = pricingTiers.find(t => t.revenueBracket === selectedTier) || pricingTiers[0];
    setCurrentTier(tier);
    
    // Calculate total based on selected services
    let newTotal = 0;
    if (tier) {
      selectedServices.forEach(service => {
        switch (service) {
          case 'branding':
            newTotal += tier.services.branding;
            break;
          case 'website':
            newTotal += tier.services.website;
            break;
          case 'social':
            newTotal += tier.services.social;
            break;
          case 'video':
            newTotal += tier.services.video;
            break;
          case 'model3d':
            newTotal += tier.services.model3d;
            break;
        }
      });
    }
    
    // Animate the total value
    const startValue = total;
    const endValue = newTotal;
    const duration = 1000; // ms
    const startTime = performance.now();
    
    const animateTotal = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = startValue + (endValue - startValue) * progress;
      setTotal(Math.round(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animateTotal);
      }
    };
    
    requestAnimationFrame(animateTotal);
  }, [selectedTier, selectedServices]);

  if (!currentTier) {
    return <div>Loading calculator...</div>;
  }

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card-aiwala">
      <h3 className="font-bold text-xl mb-4">Your Custom Quote</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 font-semibold">Service</th>
              <th className="py-3 px-4 font-semibold text-right">Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {selectedServices.includes('branding') && (
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Brand Package</td>
                <td className="py-3 px-4 text-right">{formatNumber(currentTier.services.branding)}</td>
              </tr>
            )}
            {selectedServices.includes('website') && (
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Website & UX</td>
                <td className="py-3 px-4 text-right">{formatNumber(currentTier.services.website)}</td>
              </tr>
            )}
            {selectedServices.includes('social') && (
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Social & Content</td>
                <td className="py-3 px-4 text-right">{formatNumber(currentTier.services.social)}</td>
              </tr>
            )}
            {selectedServices.includes('video') && (
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Video Ads & AI Copy</td>
                <td className="py-3 px-4 text-right">{formatNumber(currentTier.services.video)}</td>
              </tr>
            )}
            {selectedServices.includes('model3d') && (
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">3D Rickshaw Bot</td>
                <td className="py-3 px-4 text-right">{formatNumber(currentTier.services.model3d)}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 font-bold text-lg">Total</td>
              <td 
                className="py-3 px-4 text-right font-bold text-lg"
                style={{ color: accentColor }}
              >
                {formatNumber(total)} PKR
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      <p className="text-sm text-gray-500 mt-4">
        Based on {currentTier.revenueRange} revenue bracket
      </p>
      
      <button 
        className="btn-aiwala w-full mt-6"
        style={{ backgroundColor: accentColor }}
      >
        Get Started Now
      </button>
    </div>
  );
};

export default QuoteCalculator;
