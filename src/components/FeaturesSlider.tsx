'use client';

import React from 'react';

interface Feature {
  icon: string;
  text: string;
}

interface FeaturesSliderProps {
  features?: Feature[];
}

const FeaturesSlider: React.FC<FeaturesSliderProps> = ({
  features = [
    { icon: '🔒', text: 'Secure Payment' },
    { icon: '⏰', text: '24/7 Support' },
    { icon: '✓', text: '100% Trusted' },
    { icon: '↩️', text: 'Free Returns' },
    { icon: '🌿', text: 'Export Quality' },
    { icon: '🚚', text: 'Free Shipping' },
  ],
}) => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .slider-track {
          animation: slide 15s linear infinite;
        }
      `}</style>
      
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <div className="slider-track flex whitespace-nowrap">
            {/* Original items */}
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-8 py-4 flex-shrink-0 text-gray-800 hover:text-red-800 transition-colors duration-300"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm md:text-base font-semibold">{feature.text}</span>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {features.map((feature, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex items-center gap-3 px-8 py-4 flex-shrink-0 text-gray-800 hover:text-red-800 transition-colors duration-300"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm md:text-base font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSlider;
