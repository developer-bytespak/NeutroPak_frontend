'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types';
import { cartService, CartItem } from '@/lib/cart';

interface CartContextType {
  cart: CartItem[];
  total: number;
  count: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartSummary: () => {
    subtotal: number;
    tax: number;
    shippingCost: number;
    total: number;
  };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate cart from localStorage
  useEffect(() => {
    setCart(cartService.getCart());
    setIsHydrated(true);
  }, []);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    const updatedCart = cartService.addToCart(product, quantity);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cartService.removeFromCart(productId);
    setCart(updatedCart);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedCart = cartService.updateQuantity(productId, quantity);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    cartService.clearCart();
    setCart([]);
  };

  const total = cartService.getCartTotal();
  const count = cartService.getCartCount();

  if (!isHydrated) {
    return <>{children}</>;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        count,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        updateQuantity: handleUpdateQuantity,
        clearCart: handleClearCart,
        getCartSummary: () => cartService.getCartSummary(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
