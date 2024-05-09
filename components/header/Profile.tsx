'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

import { authApiGateway } from '@/api/auth';
import logout from '@/assets/svg/logout.svg';
import profileSample from '@/assets/svg/profileSample.svg';

import Button from '../Button';
import PopUp from '../PopUp';

import { Authentication } from './authentication/Authentication';

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [googleCode, setGoogleCode] = useState<string | undefined>(undefined);
  const router = useRouter();
  const token = localStorage?.getItem('token');
  const isLoggedIn = Boolean(token && token.length > 0);
  const { useUserInfo } = authApiGateway;
  const userInfo = useUserInfo(token);

  useEffect(() => {
    setGoogleCode(searchParams.get('code') ?? undefined);
  }, [searchParams]);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    if (token && token.length > 0) {
      userInfo.refetch();
    }
  }, [token, userInfo]);

  useEffect(() => {
    if (googleCode) {
      setIsOpen(true);
    }
  }, [googleCode]);

  if (!isLoggedIn && isOpen) {
    return (
      <PopUp title="Login" state={isOpen} handleClose={() => setIsOpen(false)}>
        <Authentication handleCloseModal={setIsOpen} />
      </PopUp>
    );
  }

  if (isLoggedIn && userInfo?.data) {
    return (
      <div className="flex items-center justify-between">
        <div className="mr-3 flex flex-row-reverse items-center justify-between">
          <span className="text-sm font-medium text-onPrimary-light">
            {userInfo?.data?.addresses
              ? `${userInfo?.data?.addresses[0]?.id.slice(0, 8)}...${userInfo?.data?.addresses[0]?.id.slice(-8)}`
              : `${userInfo?.data?.user?.firstName} ${userInfo?.data?.user?.lastName}`}
          </span>
          <Image
            src={
              userInfo?.data?.addresses
                ? profileSample
                : (userInfo?.data?.user?.picture as string)
            }
            alt="profile pic"
            width={24}
            height={24}
            className="mr-2 rounded"
          />
        </div>
        <IconButton
          onClick={() => {
            localStorage.removeItem('token');
            setGoogleCode(undefined);
            router.push('/');
          }}
          className="m-0 p-0"
        >
          <Image src={logout} alt="logout icon" width={48} height={48} />
        </IconButton>
      </div>
    );
  } else if (!isLoggedIn) {
    return (
      <Button kind="Filled" onClick={() => setIsOpen(true)}>
        Sign in/ Register
      </Button>
    );
  }
};
