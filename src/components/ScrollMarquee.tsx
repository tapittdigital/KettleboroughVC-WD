
import React from 'react';

interface ScrollMarqueeProps {
  logos: string[];
}

const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({ logos }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee">
        {logos.map((logo, index) => (
          <div 
            key={`logo-${index}`} 
            className="flex items-center justify-center mx-8 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          >
            <span className="text-lg font-medium">{logo}</span>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div 
            key={`logo-dup-${index}`} 
            className="flex items-center justify-center mx-8 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          >
            <span className="text-lg font-medium">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollMarquee;
