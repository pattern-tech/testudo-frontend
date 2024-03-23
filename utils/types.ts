export interface ApiResponse<T> {
  response: T;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}
