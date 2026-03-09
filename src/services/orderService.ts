import { apiPost, apiGet, apiPut, apiDelete } from '@/utils/api';

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface CreateOrderPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country?: string;
  state?: string;
  shippingMethod: string;
  shippingCost: number;
  subtotal: number;
  tax: number;
  total: number;
  orderItems: OrderItem[];
  paymentMethod: string;
}

export interface Order {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country?: string | null;
  state?: string | null;
  shippingMethod: string;
  shippingCost: number;
  subtotal: number;
  tax: number;
  total: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderItems: Array<{
    id: number;
    productId: number;
    quantity: number;
    price: number;
    product?: any;
  }>;
  payment: {
    id: number;
    amount: number;
    paymentMethod: string;
    paymentStatus: string;
  } | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export const orderService = {
  async createOrder(payload: CreateOrderPayload) {
    return apiPost<ApiResponse<{ id: number; orderNo: string }>>('/api/orders', payload);
  },

  async getOrderById(id: number, email?: string) {
    const query = email ? `?email=${encodeURIComponent(email)}` : '';
    return apiGet<ApiResponse<Order>>(`/api/orders/${id}${query}`);
  },

  async listOrders(
    page = 1,
    limit = 10,
    status?: string,
    email?: string,
    startDate?: string,
    endDate?: string
  ) {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('limit', limit.toString());
    if (status) params.set('status', status);
    if (email) params.set('email', email);
    if (startDate) params.set('startDate', startDate);
    if (endDate) params.set('endDate', endDate);

    return apiGet<ApiResponse<{ orders: Order[]; total: number; page: number; totalPages: number }>>(
      `/api/orders?${params.toString()}`
    );
  },

  async updateOrderStatus(id: number, status: string) {
    return apiPut<ApiResponse<Order>>(`/api/orders/${id}`, { status });
  },

  async deleteOrder(id: number) {
    return apiDelete<ApiResponse<{ id: number }>>(`/api/orders/${id}`);
  },
};
