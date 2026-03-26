'use client';

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartContext from '@/store/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLegalPagesOpen, setIsLegalPagesOpen] = useState(false);
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
      <nav className="sticky top-0 z-50 bg-gold-50 shadow-md">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 xs:h-28 sm:h-28">
            <div className="flex-1 md:flex-none flex justify-start items-center h-full">
              <Link href="/" className="flex items-center pt-2">
                <Image
                  src="/neutropakk.png"
                  alt="NeutroPak"
                  width={300}
                  height={300}
                  className="h-40 xs:h-56 sm:h-36 md:h-40 lg:h-52 w-auto"
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
              <button className="relative btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-3xl min-h-[48px] min-w-[48px] xs:min-h-[64px] xs:min-w-[64px] xs:-translate-y-4">
                🛒
              </button>
              <button className="md:hidden btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-3xl min-h-[48px] min-w-[48px] xs:min-h-[64px] xs:min-w-[64px] xs:-translate-y-4">
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
      <nav className="sticky top-0 z-50 bg-gold-50 shadow-md">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 xs:h-28 sm:h-28">
            {/* Logo */}
            <div className="flex-1 md:flex-none flex justify-start items-center h-full">
              <Link href="/" className="flex items-center pt-2">
                <Image
                  src="/neutropakk.png"
                  alt="NeutroPak"
                  width={300}
                  height={300}
                  className="h-40 xs:h-56 sm:h-28 md:h-40 lg:h-52 w-auto"
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
                className="relative btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-3xl min-h-[48px] min-w-[48px] xs:min-h-[56px] xs:min-w-[56px] xs:-translate-y-2" 
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
                className="md:hidden btn-icon text-gray-700 hover:text-gold-600 transition-colors active:text-gold-700 text-xl xs:text-3xl min-h-[48px] min-w-[48px] xs:min-h-[56px] xs:min-w-[56px] xs:-translate-y-2"
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
        <div className="flex flex-col">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gold-600 z-50 p-4 xs:p-6"
          >
            ✕
          </button>
          <div className="mt-28 xs:mt-30 flex flex-col w-full">
            <Link
              href="/about"
              className="text-base font-bold text-gray-800 hover:text-gold-600 transition-colors py-4 px-4 xs:px-6 border-b border-gray-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/shop"
              className="text-base font-bold text-gray-800 hover:text-gold-600 transition-colors py-4 px-4 xs:px-6 border-b border-gray-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="/blog"
              className="text-base font-bold text-gray-800 hover:text-gold-600 transition-colors py-4 px-4 xs:px-6 border-b border-gray-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="text-base font-bold text-gray-800 hover:text-gold-600 transition-colors py-4 px-4 xs:px-6 border-b border-gray-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/faqs"
              className="text-base font-bold text-gray-800 hover:text-gold-600 transition-colors py-4 px-4 xs:px-6 border-b border-gray-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQS
            </Link>
            <div className="pt-4 px-4 xs:px-6 border-b border-gray-300 w-full">
              <button
                onClick={() => setIsLegalPagesOpen(!isLegalPagesOpen)}
                className="text-base font-bold text-gray-800 hover:text-gold-600 transition-colors w-full flex items-center justify-center gap-2"
              >
                LEGAL PAGES
                <span className={`transform transition-transform ${isLegalPagesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {isLegalPagesOpen && (
                <div className="mt-4 flex flex-col w-screen -mx-4 xs:-mx-6">
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-700 hover:text-gold-600 transition-colors py-2 px-4 xs:px-6 text-center w-full block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="block -ml-24 xs:-ml-26s">Privacy Policy</span>
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="text-sm text-gray-700 hover:text-gold-600 transition-colors py-2 px-4 xs:px-6 text-center w-full block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="block -ml-24 xs:-ml-26">Terms & Conditions</span>
                  </Link>
                  <Link
                    href="/refund-return-policy"
                    className="text-sm text-gray-700 hover:text-gold-600 transition-colors py-2 px-4 xs:px-6 text-center w-full block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="block -ml-24 xs:-ml-26">Refund & Return Policy</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {cartContext && <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
