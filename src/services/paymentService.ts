import { apiPost, apiGet, apiPut } from '@/utils/api';

export interface Payment {
  id: number;
  orderId: number;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  collectedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  order?: any;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export const paymentService = {
  async listPayments(
    page = 1,
    limit = 10,
    status?: string,
    startDate?: string,
    endDate?: string
  ) {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    params.set('limit', limit.toString());
    if (status) params.set('status', status);
    if (startDate) params.set('startDate', startDate);
    if (endDate) params.set('endDate', endDate);

    return apiGet<ApiResponse<{ payments: Payment[]; total: number; page: number; totalPages: number }>>(
      `/api/payments?${params.toString()}`
    );
  },

  async getPaymentById(id: number) {
    return apiGet<ApiResponse<Payment>>(`/api/payments/${id}`);
  },

  async markPaymentCollected(id: number, updateOrder?: boolean) {
    return apiPut<ApiResponse<Payment>>(`/api/payments/${id}`, {
      status: 'COMPLETED',
      updateOrder,
    });
  },
};
