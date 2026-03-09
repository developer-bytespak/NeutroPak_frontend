import { apiPost } from '@/utils/api';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt: string;
  };
  message: string;
}

export const contactService = {
  async submitContact(data: ContactFormData): Promise<ContactResponse> {
    const response = await apiPost<ContactResponse>('/api/contact', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    return response.data;
  },
};
