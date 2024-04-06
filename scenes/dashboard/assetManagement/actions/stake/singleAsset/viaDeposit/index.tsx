import React from 'react';

import Image from 'next/image';

import circleArrowLeftSvg from '@/assets/svg/circleArrowLeft.svg';
import Button from '@/components/Button';
import QRCodeSection from '@/components/QRCode';
import useTimer from '@/utils/useTimer';

interface Props {
  amount: { ergo: string; rsn: string };
  onBack: () => void;
}

const Deposit = ({ amount, onBack }: Props) => {
  const time = useTimer(900);

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
      <p className="flex flex-col gap-4 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal text-primaryFixed-dark">
        Send{' '}
        {amount.ergo.length > 0 ? amount.ergo + ' ERG' : amount.rsn + ' RSN'} to
        Testudo wallet.
        <br />
        It will finally adjust and swapped automatically by our platform and
        your final funds will be:
        <span className="text-center text-sm font-semibold">
          20 ERG & 10 RSN
        </span>
      </p>
      <div className="m-auto flex flex-col gap-3">
        <QRCodeSection size={156} data="#" />
        <Button className="w-full disabled:opacity-60" kind="Filled">
          Copy address
        </Button>
        <p className="flex flex-col items-center gap-1 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal ">
          Time remaining:
          <span className="text-sm font-semibold text-primary-dark">
            {Number(time.min) > 0 && time.min + ' Min, '}
            {time.sec} seconds
          </span>
        </p>
      </div>
      <p className="w-full rounded-[1.25rem] bg-surfaceContainerLow-dark p-4 text-xs font-normal text-[#EBC13E]">
        Only send{' '}
        {amount.ergo.length > 0
          ? amount.ergo + ' Ergo(ERG)'
          : amount.rsn + ' Rose(RSN)'}{' '}
        to this address. Other assets will be lost forever.
      </p>
    </div>
  );
};

export default Deposit;
