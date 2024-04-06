import React, { useState } from 'react';

import Image from 'next/image';

import circleArrowLeftSvg from '@/assets/svg/circleArrowLeft.svg';
import Button from '@/components/Button';
import InputBox from '@/components/InputBox';

interface Props {
  // amount: { ergo: string; rsn: string };
  onBack: () => void;
  onForward: () => void;
}

const ErgoPaySecondStep = ({ onBack, onForward }: Props) => {
  const [address, setAddress] = useState('');

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
        Second step: Continue to ErgoPay
      </div>
      <p className="flex w-full flex-col gap-4 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal text-primaryFixed-dark">
        Please import your ergo wallet address first.
      </p>
      <InputBox
        required={false}
        id="outlined-required"
        label="Wallet address"
        className="w-full"
        onChange={(e) => setAddress(e.target.value)}
        value={address.length > 0 ? address : ''}
        type="text"
      />
      <Button
        disabled={address.length === 0}
        fullWidth
        className="w-full disabled:opacity-60"
        kind="Filled"
        onClick={onForward}
      >
        Continue to third step
      </Button>
    </div>
  );
};

export default ErgoPaySecondStep;
