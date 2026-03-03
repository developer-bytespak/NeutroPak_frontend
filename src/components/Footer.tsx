'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-4">NutreoPak</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium raw honey from trusted beekeepers. Pure, natural, and lab-tested.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#facebook" className="text-gray-400 hover:text-gold-400 transition-colors">📘</a>
              <a href="#instagram" className="text-gray-400 hover:text-gold-400 transition-colors">📷</a>
              <a href="#whatsapp" className="text-gray-400 hover:text-gold-400 transition-colors">💬</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">All Products</Link></li>
              <li><Link href="/shop?category=wild-honey" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Wild Honey</Link></li>
              <li><Link href="/shop?category=farm-honey" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Farm Honey</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Honey Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Contact</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="/shipping-policy" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Shipping Info</Link></li>
              <li><Link href="/refund-return-policy" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Returns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="font-semibold">Email:</span> nutreopak@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> +92 337 9788677</p>
              <p><span className="font-semibold">Hours:</span> Daily 10:00 AM — 5:00 PM</p>
              <p><span className="font-semibold">Location:</span> Swabi, KPK</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 NutreoPak. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="/disclaimer" className="hover:text-gold-400 transition-colors">Disclaimer</Link>
              <span>•</span>
              <a href="#newsletter" className="hover:text-gold-400 transition-colors">Newsletter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
