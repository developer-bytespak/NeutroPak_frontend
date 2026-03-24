'use client';

import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { orderService, Order } from '@/services/orderService';

interface OrderData extends Order {
  orderNo: string;
}

const OrderSuccessContent = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) {
        setError('Order ID not found');
        setLoading(false);
        return;
      }

      try {
        const response = await orderService.getOrderById(parseInt(orderId));
        if (response.data.success && response.data.data) {
          setOrder(response.data.data as unknown as OrderData);
        } else {
          setError('Failed to load order details');
        }
      } catch (err) {
        console.error('Error fetching order:', err);
        setError('Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <main className="bg-white overflow-x-hidden">
        <section className="bg-gradient-to-r from-yellow-50 to-amber-50 py-8 sm:py-12 md:py-16 border-b-4 border-yellow-500">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-900 mb-2">Order Confirmed</h1>
            <p className="text-sm sm:text-base md:text-lg text-amber-700">Your pure honey is on its way</p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 text-center">
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="bg-white overflow-x-hidden">
        <section className="bg-gradient-to-r from-yellow-50 to-amber-50 py-8 sm:py-12 md:py-16 border-b-4 border-yellow-500">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-900 mb-2">Order Confirmed</h1>
            <p className="text-sm sm:text-base md:text-lg text-amber-700">Your pure honey is on its way</p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 text-center">
          <p className="text-red-600 mb-4">{error || 'Order not found'}</p>
          <Link href="/shop" className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg transition-colors text-xs sm:text-sm md:text-base">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

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
                <p className="text-sm sm:text-base md:text-lg font-mono font-semibold text-amber-900">{order.orderNo}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Order Date</p>
                <p className="text-sm sm:text-base text-amber-900">{new Date(order.createdAt).toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Total Amount</p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600">₨ {(order.total).toLocaleString('en-PK')}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Delivery Method</p>
                <p className="text-sm sm:text-base text-amber-900">{order.payment?.paymentMethod === 'COD' ? 'Cash on Delivery (COD)' : order.payment?.paymentMethod || 'COD'}</p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="border-2 border-yellow-200 rounded-lg p-4 sm:p-6 md:p-8 bg-yellow-50">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-amber-900 mb-4 sm:mb-6">Delivery Address</h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Name</p>
                <p className="text-sm sm:text-base text-amber-900">{order.firstName} {order.lastName}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Address</p>
                <p className="text-sm sm:text-base text-amber-900">{order.address}, {order.city}, {order.postalCode}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-amber-700 mb-1">Phone</p>
                <p className="text-sm sm:text-base text-amber-900">{order.phone}</p>
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

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
          <Link href="/shop" className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg transition-colors text-xs sm:text-sm md:text-base">
            Continue Shopping
          </Link>
          <Link href="/" className="inline-flex items-center justify-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg transition-colors text-xs sm:text-sm md:text-base">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

const OrderSuccessPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
};

export default OrderSuccessPage;
