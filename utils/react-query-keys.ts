import {
  NautilusBodyRequest,
  ErgoPayRequestParameter,
} from '@/api/auth/authApi.types';
import { createKeyFactory } from '@/utils/query-key-factory';

const authKeys = createKeyFactory('auth', {
  useGoogleRequest: () => [null],

  useGoogleCallback: () => [null],

  useNautilus: (body: NautilusBodyRequest) => Object.values(body),

  useErgoPay: (params: ErgoPayRequestParameter) => Object.values(params),

  useErgoPaySignIn: (params: ErgoPayRequestParameter, body: string) =>
    Object.values(params),
});

export const queryKeys = {
  authKeys,
};
