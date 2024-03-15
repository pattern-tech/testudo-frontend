import { ApiResponse, ApiError } from '@/utils/types';

export interface GoogleCallbackRequestParameter {
  code?: string;
}

export type SignInSuccessResponse = {
  token: string;
};

export type GoogleCallbackResponse = SignInSuccessResponse | ApiError;

export interface NautilusBodyRequest {
  proof?: string;
  message?: string;
  address?: string;
}

export type NautilusResponse = SignInSuccessResponse | ApiError;

export interface ErgoPayRequestParameter {
  address: string;
}

export type ErgoPaySuccessResponse = ApiResponse<{
  status: number;
}>;

export type ErgoPayResponse = ErgoPaySuccessResponse | ApiError;

export type UserInfoSuccessResponse = {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
  } | null;
  addresses:
    | {
        id: string;
        sign_message: string;
      }[]
    | undefined;
};

export type UserInfoResponse = UserInfoSuccessResponse | ApiError;
