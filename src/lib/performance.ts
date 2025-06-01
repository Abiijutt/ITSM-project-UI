
// Web Vitals performance monitoring
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

export interface MetricData {
  name: string;
  value: number;
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Send metrics to analytics endpoint (can be configured for different services)
function sendToAnalytics(metric: MetricData) {
  // In development, just log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
    return;
  }

  // In production, send to your analytics service
  // Example: Google Analytics, Datadog, custom endpoint
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(metric),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(console.error);
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics); // Updated from onFID to onINP
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Performance budget checker
export function checkPerformanceBudget() {
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const metrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstByte: navigation.responseStart - navigation.requestStart,
    };

    // Define performance budgets (in milliseconds)
    const budgets = {
      domContentLoaded: 1500,
      loadComplete: 3000,
      firstByte: 200,
    };

    Object.entries(metrics).forEach(([metric, value]) => {
      const budget = budgets[metric as keyof typeof budgets];
      if (value > budget) {
        console.warn(`Performance budget exceeded for ${metric}: ${value}ms (budget: ${budget}ms)`);
      }
    });
  }
}
