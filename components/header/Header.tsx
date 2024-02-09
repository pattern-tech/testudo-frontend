import Image from 'next/image';

import { Profile } from './Profile';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-surfaceContainerLow-dark px-10 py-3 ">
      <Image src="/images/logo.svg" alt="logo" width={101} height={24} />
      <Profile isLoggedIn={false} />
    </header>
  );
};
