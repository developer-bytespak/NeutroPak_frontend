import { apiPost, apiGet, apiPut, apiDelete } from '@/utils/api';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductPayload {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export const productService = {
  async getAllProducts(
    page = 1,
    limit = 10,
    category?: string,
    search?: string,
    sortBy?: string
  ) {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('limit', limit.toString());
    if (category) params.set('category', category);
    if (search) params.set('search', search);
    if (sortBy) params.set('sortBy', sortBy);

    return apiGet<ApiResponse<{ products: Product[]; total: number; page: number; totalPages: number }>>(
      `/api/products?${params.toString()}`
    );
  },

  async getProductById(id: number) {
    return apiGet<ApiResponse<Product>>(`/api/products/${id}`);
  },

  async createProduct(payload: CreateProductPayload) {
    return apiPost<ApiResponse<Product>>('/api/products', payload);
  },

  async updateProduct(id: number, payload: Partial<CreateProductPayload>) {
    return apiPut<ApiResponse<Product>>(`/api/products/${id}`, payload);
  },

  async deleteProduct(id: number) {
    return apiDelete<ApiResponse<{ id: number }>>(`/api/products/${id}`);
  },
};
