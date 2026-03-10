'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProcessStepsInteractive from '@/components/ProcessStepsInteractive';

const AboutPage = () => {
  const processSteps = [
    {
      icon: '🐝',
      title: 'Sourcing',
      description: 'Sourced from pristine regions: Sidr, Acacia, Forest, and Himalayan varieties. Pure, natural, no additives or antibiotics.',
    },
    {
      icon: '🚫',
      title: 'Zero-Sugar Feeding',
      description: 'Bees forage on flowers only. No sugar syrup added during production season. Pure honey from pure sources.',
    },
    {
      icon: '❄️',
      title: 'Cold Extraction',
      description: 'Extracted at natural temperatures below 35°C. No boiling or over-filtering. All enzymes and nutrients preserved.',
    },
    {
      icon: '🔍',
      title: 'Triple-Stage Filtration',
      description: 'Gentle filtration removes debris while keeping natural enzymes, pollen, and nutrients intact.',
    },
    {
      icon: '🧪',
      title: 'Lab Test',
      description: 'Every batch tested for purity, moisture, HMF levels, and antibiotics. Only the best gets bottled.',
    },
    {
      icon: '🍯',
      title: 'Careful Packaging',
      description: 'Each jar sealed fresh without altering its natural state. Maintains purity from hive to home.',
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-12 sm:py-20 md:py-32"
        style={{
          backgroundImage: 'url(/about_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            About NutreoPak
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-yellow-50 drop-shadow-lg">Our Story, Our Mission, Our Commitment to Purity</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-pink-50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-yellow-100 rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center">
                  <Image
                    src="/whoweare.png"
                    alt="NutreoPak - Who We Are"
                    width={500}
                    height={400}
                    priority
                    quality={100}
                    unoptimized
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 italic mb-2 sm:mb-3 text-center lg:text-left">About NutreoPak - Pakistan's Trusted Honey Brand</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                  Who We Are?
                </h1>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                  At NutreoPak, we believe that true quality begins with purity. As a premium honey brand, our mission is to provide honey in its most natural and unaltered state. We work closely with ethical beekeepers and maintain transparent practices to ensure every jar reflects honesty, care, and authenticity. From the hive to your home, NutreoPak delivers honey just as nature created it pure, simple, and uncompromised.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    Shop Pure Honey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 italic mb-2 sm:mb-3 text-center lg:text-left">How It All Started</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                Our Story
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed text-center lg:text-left">
                NutreoPak's journey began with a deep interest in traditional beekeeping and the natural process of honey production. What started as hands-on work with beehives gradually turned into valuable experience in understanding how pure honey is produced and harvested.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed text-center lg:text-left">
                As knowledge and demand grew, the work expanded into the broader honey market by building relationships with experienced beekeepers across Pakistan and studying different regional honey varieties. This exposure developed a strong ability to identify authentic honey and maintain consistent quality while supplying dealers and wholesalers.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                NutreoPak was later established to bring this expertise directly to customers through an online platform. The brand offers natural honey for both retail and wholesale buyers, carefully sourced from the regions where each variety naturally grows, with a strong commitment to purity, quality, and reliability.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex items-center justify-center h-full">
              <div className="bg-gold-100 rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 w-full flex items-center justify-center mt-16 sm:mt-24">
                <Image
                  src="/our_story.png"
                  alt="NutreoPak - Our Story"
                  width={500}
                  height={400}
                  priority
                  quality={100}
                  unoptimized
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gold-100 rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <Image
                  src="/process.png"
                  alt="NutreoPak - Our Process"
                  width={500}
                  height={400}
                  priority
                  quality={100}
                  unoptimized
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 italic mb-2 sm:mb-3 text-center lg:text-left">The Story Behind Every Drop</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                Our Process
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed text-center lg:text-left">
                At NutreoPak, purity is not merely a claim but a standard maintained throughout the entire process. Each jar of honey originates from the natural floral regions of Pakistan, where experienced beekeepers follow responsible and traditional beekeeping practices that have been preserved over generations.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                From the collection of honey at the hive to its final packaging, every stage is carefully handled and monitored to maintain its natural quality. The honey is kept in its raw form, without excessive heating or unnecessary processing, preserving its natural enzymes and nutritional value while ensuring it remains completely free from additives or adulteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Interactive */}
      <ProcessStepsInteractive steps={processSteps} />

      {/* Contact CTA */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Questions About Our Honey?</h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-95">We're here to help. Contact us anytime.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-yellow-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
