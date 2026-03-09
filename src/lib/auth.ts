import { JwtPayload } from '@/types';

const JWT_KEY = 'nutreopak_jwt';
const REFRESH_TOKEN_KEY = 'nutreopak_refresh_token';

export const authService = {
  // Store tokens
  setTokens: (accessToken: string, refreshToken: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(JWT_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
  },

  // Get access token
  getAccessToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(JWT_KEY);
    }
    return null;
  },

  // Get refresh token
  getRefreshToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(REFRESH_TOKEN_KEY);
    }
    return null;
  },

  // Clear tokens
  clearTokens: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(JWT_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return authService.getAccessToken() !== null;
  },

  // Decode JWT (basic implementation)
  decodeToken: (token: string): JwtPayload | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  },

  // Get current user info
  getCurrentUser: () => {
    const token = authService.getAccessToken();
    if (token) {
      return authService.decodeToken(token);
    }
    return null;
  },

  // Check if user is admin
  isAdmin: (): boolean => {
    const user = authService.getCurrentUser();
    return user?.role === 'admin';
  },
};

export default authService;
