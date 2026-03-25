'use client';

import React from 'react';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gold-50 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-600 mt-2">Guidelines for using NutreoPak services and purchasing products</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website and purchasing our products, you accept and agree to be bound by these terms 
              and conditions. If you do not agree, please do not use this website.
            </p>
          </section>

          {/* Product Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Product Information</h2>
            <p className="text-gray-700">
              We strive to provide accurate descriptions and pricing. However, we do not warrant that all information is accurate, 
              complete, or error-free. If a product is not as described, your recourse is to return it in unused condition.
            </p>
          </section>

          {/* Pricing and Availability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing and Availability</h2>
            <p className="text-gray-700">
              All prices are subject to change. We reserve the right to limit quantities and to discontinue any product. 
              Products are subject to availability.
            </p>
          </section>

          {/* Order Acceptance & Cancellation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Order Acceptance & Cancellation</h2>
            <p className="text-gray-700 mb-3">
              We reserve the right to refuse or cancel any order. Orders can be cancelled within 24 hours of placement.
            </p>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Accounts</h2>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your account. You accept responsibility for all activities 
              on your account.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              NutreoPak and its suppliers are not liable for any damages arising from use or inability to use our website or products.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications to Terms</h2>
            <p className="text-gray-700">
              We may revise these terms at any time. Continued use of the website means you agree to the revised terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by the laws of Pakistan. You agree to the exclusive jurisdiction of Pakistani courts.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gold-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700 mb-4">For any inquiries about our terms and conditions, please contact us:</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto:nutreopak@gmail.com" className="text-gold-600 hover:text-gold-700">nutreopak@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+923379788677" className="text-gold-600 hover:text-gold-700">+92 337 9788677</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
