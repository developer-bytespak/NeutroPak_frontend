'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-gold-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Honeeza</h1>
          <p className="text-lg text-gray-600">Our Story, Our Mission, Our Commitment to Purity</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Honeeza was born from a simple belief: honey should be honey, not sugar water 
                or processed syrup. In a market filled with adulterated products, we decided to 
                do something different.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We partnered with small-scale, ethical beekeepers across Pakistan who follow 
                traditional methods and reject industrial shortcuts. Every jar of Honeeza represents 
                their passion for purity and our commitment to delivering authentic, lab-tested honey.
              </p>
            </div>
            <div className="bg-gold-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-gray-400 text-lg">Honeeza Beekeepers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8 text-center bg-gradient-to-br from-gold-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bring pure, raw, lab-tested honey directly from beekeepers to families across Pakistan, 
                eliminating the middleman and ensuring authenticity at every step.
              </p>
            </div>
            <div className="card p-8 text-center bg-gradient-to-br from-gold-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌟 Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To make pure honey the standard, not the exception. To build trust through 
                transparency, science, and an unwavering commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why We Do What We Do</h2>
            <p className="section-subtitle">
              The honey market is broken. Consumers don't know what they&apos;re getting. 
              Adulteration is rampant. Beekeepers are squeezed on prices. We&apos;re here to fix that.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 border-l-4 border-gold-600">
              <h4 className="text-lg font-bold text-gray-900 mb-3">💙 For Consumers</h4>
              <p className="text-gray-600">You deserve to know what you're buying. Pure honey, nothing more.</p>
            </div>
            <div className="card p-6 border-l-4 border-gold-600">
              <h4 className="text-lg font-bold text-gray-900 mb-3">🐝 For Beekeepers</h4>
              <p className="text-gray-600">Fair prices for quality work. Your craft deserves respect.</p>
            </div>
            <div className="card p-6 border-l-4 border-gold-600">
              <h4 className="text-lg font-bold text-gray-900 mb-3">🌍 For Nature</h4>
              <p className="text-gray-600">Supporting ethical beekeeping protects our ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Purity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Our Commitment to Purity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">🔗 Direct Sourcing</h4>
              <p className="text-gray-600 text-sm">We work directly with beekeepers, eliminating traders who can't guarantee purity.</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">🚫 Zero Additives</h4>
              <p className="text-gray-600 text-sm">No sugar, no syrup, no artificial anything. Just honey as nature made it.</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">🧪 Lab Testing</h4>
              <p className="text-gray-600 text-sm">Every batch is tested for moisture, sucrose ratio, HMF levels, and authenticity.</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">❄️ Cold Extraction</h4>
              <p className="text-gray-600 text-sm">Extracted below 35°C to preserve all natural enzymes and nutrients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Honey?</h2>
          <p className="text-lg mb-8 opacity-95">We're here to help. Contact us anytime.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-600 px-8 py-3 rounded-lg font-bold hover:bg-gold-50 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
