'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { productService } from '@/services/productService';

const Footer: React.FC = () => {
  const [productLinks, setProductLinks] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchProductIds = async () => {
      try {
        const response = await productService.getAllProducts(1, 100);
        const productsFromResponse = response?.data?.data?.products as any[];
        
        if (Array.isArray(productsFromResponse)) {
          const links: Record<string, string> = {};
          
          productsFromResponse.forEach((product) => {
            if (product.name.includes('Cinnamon') && product.name.includes('250g')) {
              links['cinnamon250'] = `/product/product-${product.id}`;
            }
            if (product.name.includes('Cinnamon') && product.name.includes('500g')) {
              links['cinnamon500'] = `/product/product-${product.id}`;
            }
            if (product.name.includes('Chilli') && product.name.includes('250g')) {
              links['chilli250'] = `/product/product-${product.id}`;
            }
            if (product.name.includes('Chilli') && product.name.includes('500g')) {
              links['chilli500'] = `/product/product-${product.id}`;
            }
            if (product.name.includes('Acacia') && product.name.includes('250g')) {
              links['acacia250'] = `/product/product-${product.id}`;
            }
            if (product.name.includes('Acacia') && product.name.includes('500g')) {
              links['acacia500'] = `/product/product-${product.id}`;
            }
            if (product.name.includes('Gift Box')) {
              links['giftbox'] = `/product/product-${product.id}`;
            }
          });
          
          setProductLinks(links);
        }
      } catch (error) {
        console.error('Error fetching product IDs:', error);
      }
    };

    fetchProductIds();
  }, []);

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
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=%2Fnutreopak%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gold-400 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">All Products</Link></li>
              <li className="text-gray-400 text-sm">
                <span className="block mb-1">Cinnamon Infused Honey</span>
                <div className="flex gap-2 ml-2">
                  {productLinks.cinnamon250 && <Link href={productLinks.cinnamon250} className="text-gray-500 hover:text-gold-400 transition-colors text-xs">250g</Link>}
                  {productLinks.cinnamon500 && <Link href={productLinks.cinnamon500} className="text-gray-500 hover:text-gold-400 transition-colors text-xs">500g</Link>}
                </div>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block mb-1">Chilli Infused Honey</span>
                <div className="flex gap-2 ml-2">
                  {productLinks.chilli250 && <Link href={productLinks.chilli250} className="text-gray-500 hover:text-gold-400 transition-colors text-xs">250g</Link>}
                  {productLinks.chilli500 && <Link href={productLinks.chilli500} className="text-gray-500 hover:text-gold-400 transition-colors text-xs">500g</Link>}
                </div>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block mb-1">Acacia Honey</span>
                <div className="flex gap-2 ml-2">
                  {productLinks.acacia250 && <Link href={productLinks.acacia250} className="text-gray-500 hover:text-gold-400 transition-colors text-xs">250g</Link>}
                  {productLinks.acacia500 && <Link href={productLinks.acacia500} className="text-gray-500 hover:text-gold-400 transition-colors text-xs">500g</Link>}
                </div>
              </li>
              {productLinks.giftbox && <li><Link href={productLinks.giftbox} className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Gift Box</Link></li>}
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
              <p><span className="font-semibold">Hours:</span> Daily 10:00 AM — 5:00 PM</p>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
