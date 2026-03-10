'use client';

import React, { useState } from 'react';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStepsInteractiveProps {
  steps: ProcessStep[];
}

const ProcessStepsInteractive: React.FC<ProcessStepsInteractiveProps> = ({ steps }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleIconClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Icons Grid - Initially centered, clickable */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleIconClick(idx)}
            >
              {/* Icon Circle */}
              <div
                className={`
                  w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full 
                  flex items-center justify-center text-3xl sm:text-4xl md:text-5xl
                  transition-all duration-300 ease-out
                  ${
                    selectedIndex === idx
                      ? 'bg-yellow-400 shadow-lg scale-110 -translate-y-2 sm:-translate-y-3'
                      : 'bg-white border-2 border-yellow-400 shadow-md hover:shadow-lg hover:scale-105'
                  }
                `}
              >
                {step.icon}
              </div>

              {/* Title - Always visible */}
              <h3
                className={`
                  text-xs sm:text-sm md:text-base font-bold text-red-900 mt-2 sm:mt-3 
                  text-center line-clamp-2 px-1
                  transition-transform duration-300
                  ${selectedIndex === idx ? 'md:mt-4' : ''}
                `}
              >
                {step.title}
              </h3>

              {/* Description - Appears when clicked */}
              {selectedIndex === idx && (
                <div className="mt-3 sm:mt-4 md:mt-6 min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed text-center px-1 animate-fadeIn">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Full width content for selected step - Hidden on all devices */}

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProcessStepsInteractive;
