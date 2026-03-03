'use client';

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import CartContext from '@/store/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Safely use context
  const cartContext = useContext(CartContext);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (cartContext) {
      setCartCount(cartContext.count);
    }
  }, [cartContext?.count]);
  if (!isHydrated) {
    return (
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gold-600 hover:text-gold-700 transition-colors">
              NutreoPak
            </Link>
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
            <div className="flex items-center gap-4">
              <button className="relative btn-icon text-gray-700 hover:text-gold-600 transition-colors">
                🛒
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gold-600 hover:text-gold-700 transition-colors">
              NutreoPak
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
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative btn-icon text-gray-700 hover:text-gold-600 transition-colors" 
                title="Cart"
              >
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {cartContext && <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
