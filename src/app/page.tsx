'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import ReviewCard from '@/components/ReviewCard';
import FeaturesSlider from '@/components/FeaturesSlider';

const HomePage = () => {
  // Sample data
  const categories = [
    {
      name: 'Wild Honey',
      description: 'Pure wild forest honey from untouched regions',
      image: '/wild-honey.jpg',
      link: '/shop?category=wild-honey',
    },
    {
      name: 'Farm Honey',
      description: 'Organic farm honey from trusted beekeepers',
      image: '/farm-honey.jpg',
      link: '/shop?category=farm-honey',
    },
  ];

  const trustBadges = [
    { icon: '❤️', text: '100% Organic Raw Honey' },
    { icon: '🔒', text: 'Money Back Guarantee' },
    { icon: '🚚', text: 'Free COD All Over Pakistan' },
  ];

  const valueProps = [
    {
      icon: '🐝',
      title: '100% Raw & Pure',
      description: 'Unprocessed, unheated, unfiltered goodness.',
    },
    {
      icon: '✓',
      title: 'Sourced From Trusted Beekeepers',
      description: 'Collected only from verified beekeepers with strict standards.',
    },
    {
      icon: '🚫',
      title: 'Zero Additives, Zero Processing',
      description: 'Nothing added, nothing removed — pure natural form.',
    },
    {
      icon: '🧪',
      title: 'Lab Tested for Quality',
      description: 'Ensures no sugar, chemicals, syrup, or dilution.',
    },
  ];

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
      description: 'Each batch undergoes lab testing for moisture, sucrose ratio, HMF levels, antibiotics, and adulteration. Only the batches that pass every parameter are bottled under the NutreoPak name.',
    },
    {
      icon: '🍯',
      title: 'Careful Packaging',
      description: 'Each batch is carefully packed without altering its natural state. Every jar is sealed fresh to maintain purity from the moment it leaves the hive.',
    },
  ];

  const reviews = [
    {
      author: 'Ahmed Khan',
      rating: 5,
      text: 'Highly recommended! The honey is pure and natural. My family loves it.',
      date: '2 weeks ago',
    },
    {
      author: 'Fatima Ali',
      rating: 5,
      text: 'Amazing quality and taste. It has the natural aroma that other brands lack.',
      date: '1 week ago',
    },
    {
      author: 'Hassan Shah',
      rating: 5,
      text: 'Outstanding quality and well trusted. Best honey I have ever tasted.',
      date: '3 days ago',
    },
  ];

  const faqItems = [
    {
      id: '1',
      question: 'What is raw honey?',
      answer: 'Raw honey is honey that is taken directly from the hive, strained to remove impurities, and not heated or heavily processed. This helps preserve its natural enzymes, pollen, and nutrients.',
    },
    {
      id: '2',
      question: 'Is raw honey safe to consume daily?',
      answer: 'Yes, raw honey is safe for daily consumption for most adults. It provides natural energy, antimicrobial properties, and various health benefits. However, infants under 1 year should avoid it due to botulism risk.',
    },
    {
      id: '3',
      question: 'How is raw honey different from commercial honey?',
      answer: 'Raw honey retains all its natural enzymes, nutrients, and pollen, while commercial honey is often heated and processed, which removes beneficial compounds. Raw honey is also unfiltered and unrefined.',
    },
    {
      id: '4',
      question: 'Does raw honey crystallize?',
      answer: 'Yes, raw honey naturally crystallizes as a sign of purity and authenticity. This is a normal process and doesn\'t indicate spoilage. You can gently warm it to return to liquid form.',
    },
    {
      id: '5',
      question: 'Is crystallized honey spoiled or fake?',
      answer: 'No, crystallized honey is not spoiled or fake. It\'s actually proof of purity and authenticity. Pure honey crystallizes naturally at cool temperatures due to its glucose content.',
    },
    {
      id: '6',
      question: 'What makes NutreoPak honey special?',
      answer: 'We source directly from trusted beekeepers, lab-test every batch for purity, use no additives or heating, and maintain cold extraction methods to preserve all natural enzymes and nutrients.',
    },
    {
      id: '7',
      question: 'How is NutreoPak honey sourced?',
      answer: 'We partner with ethical, small-scale beekeepers who practice sustainable beekeeping. Our honey is harvested naturally, minimally processed, and never mixed with inferior quality honey.',
    },
    {
      id: '8',
      question: 'Is all NutreoPak honey certified organic?',
      answer: 'While not all batches have formal certification, our honey is produced to organic standards with no pesticides, chemicals, or additives. Each batch undergoes rigorous lab testing.',
    },
    {
      id: '9',
      question: 'What are the best ways to consume raw honey?',
      answer: 'Consume raw honey directly by the spoon, add to lukewarm tea or water, drizzle on breakfast foods, or use in smoothies. Avoid heating above 35°C to preserve benefits.',
    },
    {
      id: '10',
      question: 'Can I use honey as a sweetener in hot drinks?',
      answer: 'Yes, but add honey after the drink cools to lukewarm temperature. High heat destroys enzymes and antioxidants. For maximum health benefits, consume raw.',
    },
    {
      id: '11',
      question: 'Does raw honey help with cough and throat problems?',
      answer: 'Traditional use suggests raw honey soothes throat irritation and may help suppress coughs. A spoonful of raw honey or a teaspoon in warm water can be beneficial.',
    },
    {
      id: '12',
      question: 'How should I store honey properly?',
      answer: 'Store honey in a cool, dry place away from direct sunlight and heat sources. Room temperature is ideal. Sealed jars preserve honey indefinitely. Avoid refrigeration as it speeds crystallization.',
    },
    {
      id: '13',
      question: 'Does honey ever go bad or expire?',
      answer: 'Pure raw honey never spoils or expires if stored properly. The expiry date on our jars is a regulatory requirement. Archaeologists have found 3000-year-old honey that was still edible!',
    },
    {
      id: '14',
      question: 'Can honey be used after it crystallizes?',
      answer: 'Absolutely! Crystallized honey is perfectly safe and fine to consume. To return it to liquid form, gently warm the jar in warm water (don\'t exceed 35°C).',
    },
    {
      id: '15',
      question: 'How long does delivery take?',
      answer: 'We offer FREE COD delivery throughout Pakistan. Standard delivery takes 3-5 business days depending on your location. Express delivery may be available in select areas.',
    },
    {
      id: '16',
      question: 'Do you ship outside Pakistan?',
      answer: 'Currently, we only deliver within Pakistan. For international inquiries, please contact our support team at +92 337 9788677.',
    },
    {
      id: '17',
      question: 'What if my jar arrives damaged or leaked?',
      answer: 'We pack carefully for safe delivery. If damage occurs, contact us immediately with photos. We\'ll replace your order or issue a full refund at no cost.',
    },
    {
      id: '18',
      question: 'Do you offer wholesale prices?',
      answer: 'Yes! We offer attractive wholesale pricing for bulk orders. Contact us at +92 337 9788677 or nutreopak@gmail.com for wholesale inquiries and custom pricing.',
    },
    {
      id: '19',
      question: 'What\'s the minimum quantity for wholesale?',
      answer: 'Minimum wholesale order is typically 10kg. We can discuss bulk quantities based on your business needs.',
    },
    {
      id: '20',
      question: 'How can I contact NutreoPak support?',
      answer: 'You can reach us via WhatsApp at +92 337 9788677, email at nutreopak@gmail.com, or fill out our contact form on the website. We respond within 24 hours.',
    },
  ];

  const faqCategories = [
    {
      title: 'Honey Basics: Purity, Safety & What to Know',
      id: 'basics',
      items: faqItems.slice(0, 3),
    },
    {
      title: 'About NutreoPak Honey',
      id: 'about',
      items: faqItems.slice(5, 8),
    },
  ];

  const topProducts = [
    {
      slug: 'cinnamon-infused-honey-500g',
      name: 'Cinnamon Infused Honey (500g)',
      price: 1450,
      image: '/cinamin(500g).JPG',
      reviews: 150,
    },
    {
      slug: 'chilli-infused-honey-500g',
      name: 'Chilli Infused Honey (500g)',
      price: 1450,
      image: '/chilli(500g).JPG',
      reviews: 200,
    },
    {
      slug: 'acacia-honey-500g',
      name: 'Acacia Honey (500g)',
      price: 1380,
      image: '/acacia(500g).JPG',
      reviews: 180,
    },
    {
      slug: 'acacia-honey-250g',
      name: 'Acacia Honey (250g)',
      price: 850,
      image: '/acaciaa(250g).png',
      reviews: 220,
    },
    {
      slug: 'chilli-infused-honey-250g',
      name: 'Chilli Infused Honey (250g)',
      price: 930,
      image: '/chilli(250g).png',
      reviews: 160,
    },
    {
      slug: 'cinnamon-infused-honey-250g',
      name: 'Cinnamon Infused Honey (250g)',
      price: 930,
      image: '/cinamin_infused(250g).png',
      reviews: 190,
    },
    {
      slug: 'gift-box-250g',
      name: 'Gift Box (250g)',
      price: 2450,
      image: '/giftbox.jpeg',
      reviews: 210,
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <HeroBanner
        title="Raw Honey, As Nature Made It."
        subtitle="100% Organic Raw Honey"
        backgroundImage="/hero_sec.png"
        ctaText="Shop Pure Honey Now"
        ctaLink="/shop"
      />

      {/* Features Slider */}
      <FeaturesSlider />

      {/* Why Choose Section */}
      <section className="py-16 bg-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Why Choose NutreoPak?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6 leading-tight">
                Where Sweetness Meets Health
              </h2>
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                NutreoPak source honey from ethical, small-scale beekeepers across Pakistan 
                and tested for purity before it reaches you. No heating, no additives, 
                no industrial processing — just real honey with all its natural enzymes, 
                pollen, flavor, and health benefits intact.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-white text-red-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-white transition-colors"
              >
                Know More About Us
              </Link>
            </div>

            {/* Right Side - Cards */}
            <div className="space-y-4">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="group bg-yellow-200 rounded-lg p-6 flex gap-6 items-start border-2 border-yellow-300 hover:shadow-lg transition-shadow">
                  <div className="bg-yellow-300 rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 text-4xl group-hover:bg-red-800 transition-colors duration-300">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">{prop.title}</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-red-900 mb-4">Top Selling Honey</h2>
            <p className="section-subtitle">Best Sellers From Our Collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gold-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                <Image
                  src="/abouttri.jpg"
                  alt="NutreoPak - Process"
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
              <p className="text-sm font-semibold text-gray-700 italic mb-3">The Story Behind Every Drop</p>
              <h2 className="text-5xl font-bold text-red-900 mb-6 leading-tight">
                Our Process
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At NutreoPak, purity isn't just a claim — it's a process. Every jar begins in the untouched floral regions of Pakistan, where our partner beekeepers use ethical, traditional methods passed down for generations. From hive to bottle, every step is controlled, tested, and protected so you receive honey exactly as nature created it: raw, unheated, enzyme-rich, and completely free from additives or adulteration.
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

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-red-900 mb-4">Customer Reviews</h2>
            <p className="section-subtitle">4.9/5 ⭐ Based on 800+ verified customer reviews</p>
          </div>
          
          {/* Sliding Reviews Container */}
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-slide-left hover:[animation-play-state:paused]">
              {/* First set of reviews */}
              {reviews.map((review, idx) => (
                <div key={`review-${idx}`} className="flex-shrink-0 w-96">
                  <ReviewCard {...review} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {reviews.map((review, idx) => (
                <div key={`review-dup-${idx}`} className="flex-shrink-0 w-96">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-red-900">FAQs</h2>
          
          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-lg overflow-hidden h-96">
                <img src="/home_faq.jpg" alt="FAQ" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Content - FAQ Items */}
            <div className="lg:col-span-3 space-y-8">
              {faqCategories.map((category, idx) => (
                <section key={idx} id={category.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h2 className="text-2xl font-bold text-amber-900 mb-6">{category.title}</h2>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <details
                        key={item.id}
                        className="border border-gray-200 rounded-lg transition"
                      >
                        <summary className="cursor-pointer px-5 py-4 font-semibold text-amber-900 hover:bg-gold-50 transition flex justify-between items-center list-none">
                          <span>— {item.question}</span>
                          <span className="text-amber-600 transition group-open:rotate-180">+</span>
                        </summary>
                        <div className="px-5 py-4 bg-gold-50 border-t border-gray-200 text-gray-700 leading-relaxed">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/faqs" className="btn-primary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
