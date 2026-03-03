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
      className="relative w-screen h-screen bg-center bg-cover flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-left text-white px-4 md:px-12 max-w-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-95">
          {subtitle}
        </p>
        <Link href={ctaLink} className="inline-block bg-yellow-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-900 hover:text-yellow-300 transition-colors">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
