'use client';

import React from 'react';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface FeaturesSliderProps {
  features?: Feature[];
}

// SVG Icons
const SecurePaymentIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 12 23 12 23S21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M10 12L11.5 13.5L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SupportIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrustedIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReturnsIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4V10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 20V14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 003.51 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const QualityIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26H21.77L16.84 12.44L18.93 18.71L12 14.53L5.07 18.71L7.16 12.44L2.23 8.26H8.91L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShippingIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6H23V18C23 18.5304 22.7893 19.0391 22.4142 19.4142C22.0391 19.7893 21.5304 20 21 20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 6L2.5 2H21.5L23 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="17" r="1.5" fill="currentColor"/>
    <circle cx="18" cy="17" r="1.5" fill="currentColor"/>
  </svg>
);

const FeaturesSlider: React.FC<FeaturesSliderProps> = ({
  features = [
    { icon: <SecurePaymentIcon />, text: 'Secure Payment' },
    { icon: <SupportIcon />, text: '24/7 Support' },
    { icon: <TrustedIcon />, text: '100% Trusted' },
    { icon: <ReturnsIcon />, text: 'Free Returns' },
    { icon: <QualityIcon />, text: 'Export Quality' },
    { icon: <ShippingIcon />, text: 'Free Shipping' },
  ],
}) => {
  return (
    <section className="bg-white py-4 xs:py-5 sm:py-6 md:py-8 lg:py-12 overflow-hidden">
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
          animation: slide 20s linear infinite;
        }

        @media (max-width: 640px) {
          .slider-track {
            animation: slide 15s linear infinite;
          }
        }
      `}</style>
      
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          <div className="slider-track flex whitespace-nowrap">
            {/* Original items */}
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 flex-shrink-0 text-gray-800 hover:text-yellow-600 transition-colors duration-300 active:text-yellow-700"
              >
                <div className="w-6 xs:w-7 sm:w-8 md:w-8 text-gray-800 hover:text-yellow-600 flex-shrink-0">{feature.icon}</div>
                <span className="text-xs xs:text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">{feature.text}</span>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {features.map((feature, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 flex-shrink-0 text-gray-800 hover:text-yellow-600 transition-colors duration-300 active:text-yellow-700"
              >
                <div className="w-6 xs:w-7 sm:w-8 md:w-8 text-gray-800 hover:text-yellow-600 flex-shrink-0">{feature.icon}</div>
                <span className="text-xs xs:text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSlider;
