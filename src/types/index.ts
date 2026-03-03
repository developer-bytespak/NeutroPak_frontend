export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  price: number;
  originalPrice: number;
  category: string;
  rating: number;
  reviews: number;
  images: string[];
  variants: Array<{ size: string; price: number }>;
  inStock: boolean;
  sku: string;
  imageUrl?: string; // Legacy
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface JwtPayload {
  id: string;
  email: string;
  role: 'admin' | 'user';
  iat: number;
  exp: number;
}
