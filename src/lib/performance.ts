
// Performance monitoring and optimization utilities
export interface PerformanceMetrics {
  navigationTiming: PerformanceNavigationTiming | null;
  paintTiming: PerformancePaintTiming[];
  resourceTiming: PerformanceResourceTiming[];
  memoryInfo: any;
  webVitals: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
  };
}

// Performance budget thresholds
export const PERFORMANCE_BUDGETS = {
  FCP: 1800, // First Contentful Paint
  LCP: 2500, // Largest Contentful Paint
  FID: 100,  // First Input Delay
  CLS: 0.1,  // Cumulative Layout Shift
  TTI: 3800, // Time to Interactive
  BUNDLE_SIZE: 250000, // 250KB
};

// Initialize Web Vitals monitoring
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals with correct imports
  import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }).catch(() => {
    console.log('Web Vitals not available');
  });

  // Monitor resource loading
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        } else if (entry.entryType === 'resource') {
          // Log slow resources
          if (entry.duration > 1000) {
            console.warn('Slow resource:', entry.name, entry.duration);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
  }
}

function onPerfEntry(metric: any) {
  console.log(`${metric.name}:`, metric.value);
  
  // Check against performance budgets
  const budget = PERFORMANCE_BUDGETS[metric.name as keyof typeof PERFORMANCE_BUDGETS];
  if (budget && metric.value > budget) {
    console.warn(`Performance budget exceeded for ${metric.name}: ${metric.value} > ${budget}`);
  }
}

// Check performance budgets
export function checkPerformanceBudget() {
  if (typeof window === 'undefined') return;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigation) {
    const metrics = {
      'Page Load Time': navigation.loadEventEnd - navigation.fetchStart,
      'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.fetchStart,
      'Time to Interactive': navigation.domInteractive - navigation.fetchStart,
    };

    Object.entries(metrics).forEach(([name, value]) => {
      console.log(`${name}: ${value}ms`);
    });
  }
}

// Image optimization utility
export function optimizeImageUrl(src: string, width?: number, quality: number = 75): string {
  if (!src.startsWith('http')) return src;
  
  // Add optimization parameters (works with many CDNs)
  const url = new URL(src);
  if (width) url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('auto', 'format');
  
  return url.toString();
}

// Preload critical resources
export function preloadCriticalResources() {
  const criticalResources = [
    '/fonts/primary-font.woff2',
    '/images/hero-bg.webp',
  ];

  criticalResources.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = href.includes('font') ? 'font' : 'image';
    if (href.includes('font')) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}
