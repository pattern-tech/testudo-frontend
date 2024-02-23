import { apiConfig } from '@/utils/constants';
import { ApiError, ApiResponse } from '@/utils/types';

export const httpClient = {
  async get<T = unknown, D = unknown>(
    url: string,
    data?: D,
  ): Promise<ApiResponse<T> | ApiError> {
    const res = await fetch(`${apiConfig.BASE_API_URL}${url}`, {
      method: 'GET',
      body: JSON.stringify(data),
    });

    return await res.json();
  },
  async post<T = unknown, D = unknown>(
    url: string,
    data: D,
  ): Promise<ApiResponse<T> | ApiError> {
    const response = await fetch(`${apiConfig.BASE_API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return await response.json();
  },
};
