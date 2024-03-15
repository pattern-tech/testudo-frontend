import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-surfaceContainerLow-dark py-10">
      <Link
        className="px-3 py-2.5 text-sm font-semibold text-primary-dark"
        href="#"
      >
        FAQs
      </Link>
      <Image
        className="mt-3"
        src="/images/logo.svg"
        alt="logo"
        width={101}
        height={24}
      />
    </div>
  );
};
