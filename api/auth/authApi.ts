import {
  GoogleCallbackResponse,
  NautilusBodyRequest,
  NautilusResponse,
  ErgoPayResponse,
  ErgoPayRequestParameter,
  GoogleCallbackRequestParameter,
  UserInfoResponse,
} from '@/api/auth/authApi.types';
import { httpClient } from '@/utils/http-client';

export const authApi = {
  googleCallback: async (
    parameter: GoogleCallbackRequestParameter,
  ): Promise<GoogleCallbackResponse> =>
    httpClient.get(`/auth/google/callback?code=${parameter.code}`),

  nautilus: async (body: NautilusBodyRequest): Promise<NautilusResponse> =>
    httpClient.post(`/auth/nautilus`, body),

  ergoPay: async ({
    address,
  }: ErgoPayRequestParameter): Promise<ErgoPayResponse> =>
    httpClient.get(`/ergopay/${address}`), // should be ergoauth://localhost/auth/ergopay/:address

  userInfo: async (token: string | null): Promise<UserInfoResponse> =>
    httpClient.get(`/auth/getUserInfo`, undefined, token),
};
