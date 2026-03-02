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
      className="relative w-full min-h-screen bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-95">
          {subtitle}
        </p>
        <Link href={ctaLink} className="btn-primary inline-block">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
