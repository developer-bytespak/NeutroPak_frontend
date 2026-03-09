'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import ReviewCard from '@/components/ReviewCard';
import FeaturesSlider from '@/components/FeaturesSlider';
import ProcessStepsInteractive from '@/components/ProcessStepsInteractive';
import { productService } from '@/services/productService';

interface Product {
  id: string | number;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  imageUrl?: string;
}

const HomePage = () => {
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedFaqCategory, setExpandedFaqCategory] = useState<Set<number>>(new Set());

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProducts(1, 100);
        console.log('Home page - API Response:', response);
        
        // Extract products from response (axios wraps in response.data, API wraps in data field)
        const productsFromResponse = response?.data?.data?.products as unknown;
        let productsData: Product[] = [];
        
        if (Array.isArray(productsFromResponse)) {
          productsData = productsFromResponse;
        }
        
        if (productsData.length > 0) {
          setTopProducts(productsData);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  // Sample data
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
    {
      title: 'Ordering, Delivery & Support',
      id: 'ordering',
      items: faqItems.slice(15, 18),
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Banner */}
      <HeroBanner
        title="Nature's Purest Honey"
        subtitle="100% Organic Raw Honey"
        backgroundImage="/heroo_sec.png"
        ctaText="Shop Pure Honey Now"
        ctaLink="/shop"
      />

      {/* Features Slider */}
      <FeaturesSlider />

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-yellow-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Side */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 text-center md:text-left">Why Choose NutreoPak?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 mb-4 md:mb-6 leading-tight text-center md:text-left">
                Where Sweetness Meets Health
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 md:mb-8 leading-relaxed">
                NutreoPak source honey from ethical, small-scale beekeepers across Pakistan 
                and tested for purity before it reaches you. No heating, no additives, 
                no industrial processing — just real honey with all its natural enzymes, 
                pollen, flavor, and health benefits intact.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center bg-white text-red-900 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-yellow-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Know More About Us
                </Link>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="space-y-3">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="group bg-yellow-300 rounded-lg p-3 sm:p-3 md:p-5 flex gap-3 items-start border-2 border-yellow-400 hover:shadow-lg transition-shadow">
                  <div className="bg-yellow-300 rounded-full w-14 sm:w-16 md:w-18 h-14 sm:h-16 md:h-18 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl md:text-2xl group-hover:bg-red-800 transition-colors duration-300">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-red-900 mb-0.5 md:mb-1">{prop.title}</h3>
                    <p className="text-xs sm:text-sm md:text-sm text-gray-800 leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-8 sm:py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-2 md:mb-4">Top Selling Honey</h2>
            <p className="section-subtitle text-sm sm:text-base md:text-lg">Best Sellers From Our Collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {loading ? (
              <p className="text-center col-span-full">Loading products...</p>
            ) : topProducts.length > 0 ? (
              topProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={String(product.id)}
                  name={product.name}
                  price={product.price}
                  image={product.imageUrl || '/product-placeholder.jpg'}
                  slug={`product-${product.id}`}
                  category={product.category}
                  description={product.description}
                  inStock={product.stock > 0}
                />
              ))
            ) : (
              <p className="text-center col-span-full">No products available</p>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gold-100 rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center">
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

      {/* Reviews Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-2 sm:mb-4">Customer Reviews</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">4.9/5 ⭐ Based on 800+ verified customer reviews</p>
          </div>
          
          {/* Sliding Reviews Container - Responsive */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex gap-4 md:gap-6 lg:gap-8 animate-slide-left hover:[animation-play-state:paused]">
              {/* First set of reviews */}
              {reviews.map((review, idx) => (
                <div key={`review-${idx}`} className="flex-shrink-0 w-72 sm:w-80 md:w-96">
                  <ReviewCard {...review} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {reviews.map((review, idx) => (
                <div key={`review-dup-${idx}`} className="flex-shrink-0 w-72 sm:w-80 md:w-96">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Grid - Shows on mobile */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((review, idx) => (
              <div key={`mobile-review-${idx}`}>
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-900 mb-2 sm:mb-4">FAQs</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Everything you need to know about NutreoPak honey</p>
          </div>
          
          {/* Main Content - Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Left Sidebar - Image - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block">
              <div className="sticky top-20 rounded-lg overflow-hidden h-64 md:h-80 lg:h-96">
                <img src="/home_faq.jpg" alt="FAQ" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Content - FAQ Items */}
            <div className="md:col-span-3 space-y-4 md:space-y-6 lg:space-y-8">
              {faqCategories.map((category, idx) => (
                <section key={idx} id={category.id} className="bg-white rounded-lg border border-gray-200">
                  <details
                    open={expandedFaqCategory.has(idx)}
                    onToggle={(e) => {
                      const newExpanded = new Set(expandedFaqCategory);
                      if ((e.target as HTMLDetailsElement).open) {
                        newExpanded.add(idx);
                      } else {
                        newExpanded.delete(idx);
                      }
                      setExpandedFaqCategory(newExpanded);
                    }}
                    className="w-full group"
                  >
                    <summary className="cursor-pointer px-4 sm:px-6 py-4 sm:py-6 font-bold text-lg sm:text-xl text-amber-900 hover:bg-gold-50 transition flex justify-between items-center list-none marker:content-none">
                      <span>{category.title}</span>
                      <span className="text-amber-600 font-bold text-2xl transition-transform duration-300 flex-shrink-0 ml-4 group-open:rotate-45 select-none">+</span>
                    </summary>
                    <div className="px-4 sm:px-6 py-0 border-t border-gray-200">
                      <div className="space-y-2 md:space-y-3 py-4">
                        {category.items.map((item) => (
                          <details
                            key={item.id}
                            className="border border-gray-200 rounded-lg transition"
                          >
                            <summary className="cursor-pointer px-3 sm:px-5 py-3 sm:py-4 font-semibold text-amber-900 hover:bg-gold-50 transition flex justify-between items-center list-none text-sm sm:text-base marker:content-none">
                              <span>— {item.question}</span>
                              <span className="text-amber-600 transition flex-shrink-0 ml-2">+</span>
                            </summary>
                            <div className="px-3 sm:px-5 py-3 sm:py-4 bg-gold-50 border-t border-gray-200 text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                              {item.answer}
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </details>
                </section>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/faqs" className="btn-primary text-sm sm:text-base">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
