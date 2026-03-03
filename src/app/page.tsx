'use client';

import React from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';
import ProcessSteps from '@/components/ProcessSteps';
import BlogCard from '@/components/BlogCard';
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
      id: 1,
      title: 'Sourcing',
      description: 'Our honey comes from Sidr, Acacia, Forest regions far from pollution.',
    },
    {
      id: 2,
      title: 'Zero Sugar Feeding',
      description: 'We work with beekeepers who never use sugar syrup.',
    },
    {
      id: 3,
      title: 'Cold Extraction',
      description: 'Extracted at natural temperatures, never boiled or pasteurized.',
    },
    {
      id: 4,
      title: 'Gentle Filtration',
      description: 'Triple-filtration removes debris while keeping enzymes intact.',
    },
    {
      id: 5,
      title: 'Lab Testing',
      description: 'Each batch tested for purity, moisture, and quality parameters.',
    },
    {
      id: 6,
      title: 'Careful Packaging',
      description: 'Sealed fresh to maintain purity from hive to your home.',
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
      question: 'Is NeutroPak honey 100% pure and natural?',
      answer: 'Yes. NeutroPak offers raw, unprocessed, and chemical-free honey sourced directly from trusted beekeepers. No sugar, no additives, no heating.',
      category: 'Basics',
    },
    {
      id: '2',
      question: 'Does your honey crystallize? Is it fake if it does?',
      answer: 'Crystallization is a natural process that indicates pure honey. Real honey crystallizes when exposed to cool temperatures.',
      category: 'Basics',
    },
    {
      id: '3',
      question: 'What makes NeutroPak different from regular store-bought honey?',
      answer: 'We ensure direct sourcing from trusted beekeepers, are lab-tested for purity, and never add sugar or additives.',
      category: 'Basics',
    },
    {
      id: '4',
      question: 'How long does delivery take within Pakistan?',
      answer: 'We offer free COD delivery throughout Pakistan. Delivery typically takes 3-5 business days.',
      category: 'Shipping',
    },
    {
      id: '5',
      question: 'Can diabetics consume NeutroPak honey?',
      answer: 'While honey is natural, diabetics should consult their doctors before consumption.',
      category: 'Health',
    },
  ];

  const blogPosts = [
    {
      title: 'Does Heating Honey Destroy Honey Benefits?',
      excerpt: 'Learn how heat affects honey nutrients and the safest way to consume honey.',
      slug: 'heating-honey-benefits',
      date: 'January 16, 2026',
      category: 'Health',
    },
    {
      title: 'Which Honey Is Best for Which Health Problem?',
      excerpt: 'Different honey types have different therapeutic benefits. Find the right one for you.',
      slug: 'best-honey-health-problems',
      date: 'January 4, 2026',
      category: 'Health',
    },
    {
      title: 'Honey Never Expires?',
      excerpt: 'The truth about honey expiry dates that often confuse consumers.',
      slug: 'honey-never-expires',
      date: 'December 25, 2025',
      category: 'Education',
    },
  ];

  const topProducts = [
    {
      slug: 'sidr-honey-125g',
      name: 'Sidr (Beri) Honey - 125g',
      price: 799,
      image: '/sidr-honey-125g.jpg',
      reviews: 150,
    },
    {
      slug: 'sidr-honey-250g',
      name: 'Sidr (Beri) Honey - 250g',
      price: 1599,
      image: '/sidr-honey-250g.jpg',
      reviews: 200,
    },
    {
      slug: 'sidr-honey-500g',
      name: 'Sidr (Beri) Honey - 500g',
      price: 2399,
      image: '/sidr-honey-500g.jpg',
      reviews: 180,
    },
    {
      slug: 'sidr-honey-1kg',
      name: 'Sidr (Beri) Honey - 1kg',
      price: 4399,
      image: '/sidr-honey-1kg.jpg',
      reviews: 220,
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
              <p className="text-sm font-semibold text-gray-700 mb-2">Why Choose NeutroPak?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6 leading-tight">
                Where Sweetness Meets Health
              </h2>
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                NeutroPak source honey from ethical, small-scale beekeepers across Pakistan 
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

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Find the Honey That Fits Your Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Top Selling Honey</h2>
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
      <section className="py-16 bg-gradient-to-b from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            title="Our Process"
            subtitle="From Hive to Bottle - Ensuring Pure Honey"
            steps={processSteps}
          />
        </div>
      </section>

      {/* About/Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Story Behind Every Drop
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                At NeutroPak, purity isn't just a claim — it's a process. Every jar begins in the 
                untouched regions of Pakistan, where our partner beekeepers use ethical, traditional 
                methods passed down for generations.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From hive to bottle, every step is controlled, tested, and protected so you receive 
                honey exactly as nature created it: raw, unheated, enzyme-rich, and completely free 
                from additives.
              </p>
              <Link href="/about" className="btn-primary">
                Know More About Us
              </Link>
            </div>
            <div className="bg-gold-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-gray-400 text-lg">NeutroPak Beekeepers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Real Reviews. Real Purity. Real Honey.</h2>
            <p className="section-subtitle">4.9/5 ⭐ Based on 800+ verified customer reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems.slice(0, 3)} />
          <div className="text-center mt-8">
            <Link href="/faqs" className="btn-primary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Real Knowledge, With a Reason</h2>
            <p className="section-subtitle">Science-Backed Blog Posts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} image="/blog-placeholder.jpg" />
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="btn-primary">
              Read All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
