import Image from 'next/image';

import logo from '@/assets/svg/logo.svg';

import { Profile } from './Profile';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-surfaceContainerLow-dark px-10 py-3 ">
      <Image src={logo} alt="logo" width={101} height={24} />
      <Profile />
    </header>
  );
};
