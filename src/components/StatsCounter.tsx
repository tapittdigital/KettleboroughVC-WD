import React, { useState, useEffect } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ 
  value, 
  label, 
  duration = 2000,
  prefix = "",
  suffix = ""
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return (
    <div className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold mb-1">
        {prefix}{count}{suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  return (
    <section className="py-8 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact heading that takes less vertical space */}
        <h2 className="font-serif text-2xl font-semibold text-center mb-6">Our Impact by Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <StatItem
              value={52}
              label="Portfolio Companies"
            />
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <StatItem
              value={287}
              label="Jobs Created"
              prefix=""
              suffix="M+"
            />
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <StatItem
              value={750}
              label="Capital Deployed"
              prefix="$"
              suffix="M"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;