
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-4 rounded-md"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl p-6 space-y-4 shadow-sm border border-gray-100">
    <Skeleton className="h-6 w-3/4 rounded-md" />
    <SkeletonLoader lines={3} />
    <Skeleton className="h-10 w-1/3 rounded-md" />
  </div>
);

export const ImageSkeleton = ({ className }: { className?: string }) => (
  <Skeleton className={`rounded-lg ${className}`} />
);

export default SkeletonLoader;
