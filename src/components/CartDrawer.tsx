'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/store/CartContext';

// Calculate the markup price (30% increase)
const calculateMarkupPrice = (actualPrice: number): number => {
  return Math.round(actualPrice * 1.3 * 100) / 100;
};

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, total, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={onClose}
        ></div>
      )}
      <div 
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          <button 
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 border-b border-gray-200 pb-4">
                {/* Product Image */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded">
                  {item.images && item.images.length > 0 ? (
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                      unoptimized
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-600 mt-1 space-y-0.5">
                      <span className="block line-through decoration-red-600 decoration-2 text-black">
                        ₨{calculateMarkupPrice(item.price).toLocaleString('en-PK')}
                      </span>
                      <span className="block font-semibold text-gray-900">
                        ₨{item.price.toLocaleString('en-PK')}
                      </span>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-2 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      className="w-10 text-center border border-gray-300 rounded text-sm"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-2 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    ₨{(item.price * item.quantity).toLocaleString('en-PK')}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-3">
            <div className="flex justify-between items-center"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-xl font-bold text-amber-600">
                ₨{total.toLocaleString('en-PK')}
              </span>
            </div>
            <Link 
              href="/checkout" 
              className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg text-center transition-colors"
              onClick={onClose}
            >
              Proceed to Checkout
            </Link>
            <button 
              onClick={onClose}
              className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
