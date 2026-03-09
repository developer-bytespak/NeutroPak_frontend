import { Product } from '@/types';

export interface CartItem extends Product {
  quantity: number;
}

const CART_KEY = 'nutreopak_cart';

export const cartService = {
  // Get all cart items
  getCart: (): CartItem[] => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem(CART_KEY);
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  },

  // Save cart to storage
  saveCart: (items: CartItem[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  },

  // Add item to cart
  addToCart: (product: Product, quantity: number = 1) => {
    const cart = cartService.getCart();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    cartService.saveCart(cart);
    return cart;
  },

  // Remove item from cart
  removeFromCart: (productId: string) => {
    const cart = cartService.getCart();
    const filtered = cart.filter((item) => item.id !== productId);
    cartService.saveCart(filtered);
    return filtered;
  },

  // Update item quantity
  updateQuantity: (productId: string, quantity: number) => {
    const cart = cartService.getCart();
    const item = cart.find((item) => item.id === productId);

    if (item) {
      if (quantity <= 0) {
        return cartService.removeFromCart(productId);
      }
      item.quantity = quantity;
      cartService.saveCart(cart);
    }

    return cart;
  },

  // Clear cart
  clearCart: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CART_KEY);
    }
  },

  // Get cart total
  getCartTotal: (): number => {
    const cart = cartService.getCart();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  // Get cart item count
  getCartCount: (): number => {
    const cart = cartService.getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
  },

  // Get cart subtotal, tax, and shipping
  getCartSummary: (taxRate: number = 0.1, shippingCost: number = 0) => {
    const subtotal = cartService.getCartTotal();
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shippingCost;

    return {
      subtotal,
      tax,
      shippingCost,
      total,
    };
  },
};

export default cartService;
