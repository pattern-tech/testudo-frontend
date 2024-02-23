import { ApiResponse, ApiError } from '@/utils/types';

export type GoogleRequestSuccessResponse = ApiResponse<{
  address: string;
}>;

export type GoogleRequestResponse = GoogleRequestSuccessResponse | ApiError;

export type SignInSuccessResponse = ApiResponse<{
  jwtToken: string;
}>;

export type GoogleCallbackResponse = SignInSuccessResponse | ApiError;

export interface NautilusBodyRequest {
  proof: string;
  message: string;
  address: string;
}

export type NautilusResponse = SignInSuccessResponse | ApiError;

export interface ErgoPayRequestParameter {
  address: string;
}

export type ErgoPaySuccessResponse = ApiResponse<{
  status: number;
}>;

export type ErgoPayResponse = ErgoPaySuccessResponse | ApiError;

export type ErgoPaySignInResponse = SignInSuccessResponse | ApiError;
