import React from 'react';

import Image from 'next/image';

// import { authApiGateway } from '@/api/auth';
import Button from '@/components/button/Button';

interface Props {
  className?: string;
}

export const Google = ({ className }: Props) => {
  // const { useGoogleRequest, useGoogleCallback } = authApiGateway;
  // const googleRequest = useGoogleRequest();
  // const googleCallback = useGoogleCallback();

  return (
    <Button
      fullWidth
      kind="Tonal"
      className={`${className} w-full rounded-s-2xl`}
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
