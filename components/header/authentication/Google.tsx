import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { authApiGateway } from '@/api/auth';
import Button from '@/components/button/Button';
import { apiConfig } from '@/utils/constants';

interface Props {
  className?: string;
  handleCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const Google = ({ className, handleCloseModal }: Props) => {
  const searchParams = useSearchParams();

  const [code, setCode] = useState(searchParams?.get('code') ?? undefined);

  const currentUrl = window.location.href;
  const updatedUrl = currentUrl.split('?')[0];

  const { useGoogleCallback } = authApiGateway;
  const googleCallback = useGoogleCallback({
    code,
  });

  useEffect(() => {
    if (googleCallback?.data?.token) {
      localStorage.setItem('token', googleCallback?.data?.token);
      setCode(undefined);
      window.history.replaceState({}, document.title, updatedUrl);
      handleCloseModal(false);
    }
  }, [googleCallback.data?.token]);

  return (
    <Button
      fullWidth
      kind="Tonal"
      className={`${className} w-full`}
      onClick={() =>
        (window.location.href = `${apiConfig.BASE_API_URL}/auth/google`)
      }
    >
      <Image
        src="/images/googleLogo.svg"
        alt="google logo"
        width={18}
        height={18}
        className="mr-2"
      />
      Continue with Google
    </Button>
  );
};
