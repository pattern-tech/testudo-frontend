import React from 'react';

import Image from 'next/image';

import circleArrowLeftSvg from '@/assets/svg/circleArrowLeft.svg';
import nautilusLogo from '@/assets/svg/nautilusLogo.svg';
import Button from '@/components/Button';

interface Props {
  amount: { ergo: string; rsn: string };
  onBack: () => void;
}

const Wallet = ({ amount, onBack }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between gap-5 rounded-[1.25rem] bg-surfaceContainer-dark px-6 py-4">
      <div className="flex items-center gap-2">
        <button onClick={onBack}>
          <Image
            src={circleArrowLeftSvg}
            alt="arrow left icon"
            width={48}
            height={48}
          />
        </button>
        Second step: Investing wallet
      </div>
      <p className="flex w-full flex-col gap-4 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal text-primaryFixed-dark">
        Continue your payment via Nautilis wallet.
        <br />
        This asset will be finally swapped and your final investment will be:
        <span className="text-center text-sm font-bold">20 ERG & 10 RSN</span>
      </p>
      <Button fullWidth kind="Tonal">
        <Image
          src={nautilusLogo}
          alt="nautilusLogo logo"
          width={18}
          height={18}
          className="mr-2"
        />
        Nautilus wallet
      </Button>
    </div>
  );
};

export default Wallet;
