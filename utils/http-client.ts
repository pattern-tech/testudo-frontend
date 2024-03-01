import { apiConfig } from '@/utils/constants';
import { ApiError } from '@/utils/types';

export const httpClient = {
  async get<T = unknown, D = unknown>(
    url: string,
    data?: D,
    token?: string | null,
  ): Promise<T | ApiError> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['auth'] = token;
      }

      const res = await fetch(`${apiConfig.BASE_API_URL}${url}`, {
        method: 'GET',
        headers,
        body: JSON.stringify(data),
      });

      if (res.ok) {
        return await res.json();
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);

      return { statusCode: 500, message: 'Request failed' };
    }
  },
  async post<T = unknown, D = unknown>(
    url: string,
    data: D,
  ): Promise<T | ApiError> {
    try {
      const response = await fetch(`${apiConfig.BASE_API_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);

      return { statusCode: 500, message: 'Request failed' };
    }
  },
};
