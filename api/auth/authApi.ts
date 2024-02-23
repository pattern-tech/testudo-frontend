import {
  GoogleRequestResponse,
  GoogleCallbackResponse,
  NautilusBodyRequest,
  NautilusResponse,
  ErgoPayResponse,
  ErgoPaySignInResponse,
  ErgoPayRequestParameter,
} from '@/api/auth/authApi.types';
import { httpClient } from '@/utils/http-client';

export const authApi = {
  googleRequest: async (): Promise<GoogleRequestResponse> =>
    httpClient.get(`/auth/google`),

  googleCallback: async (): Promise<GoogleCallbackResponse> =>
    httpClient.get(`/auth/google/callback`),

  nautilus: async (body: NautilusBodyRequest): Promise<NautilusResponse> =>
    httpClient.post(`/auth/nautilus`, body),

  ergoPay: async ({
    address,
  }: ErgoPayRequestParameter): Promise<ErgoPayResponse> =>
    httpClient.get(`/ergopay/${address}`), // should be ergoauth://localhost/auth/ergopay/:address

  ergoPaySignIn: async (
    address: ErgoPayRequestParameter,
    body: string,
  ): Promise<ErgoPaySignInResponse> =>
    httpClient.get(`/ergopay/${address}/signin`, body), // should be ergoauth://localhost/auth/ergopay/:address
};
