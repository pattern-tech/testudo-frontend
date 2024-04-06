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

const ErgoPayThirdStep = ({ amount, onBack }: Props) => {
  const time = useTimer(23);

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
        Third step: Finalize the payment
      </div>
      <p className="flex w-full flex-col gap-4 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal text-primaryFixed-dark">
        Please connect your wallet with this QR code to ErgoPay
      </p>
      <div className="m-auto flex flex-col items-center gap-2">
        <QRCodeSection size={156} data="#" />

        <p className="flex flex-col items-center gap-1 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal text-onPrimaryContainer-dark ">
          Time remained to generate new QR code:
          <span className="text-Primary-dark text-sm font-semibold">
            {Number(time.min) > 0 && time.min + ' Min, '}
            {time.sec} seconds
          </span>
        </p>
      </div>
      <p className="flex w-full flex-col gap-4 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal text-primaryFixed-dark">
        This asset will be finally swapped and your final investment will be:
        <span className="text-center text-sm font-bold">20 ERG & 10 RSN</span>
      </p>
      <div className="flex w-full flex-col gap-4 rounded-[1.25rem] bg-surfaceContainerLow-dark px-6 py-4 text-primaryFixed-dark">
        <h4 className="text-base font-semibold">Have ErgoPay application?</h4>
        <p className="text-xs font-normal">
          If you have ErgoPay application, you can continue with the application
        </p>
        <Button className="w-full" kind="Outlined">
          Open ErgoPay application
        </Button>
      </div>
    </div>
  );
};

export default ErgoPayThirdStep;
