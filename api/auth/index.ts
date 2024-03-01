import { useQuery } from '@tanstack/react-query';

import { authApi } from '@/api/auth/authApi';
import {
  SignInSuccessResponse,
  GoogleCallbackResponse,
  NautilusBodyRequest,
  NautilusResponse,
  ErgoPaySuccessResponse,
  ErgoPayResponse,
  ErgoPayRequestParameter,
  GoogleCallbackRequestParameter,
  UserInfoSuccessResponse,
  UserInfoResponse,
} from '@/api/auth/authApi.types';
import { queryKeys } from '@/utils/react-query-keys';
import { ApiError } from '@/utils/types';

export const authApiGateway = {
  useGoogleCallback: (parameter: GoogleCallbackRequestParameter) =>
    useQuery<GoogleCallbackResponse, ApiError, SignInSuccessResponse>(
      queryKeys.authKeys.useGoogleCallback(parameter),
      () => authApi.googleCallback(parameter),
      { enabled: !!parameter.code },
    ),

  useNautilus: (body: NautilusBodyRequest) =>
    useQuery<NautilusResponse, ApiError, SignInSuccessResponse>(
      queryKeys.authKeys.useNautilus(body),
      () => authApi.nautilus(body),
      { enabled: !!(body.address && body.message && body.proof) },
    ),
  useErgoPay: (parameter: ErgoPayRequestParameter) =>
    useQuery<ErgoPayResponse, ApiError, ErgoPaySuccessResponse>(
      queryKeys.authKeys.useErgoPay(parameter),
      {
        queryFn: () => authApi.ergoPay(parameter),
      },
    ),

  useUserInfo: (token: string | null) =>
    useQuery<UserInfoResponse, ApiError, UserInfoSuccessResponse>(
      queryKeys.authKeys.useUserInfo(token),
      () => authApi.userInfo(token),
      {
        enabled: !!token, // Only enable the query when the token is present
      },
    ),
};
