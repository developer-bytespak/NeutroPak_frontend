'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartContext from '@/store/CartContext';
import { orderService, CreateOrderPayload } from '@/services/orderService';

const CheckoutPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    state: '',
    paymentMethod: 'COD',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const cartContext = useContext(CartContext);
  const cart = cartContext?.cart || [];
  const subtotal = cartContext?.total || 0;
  const taxRate = 0.1; // 10% tax
  const tax = Math.round(subtotal * taxRate);
  const shippingCost = 0; // Free shipping
  const total = subtotal + tax + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error for this field
    setValidationErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setValidationErrors({});
    setLoading(true);

    try {
      if (cart.length === 0) {
        setError('Your cart is empty. Please add items before checking out.');
        setLoading(false);
        return;
      }

      // Debug: Log cart items
      console.log('Cart items:', JSON.stringify(cart, null, 2));

      // Prepare order payload
      const orderPayload: any = {
        firstName: formData.firstName.trim() || 'N/A',
        lastName: formData.lastName.trim() || 'N/A',
        email: formData.email.trim(),
        phone: formData.phone.trim() || '+92',
        address: formData.address.trim() || 'N/A',
        city: formData.city.trim() || 'N/A',
        postalCode: formData.postalCode.trim() || '00000',
        shippingMethod: 'standard',
        shippingCost: Number(shippingCost) || 0,
        subtotal: Number(subtotal) || 0,
        tax: Number(tax) || 0,
        total: Number(total) || 0,
        orderItems: cart.map((item: any) => {
          // Handle both string and number IDs
          let productId = 0;
          if (typeof item.id === 'string') {
            productId = parseInt(item.id, 10);
          } else if (typeof item.id === 'number') {
            productId = item.id;
          }
          
          if (isNaN(productId) || productId <= 0) {
            throw new Error(`Invalid product ID for item: ${item.name}`);
          }

          return {
            productId,
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0,
          };
        }),
        paymentMethod: formData.paymentMethod || 'COD',
      };

      // Only add country and state if they have values
      if (formData.country?.trim()) {
        orderPayload.country = formData.country.trim();
      }
      if (formData.state?.trim()) {
        orderPayload.state = formData.state.trim();
      }

      console.log('Order payload:', JSON.stringify(orderPayload, null, 2));

      // Call API to create order
      const response = await orderService.createOrder(orderPayload);

      if (response.data.success) {
        // Clear cart and redirect to success page
        cartContext?.clearCart();
        router.push(
          `/order-success?orderId=${response.data.data.id}&orderNo=${response.data.data.orderNo}`
        );
      } else {
        setError(response.data.message || 'Failed to create order');
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      if (err.response?.data?.details) {
        // Handle validation errors from backend
        setValidationErrors(err.response.data.details);
        setError('Please fix the errors below:\n' + Object.values(err.response.data.details).join('\n'));
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred while processing your order. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* Page Header */}
      <section
        className="relative bg-center bg-contain bg-no-repeat py-12 sm:py-20 md:py-32"
        style={{ backgroundImage: "url('/checkout_sec.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">Checkout</h1>
          <p className="text-sm sm:text-base md:text-lg text-yellow-50 drop-shadow-md text-center">Complete your order</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-8">
          {/* Checkout Form */}
          <section className="lg:col-span-2 order-2 lg:order-1">
            {error && (
              <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <fieldset className="pb-6 sm:pb-8 border-b border-gray-200 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Shipping Information</h2>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-900 mb-2">
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
                      className={`input-field ${validationErrors.firstName ? 'border-red-500' : ''}`}
                    />
                    {validationErrors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-900 mb-2">
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
                      className={`input-field ${validationErrors.lastName ? 'border-red-500' : ''}`}
                    />
                    {validationErrors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={`input-field ${validationErrors.email ? 'border-red-500' : ''}`}
                  />
                  {validationErrors.email && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-900 mb-2">
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
                    className={`input-field ${validationErrors.phone ? 'border-red-500' : ''}`}
                  />
                  {validationErrors.phone && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-900 mb-2">
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
                    className={`input-field ${validationErrors.address ? 'border-red-500' : ''}`}
                  />
                  {validationErrors.address && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
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
                      className={`input-field ${validationErrors.city ? 'border-red-500' : ''}`}
                    />
                    {validationErrors.city && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.city}</p>
                    )}
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
                      className={`input-field ${validationErrors.postalCode ? 'border-red-500' : ''}`}
                    />
                    {validationErrors.postalCode && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.postalCode}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Pakistan (Optional)"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-900 mb-2">
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Punjab (Optional)"
                      className="input-field"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Payment Method */}
              <fieldset className="py-6 sm:py-8 border-b border-gray-200 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Payment Method</h2>

                <div className="space-y-3 sm:space-y-4">
                  <label className="flex items-center gap-3 p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-gold-600 hover:bg-gold-50 cursor-pointer transition-all">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={formData.paymentMethod === 'COD'}
                      onChange={handleChange}
                      className="w-4 h-4 accent-gold-600"
                    />
                    <span className="font-medium text-xs sm:text-base text-gray-900">Cash on Delivery (COD)</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-gold-600 hover:bg-gold-50 cursor-pointer transition-all">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="CARD"
                      checked={formData.paymentMethod === 'CARD'}
                      onChange={handleChange}
                      className="w-4 h-4 accent-gold-600"
                    />
                    <span className="font-medium text-xs sm:text-base text-gray-900">Bank Transfer</span>
                  </label>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 mt-4 bg-gold-50 p-3 rounded-lg border-l-4 border-gold-600">
                  We offer free COD delivery throughout Pakistan!
                </p>
              </fieldset>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary block w-full text-center py-3 sm:py-4 mb-4 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {loading ? 'Processing Order...' : 'Complete Purchase'}
              </button>

              <p className="text-xs sm:text-sm text-gray-600 text-center">
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
          <aside className="lg:col-span-1 order-1 lg:order-2">
            <div className="card p-4 sm:p-8 h-fit sticky top-20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>

              {cart.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm sm:text-base">
                        <span className="text-gray-700">{item.name} x{item.quantity}</span>
                        <span className="font-semibold text-gray-900">
                          ₨ {(item.price * item.quantity).toLocaleString('en-PK')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-700">Subtotal:</span>
                      <span className="font-semibold text-gray-900">₨ {subtotal.toLocaleString('en-PK')}</span>
                    </div>

                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-700">Shipping:</span>
                      <span className="text-green-600 font-bold">FREE</span>
                    </div>

                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-700">Tax:</span>
                      <span className="font-semibold text-gray-900">₨ {tax.toLocaleString('en-PK')}</span>
                    </div>
                  </div>

                  <div className="flex justify-between py-3 border-b-2 border-gray-300 mb-6">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="text-lg sm:text-xl font-bold text-gold-600">₨ {total.toLocaleString('en-PK')}</span>
                  </div>

                  {formData.paymentMethod !== 'COD' && (
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Secure Checkout</p>
                      <p className="flex items-center gap-2"><span className="text-green-600">✓</span> SSL Encrypted</p>
                      <p className="flex items-center gap-2"><span className="text-green-600">✓</span> Money Back Guarantee</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-8 sm:py-12 text-center">
                  <p className="text-gray-500 mb-4 text-sm sm:text-base">Your cart is empty</p>
                  <Link href="/shop" className="btn-primary inline-block">
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
