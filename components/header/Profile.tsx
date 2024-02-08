'use client';
import { ButtonBase } from '@mui/material';
import Image from 'next/image';

interface Props {
  isLoggedIn: boolean;
}

export const Profile = ({ isLoggedIn }: Props) => {
  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-center justify-between">
          <div className="mr-3 flex flex-row-reverse items-center justify-between">
            <span className="text-sm font-medium text-onPrimary-light">
              Sepanta Pouya
            </span>
            <Image
              src="/images/profileSample.svg"
              alt="profile pic"
              width={24}
              height={24}
              className="mr-2"
            />
          </div>
          <Image
            src="/images/logout.svg"
            alt="logout icon"
            width={48}
            height={48}
          />
        </div>
      ) : (
        <ButtonBase className="rounded-3xl bg-primary-dark px-6 py-2.5 text-sm font-semibold text-onPrimary-dark ">
          Sign in/ Register
        </ButtonBase>
      )}
    </>
  );
};
