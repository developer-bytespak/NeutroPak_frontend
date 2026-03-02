'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section>
      <h2 className="section-title text-center mb-8">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gold-50 transition-colors bg-white"
              onClick={() =>
                setOpenId(
                  openId === item.id ? null : item.id
                )
              }
            >
              <span className="font-semibold text-gray-900 text-left">{item.question}</span>
              <span className="text-2xl text-gold-600 ml-4 flex-shrink-0">
                {openId === item.id ? '−' : '+'}
              </span>
            </button>
            {openId === item.id && (
              <div className="px-6 py-4 bg-gold-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
