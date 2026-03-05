'use client';

import React, { useState } from 'react';

const FAQPage = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const [expandedCategoryHeading, setExpandedCategoryHeading] = useState<Set<number>>(new Set([0]));

  const faqCategories = [
    {
      title: 'Honey Basics: Purity, Safety & What to Know',
      id: 'basics',
      items: [
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
      ],
    },
    {
      title: 'About NutreoPak Honey',
      id: 'about',
      items: [
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
      ],
    },
    {
      title: 'How to Use Honey',
      id: 'usage',
      items: [
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
      ],
    },
    {
      title: 'Honey Buying, Storage and Safety',
      id: 'storage',
      items: [
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
      ],
    },
    {
      title: 'Ordering from NutreoPak: Shipping & Payments',
      id: 'ordering',
      items: [
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
      ],
    },
    {
      title: 'Wholesale and bulk buying with NutreoPak',
      id: 'wholesale',
      items: [
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
      ],
    },
    {
      title: 'Still have more questions to ask?',
      id: 'contact',
      items: [
        {
          id: '20',
          question: 'How can I contact NutreoPak support?',
          answer: 'You can reach us via WhatsApp at +92 337 9788677, email at nutreopak@gmail.com, or fill out our contact form on the website. We respond within 24 hours.',
        },
        {
          id: '21',
          question: 'Ask Us Anything',
          answer: 'Have a question not covered here? Contact us directly and our team will provide expert answers about our honey, usage tips, or any other concerns.',
        },
      ],
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Header with Background Image */}
      <section 
        className="relative bg-cover bg-center py-12 sm:py-20 md:py-32"
        style={{
          backgroundImage: 'url(/faq_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-yellow-50">Find answers to all your honey questions</p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-8">
          {/* Left Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white border border-gray-300 rounded-lg p-3 sm:p-5">
              <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-4 flex justify-between items-center">
                Table of Contents
                <span className="text-2xl">−</span>
              </h3>
              <nav className="space-y-2">
                {faqCategories.map((category, idx) => (
                  <a
                    key={idx}
                    href={`#${category.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setExpandedCategory(idx);
                      const newExpanded = new Set(expandedCategoryHeading);
                      newExpanded.add(idx);
                      setExpandedCategoryHeading(newExpanded);
                      document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-xs sm:text-sm text-amber-800 hover:text-amber-900 font-medium py-1 px-2 rounded hover:bg-gold-50 transition"
                  >
                    {idx + 1}. {category.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content - FAQ Items */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {faqCategories.map((category, idx) => (
              <section key={idx} id={category.id} className="bg-white rounded-lg border border-gray-200">
                <details
                  open={expandedCategoryHeading.has(idx)}
                  onToggle={(e) => {
                    const newExpanded = new Set(expandedCategoryHeading);
                    if ((e.target as HTMLDetailsElement).open) {
                      newExpanded.add(idx);
                    } else {
                      newExpanded.delete(idx);
                    }
                    setExpandedCategoryHeading(newExpanded);
                  }}
                  className="w-full group"
                >
                  <summary className="cursor-pointer px-4 sm:px-6 py-4 sm:py-6 font-bold text-lg sm:text-xl text-amber-900 hover:bg-gold-50 transition flex justify-between items-center list-none marker:content-none">
                    <span>{category.title}</span>
                    <span className="text-amber-600 font-bold text-2xl transition-transform duration-300 flex-shrink-0 ml-4 group-open:rotate-45 select-none">+</span>
                  </summary>
                  <div className="px-4 sm:px-6 py-0 border-t border-gray-200">
                    <div className="space-y-3 py-4">
                      {category.items.map((item) => (
                        <details
                          key={item.id}
                          className="border border-gray-200 rounded-lg transition"
                        >
                          <summary className="cursor-pointer px-3 sm:px-5 py-3 sm:py-4 font-semibold text-sm sm:text-base text-amber-900 hover:bg-gold-50 transition flex justify-between items-center list-none">
                            <span>— {item.question}</span>
                            <span className="text-amber-600 transition">+</span>
                          </summary>
                          <div className="px-3 sm:px-5 py-3 sm:py-4 bg-gold-50 border-t border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed">
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
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923379788677"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-40 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition transform"
        title="Chat on WhatsApp"
      >
        <span className="text-xl sm:text-2xl">💬</span>
      </a>
    </main>
  );
};

export default FAQPage;
