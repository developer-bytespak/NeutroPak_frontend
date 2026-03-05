import React from 'react';
import Link from 'next/link';

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title = 'Raw Honey, As Nature Made It.',
  subtitle = '100% Organic Raw Honey',
  backgroundImage = '/hero-banner.jpg',
  ctaText = 'Shop Now',
  ctaLink = '/shop',
}) => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-cover flex flex-col md:flex-row items-start md:items-center justify-start overflow-hidden pt-4 md:pt-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-left text-white px-3 xs:px-4 sm:px-6 md:px-12 max-w-2xl w-full">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight max-w-xs xs:max-w-sm sm:max-w-none">
          {title}
        </h1>
        <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 xs:mb-6 sm:mb-8 opacity-95">
          {subtitle}
        </p>
        <Link 
          href={ctaLink} 
          className="inline-block bg-yellow-500 text-white font-bold px-4 xs:px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-red-900 hover:text-yellow-300 transition-colors text-xs xs:text-sm sm:text-base active:scale-95 transform transition-transform"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
