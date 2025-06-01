
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  navigationTiming: PerformanceNavigationTiming | null;
  paintTiming: PerformancePaintTiming[];
  resourceTiming: PerformanceResourceTiming[];
  memoryInfo: any;
}

// Performance monitoring hook
export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    navigationTiming: null,
    paintTiming: [],
    resourceTiming: [],
    memoryInfo: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint') as PerformancePaintTiming[];
      const resource = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const memory = (performance as any).memory;

      setMetrics({
        navigationTiming: navigation,
        paintTiming: paint,
        resourceTiming: resource,
        memoryInfo: memory,
      });
    };

    // Update metrics after load
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
    }

    return () => {
      window.removeEventListener('load', updateMetrics);
    };
  }, []);

  const getPageLoadTime = () => {
    if (!metrics.navigationTiming) return 0;
    return metrics.navigationTiming.loadEventEnd - metrics.navigationTiming.navigationStart;
  };

  const getDOMContentLoadedTime = () => {
    if (!metrics.navigationTiming) return 0;
    return metrics.navigationTiming.domContentLoadedEventEnd - metrics.navigationTiming.navigationStart;
  };

  const getFirstContentfulPaint = () => {
    const fcp = metrics.paintTiming.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : 0;
  };

  return {
    metrics,
    getPageLoadTime,
    getDOMContentLoadedTime,
    getFirstContentfulPaint,
  };
}
