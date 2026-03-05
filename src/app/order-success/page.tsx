'use client';

import React from 'react';
import Link from 'next/link';

const OrderSuccessPage = () => {
  const orderNumber = 'HZ-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-yellow-50 to-amber-50 py-8 sm:py-12 md:py-16 border-b-4 border-yellow-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <div className="inline-flex items-center justify-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-yellow-100 rounded-full">
              <svg className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-900 mb-2">Order Confirmed</h1>
          <p className="text-sm sm:text-base md:text-lg text-amber-700">Your pure honey is on its way</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Order Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Order Information */}
          <div className="border-2 border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 bg-yellow-50">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-amber-900 mb-4 sm:mb-6">Order Information</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Order Number</p>
                <p className="text-sm sm:text-base md:text-lg font-mono font-semibold text-amber-900">{orderNumber}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Order Date</p>
                <p className="text-sm sm:text-base text-amber-900">{new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Total Amount</p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600">₨ 8,607</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Delivery Method</p>
                <p className="text-sm sm:text-base text-amber-900">Cash on Delivery (COD)</p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="border-2 border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 bg-yellow-50">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-amber-900 mb-4 sm:mb-6">Delivery Address</h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Name</p>
                <p className="text-sm sm:text-base text-amber-900">John Doe</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Address</p>
                <p className="text-sm sm:text-base text-amber-900">123 Main Street, Lahore, 54000</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Phone</p>
                <p className="text-sm sm:text-base text-amber-900">+92 320 1234567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="border-2 border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 bg-yellow-50">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-amber-900 mb-6 sm:mb-8">Order Status</h3>
          <div className="space-y-4 sm:space-y-6">
            {[
              { title: 'Order Confirmed', description: 'Your order has been confirmed', completed: true },
              { title: 'Processing', description: 'We\'re preparing your order', completed: false },
              { title: 'Shipped', description: 'Your order is on its way', completed: false },
              { title: 'Delivered', description: 'Order delivered', completed: false },
            ].map((status, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm ${status.completed ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {status.completed ? '✓' : ''}
                  </div>
                  {idx < 3 && <div className={`w-0.5 h-12 sm:h-16 md:h-20 ${status.completed ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>}
                </div>
                <div className="pt-0.5 sm:pt-1">
                  <p className="font-semibold text-sm sm:text-base text-amber-900">{status.title}</p>
                  <p className="text-xs sm:text-sm text-amber-700">{status.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-amber-900 mb-4 sm:mb-6">What Happens Next</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'Email Confirmation', description: 'You\'ll receive an order confirmation with tracking info' },
              { title: 'Preparation', description: 'We prepare your order carefully (1-2 business days)' },
              { title: 'Shipment', description: 'Your package ships via COD (3-5 business days)' },
              { title: 'Delivery', description: 'Receive your pure honey in perfect condition' },
            ].map((step, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-yellow-200 text-amber-900 font-semibold rounded-full mb-2 sm:mb-3 text-xs sm:text-sm">{idx + 1}</div>
                <h4 className="font-semibold text-amber-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{step.title}</h4>
                <p className="text-xs sm:text-sm text-amber-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12">
          <Link href="/shop" className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg transition-colors text-xs sm:text-sm md:text-base">
            Continue Shopping
          </Link>
          <Link href="/" className="inline-flex items-center justify-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg transition-colors text-xs sm:text-sm md:text-base">
            Back to Home
          </Link>
        </div>

        {/* Support Section */}
        <div className="border-2 border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 bg-gradient-to-r from-yellow-50 to-amber-50">
          <h3 className="font-semibold text-amber-900 mb-2 sm:mb-3 text-sm sm:text-base">Questions?</h3>
          <p className="text-xs sm:text-sm md:text-base text-amber-700">
            Contact us at{' '}
            <a href="mailto:nutreopak@gmail.com" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              nutreopak@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccessPage;
