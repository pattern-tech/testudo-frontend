import { useQuery } from '@tanstack/react-query';

import { authApi } from '@/api/auth/authApi';
import {
  GoogleRequestSuccessResponse,
  GoogleRequestResponse,
  SignInSuccessResponse,
  GoogleCallbackResponse,
  NautilusBodyRequest,
  NautilusResponse,
  ErgoPaySuccessResponse,
  ErgoPayResponse,
  ErgoPaySignInResponse,
  ErgoPayRequestParameter,
} from '@/api/auth/authApi.types';
import { queryKeys } from '@/utils/react-query-keys';
import { ApiError } from '@/utils/types';

export const authApiGateway = {
  useGoogleRequest: () =>
    useQuery<GoogleRequestResponse, ApiError, GoogleRequestSuccessResponse>(
      queryKeys.authKeys.useGoogleRequest(),
      {
        queryFn: () => authApi.googleRequest(),
      },
    ),

  useGoogleCallback: () =>
    useQuery<GoogleCallbackResponse, ApiError, SignInSuccessResponse>(
      queryKeys.authKeys.useGoogleCallback(),
      {
        queryFn: () => authApi.googleCallback(),
      },
    ),

  useNautilus: (body: NautilusBodyRequest) =>
    useQuery<NautilusResponse, ApiError, SignInSuccessResponse>(
      queryKeys.authKeys.useNautilus(body),
      {
        queryFn: () => authApi.nautilus(body),
      },
    ),
  useErgoPay: (parameter: ErgoPayRequestParameter) =>
    useQuery<ErgoPayResponse, ApiError, ErgoPaySuccessResponse>(
      queryKeys.authKeys.useErgoPay(parameter),
      {
        queryFn: () => authApi.ergoPay(parameter),
      },
    ),
  useErgoPaySignIn: (parameter: ErgoPayRequestParameter, body: string) =>
    useQuery<ErgoPaySignInResponse, ApiError, SignInSuccessResponse>(
      queryKeys.authKeys.useErgoPaySignIn(parameter, body),
      {
        queryFn: () => authApi.ergoPaySignIn(parameter, body),
      },
    ),
};
