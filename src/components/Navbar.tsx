'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gold-600 hover:text-gold-700 transition-colors">
            Honeeza
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-gold-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-gold-600 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gold-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gold-600 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-gold-600 transition-colors font-medium">
              FAQs
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              href="/search" 
              className="btn-icon text-gray-700 hover:text-gold-600" 
              title="Search"
            >
              🔍
            </Link>
            <Link 
              href="/cart" 
              className="relative btn-icon text-gray-700 hover:text-gold-600" 
              title="Cart"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <button 
              className="btn-icon text-gray-700 hover:text-gold-600" 
              title="Account"
            >
              👤
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
