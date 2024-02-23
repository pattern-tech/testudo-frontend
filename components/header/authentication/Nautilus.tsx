'use client';
import React from 'react';

import { Address } from '@ergolabs/ergo-sdk';
import Image from 'next/image';
import { Observable, of, throwError } from 'rxjs';

import Button from '@/components/button/Button';

export const Nautilus = () => {
  const ergoConnector = window.ergoConnector;

  const connectWallet = (): Observable<unknown> => {
    if (!ergoConnector?.nautilus) {
      return throwError(() => new Error('EXTENSION_NOT_FOUND'));
    }

    if (!ergoConnector.nautilus?.getContext) {
      return of(
        <>
          Wallet API has changed. Be sure to update your wallet to continue
          using it
        </>,
      );
    }

    return ergoConnector.nautilus.connect();
  };

  const getUsedAddresses = async (): Observable<Address[]> => {
    const walletAddress = await ergoConnector.nautilus
      .getContext()
      .then(async (context) => {
        console.log('Wallet Address:', await context.get_used_addresses()[0]);

        return context.get_used_addresses();
      })
      .catch((error: Error) => {
        throw error;
      });

    return walletAddress;
  };

  connectWallet();

  return (
    <Button
      fullWidth
      kind="Tonal"
      onClick={async () => {
        getUsedAddresses();
      }}
    >
      <Image
        src="/images/nautilusLogo.svg"
        alt="nautilusLogo logo"
        width={18}
        height={18}
        className="mr-2"
      />
      Connect Nautilus wallet
    </Button>
  );
};
