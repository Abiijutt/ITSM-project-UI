
import React, { useEffect } from 'react';
import { initPerformanceMonitoring, checkPerformanceBudget } from '@/lib/performance';

// Performance monitoring component
export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize Web Vitals monitoring
    initPerformanceMonitoring();
    
    // Check performance budgets after page load
    window.addEventListener('load', () => {
      setTimeout(checkPerformanceBudget, 1000);
    });
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-75 hover:opacity-100 transition-opacity">
      <div className="bg-black text-white text-xs px-2 py-1 rounded">
        📊 Performance Monitor Active
      </div>
    </div>
  );
};
