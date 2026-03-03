'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  const processSteps = [
    {
      icon: '🐝',
      title: 'Sourcing',
      description: 'Our honey comes from Sidr, Acacia, Forest, Wildflower and Himalayan regions — far from pollution and agriculture chemicals. We partner only with beekeepers who follow natural foraging and avoid sugar-feeding, antibiotics, and artificial hives.',
    },
    {
      icon: '🚫',
      title: 'Zero-Sugar Feeding',
      description: 'We strictly work with beekeepers who never feed sugar syrup to bees during production season. This ensures the honey is produced from flowers only, not sugar. Pure honey from pure sources.',
    },
    {
      icon: '❄️',
      title: 'Cold Extraction',
      description: 'Our honey is extracted at natural temperatures (below 35°C). We never boil, pasteurize, or over-filter our honey, preserving enzymes, antioxidants, pollen grains, and natural texture.',
    },
    {
      icon: '🔍',
      title: 'Triple-Stage Filtration',
      description: 'We use a gentle triple-filtration process to remove hive debris, wax particles, and impurities — while keeping all natural enzymes, pollen and nutrients intact.',
    },
    {
      icon: '🧪',
      title: 'Lab Test',
      description: 'Each batch undergoes lab testing for moisture, sucrose ratio, HMF levels, antibiotics, and adulteration. Only the batches that pass every parameter are bottled under the NeutroPak name.',
    },
    {
      icon: '🍯',
      title: 'Careful Packaging',
      description: 'Each batch is carefully packed without altering its natural state. Every jar is sealed fresh to maintain purity from the moment it leaves the hive.',
    },
  ];

  return (
    <main className="bg-white">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-32"
        style={{
          backgroundImage: 'url(/about_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            About NeutroPak
          </h1>
          <p className="text-lg text-yellow-50">Our Story, Our Mission, Our Commitment to Purity</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-pink-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="bg-yellow-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                  <div className="text-gray-400 text-lg">NeutroPak - Honey Image</div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold text-gray-700 italic mb-3">About NeutroPak - Pakistan's Trusted Honey Brand</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-red-900 mb-6 leading-tight">
                  Who We Are?
                </h1>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  NeutroPak is a premium honey brand dedicated to delivering honey in its purest, most natural form. NeutroPak is built on a simple belief — purity should never be compromised. We focus on ethical harvesting, honest ingredients, and transparent practices so you always know exactly what you're bringing home. Our commitment begins at the hive and ends in your jar — with nothing added, nothing taken away.
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  Shop Pure Honey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-sm font-semibold text-gray-700 italic mb-3">How It All Started</p>
              <h2 className="text-5xl font-bold text-red-900 mb-6 leading-tight">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                NeutroPak's journey began in 2018 when Jawed, inspired by local beekeepers, started his own beekeeping practice. For two years he worked hands-on with hives, learning every detail of natural honey production. As demand grew, he entered the market full-time — connecting directly with seasoned beekeepers, studying different honey varieties across Pakistan, and supplying large dealers and wholesalers.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Over the years, he developed a rare skill: the ability to identify real and fake honey instantly, even when many experienced sellers couldn't. Later, I (Irfan Ullah) joined him with a shared vision — to bring this expertise and honesty online. Together, we built NeutroPak to offer pure honey in both retail and wholesale, sourced only from the regions where each specific honey naturally grows.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With Jawed's experience and our commitment to purity, we are confident in delivering both unmatched quality and reliable quantity to every customer.
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <div className="bg-gold-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                <div className="text-gray-400 text-lg">Beekeeping Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gold-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                <div className="text-gray-400 text-lg">Beekeeper Image</div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-gray-700 italic mb-3">The Story Behind Every Drop</p>
              <h2 className="text-5xl font-bold text-red-900 mb-6 leading-tight">
                Our Process
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At NeutroPak, purity isn't just a claim — it's a process. Every jar begins in the untouched floral regions of Pakistan, where our partner beekeepers use ethical, traditional methods passed down for generations. From hive to bottle, every step is controlled, tested, and protected so you receive honey exactly as nature created it: raw, unheated, enzyme-rich, and completely free from additives or adulteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          {/* Timeline Icons Header */}
          <div className="flex justify-between items-center mb-16 gap-2">
            {processSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center flex-shrink-0 flex-1">
                  <div className="text-5xl text-yellow-500 mb-4">{step.icon}</div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="w-16 h-1 bg-yellow-500 flex-shrink-0 -mx-8" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Process Details Grid - 6 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center px-2">
                <h3 className="text-lg font-bold text-red-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Honey?</h2>
          <p className="text-lg mb-8 opacity-95">We're here to help. Contact us anytime.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
