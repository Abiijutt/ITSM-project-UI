
import React from 'react';
import { useColorShift } from '@/hooks/useColorShift';

const StatsSection = () => {
  const accentColor = useColorShift();
  
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose AI WALA?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The future of digital agencies is here—with zero human intervention and maximum results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "250+", label: "Projects Delivered" },
            { value: "48hrs", label: "Average Turnaround" },
            { value: "85%", label: "Client Cost Savings" },
            { value: "24/7", label: "AI-Powered Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div 
                className="text-5xl font-black mb-2"
                style={{ color: accentColor }}
              >
                {stat.value}
              </div>
              <div className="text-xl text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
