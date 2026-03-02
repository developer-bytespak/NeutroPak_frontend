'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout submitted:', formData);
    // Redirect to order success page
    window.location.href = '/order-success';
  };

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gold-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Checkout</h1>
          <p className="text-lg text-gray-600">Complete your order</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <section className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <fieldset className="pb-8 border-b border-gray-200 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 320 1234567"
                    className="input-field"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main Street"
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Lahore"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-900 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      placeholder="54000"
                      className="input-field"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Payment Method */}
              <fieldset className="py-8 border-b border-gray-200 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-gold-600 hover:bg-gold-50 cursor-pointer transition-all">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={
                        formData.paymentMethod ===
                        'cod'
                      }
                      onChange={handleChange}
                      className="w-4 h-4 accent-gold-600"
                    />
                    <span className="font-medium text-gray-900">Cash on Delivery (COD)</span>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-gold-600 hover:bg-gold-50 cursor-pointer transition-all">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={
                        formData.paymentMethod ===
                        'bank'
                      }
                      onChange={handleChange}
                      className="w-4 h-4 accent-gold-600"
                    />
                    <span className="font-medium text-gray-900">Bank Transfer</span>
                  </label>
                </div>

                <p className="text-sm text-gray-600 mt-4 bg-gold-50 p-3 rounded-lg border-l-4 border-gold-600">
                  We offer free COD delivery throughout Pakistan!
                </p>
              </fieldset>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary block w-full text-center py-4 mb-4"
              >
                Complete Purchase
              </button>

              <p className="text-sm text-gray-600 text-center">
                By clicking "Complete Purchase", you agree to our{' '}
                <Link href="/terms-and-conditions" className="text-gold-600 hover:text-gold-700 font-semibold">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="text-gold-600 hover:text-gold-700 font-semibold">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </section>

          {/* Order Summary */}
          <aside className="lg:col-span-1">
            <div className="card p-8 h-fit sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-700">Sidr Honey (250g)</span>
                  <span className="font-semibold text-gray-900">₨ 1,599</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Wild Forest Honey (500g) x2</span>
                  <span className="font-semibold text-gray-900">₨ 6,598</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold text-gray-900">₨ 8,197</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700">Shipping:</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700">Tax:</span>
                  <span className="font-semibold text-gray-900">₨ 410</span>
                </div>
              </div>

              <div className="flex justify-between py-3 border-b-2 border-gray-300 mb-6">
                <span className="font-bold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-gold-600">₨ 8,607</span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Secure Checkout</p>
                <p className="flex items-center gap-2"><span className="text-green-600">✓</span> SSL Encrypted</p>
                <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Money Back Guarantee</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
