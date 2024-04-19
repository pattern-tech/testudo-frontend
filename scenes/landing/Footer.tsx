import React from 'react';

import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-surfaceContainerLow-dark py-10">
      <Image src="/images/logo.svg" alt="logo" width={101} height={24} />
    </div>
  );
};
