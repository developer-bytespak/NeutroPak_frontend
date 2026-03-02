'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Sidr (Beri) Honey - 250g',
      price: 1599,
      quantity: 1,
      image: '/sidr-honey-250g.jpg',
      size: '250g',
    },
    {
      id: '2',
      name: 'Wild Forest Honey - 500g',
      price: 3299,
      quantity: 2,
      image: '/wild-honey-500g.jpg',
      size: '500g',
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 2500 ? 0 : 200;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gold-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
          <p className="text-lg text-gray-600">Review your items before checkout</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-16 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="text-lg text-gray-600">Add some honey to get started!</p>
            <Link href="/shop" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <section className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="text-left px-4 py-4 font-semibold text-gray-900">Product</th>
                      <th className="text-right px-4 py-4 font-semibold text-gray-900">Price</th>
                      <th className="text-center px-4 py-4 font-semibold text-gray-900">Quantity</th>
                      <th className="text-right px-4 py-4 font-semibold text-gray-900">Total</th>
                      <th className="px-4 py-4 w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-6">
                          <div className="flex gap-4 items-start">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={60}
                              height={60}
                              className="rounded-lg bg-gray-200"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">Size: {item.size}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-6 text-right text-gray-900 font-medium">
                          ₨{item.price.toLocaleString()}
                        </td>
                        <td className="px-4 py-6">
                          <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg w-fit mx-auto px-2 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded transition-colors"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              readOnly
                              className="w-8 text-center bg-transparent font-semibold text-gray-900"
                            />
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-6 text-right text-gray-900 font-semibold">
                          ₨
                          {(
                            item.price * item.quantity
                          ).toLocaleString()}
                        </td>
                        <td className="px-4 py-6 text-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 font-bold transition-colors text-lg hover:bg-red-50 rounded px-2 py-1"
                          >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

              <div className="mt-6 flex justify-between">
                <Link href="/shop" className="btn-secondary">
                  Continue Shopping
                </Link>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="lg:col-span-1">
              <div className="card p-8 h-fit sticky top-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold text-gray-900">₨{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Shipping:</span>
                    <span className="font-semibold text-gray-900">
                      {shipping === 0 ? (
                        <span className="text-green-600 font-bold">
                          FREE
                        </span>
                      ) : (
                        `₨${shipping}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Tax (5%):</span>
                    <span className="font-semibold text-gray-900">₨{tax.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b-2 border-gray-300">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="text-xl font-bold text-gold-600">₨{total.toLocaleString()}</span>
                  </div>
                </div>

                {subtotal <= 2500 && (
                  <p className="text-sm text-gray-600 bg-gold-50 p-3 rounded-lg mb-6 border-l-4 border-gold-600">
                    Free shipping on orders above ₨2,500!
                  </p>
                )}

                <Link href="/checkout" className="btn-primary block text-center mb-6 py-4">
                  Proceed to Checkout
                </Link>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Secure Checkout</p>
                  <p>✓ Free COD Available</p>
                  <p>✓ 30-Day Returns</p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
