'use client';
import { useState } from 'react';

import Image from 'next/image';

import Button from '../button/Button';
import PopUp from '../popUp/PopUp';

import { Authentication } from './authentication/Authentication';

interface Props {
  isLoggedIn: boolean;
}

export const Profile = ({ isLoggedIn }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

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
        <Button kind="Filled" onClick={() => setIsOpen(true)}>
          Sign in/ Register
        </Button>
      )}
      {isOpen && (
        <PopUp
          title="Login"
          state={isOpen}
          handleClose={() => setIsOpen(false)}
        >
          <Authentication />
        </PopUp>
      )}
    </>
  );
};
