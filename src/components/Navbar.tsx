'use client';

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartContext from '@/store/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Safely use context
  const cartContext = useContext(CartContext);

  useEffect(() => {
    setIsHydrated(true);
  }, [cartContext]); // Added cartContext dependency

  useEffect(() => {
    if (cartContext) {
      setCartCount(cartContext.count);
    }
  }, [cartContext?.count]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  if (!isHydrated) {
    return (
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 xs:h-24">
            <div className="flex-1 md:flex-none flex justify-start">
              <Link href="/" className="flex items-center mt-8">
                <Image
                  src="/neutropakk.png"
                  alt="NeutroPak"
                  width={250}
                  height={250}
                  className="h-52 w-auto xs:h-60"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Contact
              </Link>
              <Link href="/faqs" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                FAQs
              </Link>
            </div>
            <div className="flex items-center gap-2 xs:gap-3">
              <button className="relative btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-2xl min-h-[48px] min-w-[48px]">
                🛒
              </button>
              <button className="md:hidden btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-2xl min-h-[48px] min-w-[48px]">
                ☰
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
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 xs:h-24">
            {/* Logo */}
            <div className="md:flex-none flex justify-start">
              <Link href="/" className="flex items-center mt-10">
                <Image
                  src="/neutropakk.png"
                  alt="NeutroPak"
                  width={250}
                  height={250}
                  className="h-52 w-auto xs:h-60"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 self-center">
              <Link href="/" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Contact
              </Link>
              <Link href="/blog" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/faqs" className="text-base lg:text-lg text-gray-700 hover:text-gold-600 transition-colors font-medium">
                FAQs
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 xs:gap-3">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-3xl min-h-[48px] min-w-[48px] xs:min-h-[56px] xs:min-w-[56px]" 
                title="Cart"
              >
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 xs:-top-2 xs:-right-2 bg-gold-600 text-white text-sm xs:text-base w-6 h-6 xs:w-8 xs:h-8 rounded-full flex items-center justify-center font-bold">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-3xl min-h-[48px] min-w-[48px] xs:min-h-[56px] xs:min-w-[56px]"
                title="Menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'bg-black bg-opacity-50 backdrop-blur-sm' : 'bg-transparent pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-2/3 bg-white shadow-lg z-40 transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 xs:p-6 flex flex-col">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gold-600"
          >
            ✕
          </button>
          <div className="mt-16 space-y-6 flex flex-col w-full px-4 xs:px-6">
            <Link
              href="/about"
              className="text-base font-semibold text-gray-800 hover:text-gold-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-base font-semibold text-gray-800 hover:text-gold-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/shop"
              className="text-base font-semibold text-gray-800 hover:text-gold-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="/blog"
              className="text-base font-semibold text-gray-800 hover:text-gold-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/faqs"
              className="text-base font-semibold text-gray-800 hover:text-gold-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQS
            </Link>
            <div className="pt-6 border-t border-gray-300 w-full">
              <p className="text-xs font-bold text-gray-600 mb-6 tracking-wide text-center">LEGAL PAGES</p>
              <div className="space-y-4 flex flex-col w-full">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-700 hover:text-gold-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-gray-700 hover:text-gold-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/shipping-policy"
                  className="text-sm text-gray-700 hover:text-gold-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shipping Policy
                </Link>
                <Link
                  href="/refund-return-policy"
                  className="text-sm text-gray-700 hover:text-gold-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Refund & Return Policy
                </Link>
                <Link
                  href="/disclaimer"
                  className="text-sm text-gray-700 hover:text-gold-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cartContext && <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
