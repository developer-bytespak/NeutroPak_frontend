import { apiPost } from '@/utils/api';
import { authService as StorageAuthService } from '@/lib/auth';

export interface LoginResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: number;
      email: string;
      name: string;
      role: string;
    };
  };
  message: string;
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await apiPost<LoginResponse>('/api/auth/login', {
      email,
      password,
    });

    if (response.data.data) {
      // Store tokens
      StorageAuthService.setTokens(
        response.data.data.accessToken,
        response.data.data.refreshToken
      );
    }

    return response.data;
  },

  logout() {
    StorageAuthService.clearTokens();
  },

  isAuthenticated(): boolean {
    return StorageAuthService.isAuthenticated();
  },

  isAdmin(): boolean {
    return StorageAuthService.isAdmin();
  },
};
