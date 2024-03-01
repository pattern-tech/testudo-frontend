import {
  NautilusBodyRequest,
  ErgoPayRequestParameter,
  GoogleCallbackRequestParameter,
} from '@/api/auth/authApi.types';
import { createKeyFactory } from '@/utils/query-key-factory';

const authKeys = createKeyFactory('auth', {
  useGoogleCallback: (params: GoogleCallbackRequestParameter) =>
    Object.values(params),

  useNautilus: (body: NautilusBodyRequest) => Object.values(body),

  useErgoPay: (params: ErgoPayRequestParameter) => Object.values(params),

  useUserInfo: (token: string | null) =>
    token ? Object.values(token) : [null],
});

export const queryKeys = {
  authKeys,
};
