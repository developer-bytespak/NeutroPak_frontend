'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title = "Nature's Purest Honey",
  subtitle = '100% Organic Raw Honey',
  backgroundImage = '/hero.png',
  mobileBackgroundImage = '/hero_mobile.png',
  ctaText = 'Shop Now',
  ctaLink = '/shop',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentImage = isHydrated && isMobile ? mobileBackgroundImage : backgroundImage;
  return (
    <section className="relative w-screen h-[100vh] overflow-hidden -mt-[60px] sm:-mt-[64px]">
      <img 
        src={currentImage} 
        alt="Hero Banner" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 z-10 px-3 xs:px-4 sm:px-6 md:px-12 pt-48 md:pt-56 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl xs:text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight text-center !text-white drop-shadow-lg">
          {title}
        </h1>
        <div className="w-full flex flex-col items-center">
          <p className="text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl mb-4 xs:mb-6 sm:mb-8 opacity-95 !text-white drop-shadow-lg">
            {subtitle}
          </p>
          <Link 
            href={ctaLink} 
            className="inline-flex items-center justify-center bg-yellow-500 text-white font-bold px-2 xs:px-3 sm:px-8 py-1 xs:py-2 sm:py-3 rounded-lg hover:bg-red-900 hover:text-yellow-300 transition-colors text-xs xs:text-sm md:text-base active:scale-95 transform transition-transform"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
