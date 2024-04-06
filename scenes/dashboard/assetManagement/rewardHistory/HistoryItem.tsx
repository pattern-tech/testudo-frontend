import React from 'react';

import Image from 'next/image';

import reward from '@/assets/svg/reward.svg';

interface Props {
  date: string;
  amount: string;
  dollarAmount: string;
  description: string;
}

export const HistoryItem = ({
  date,
  amount,
  dollarAmount,
  description,
}: Props) => {
  return (
    <div className="my-2 flex w-full items-center justify-between">
      <div className="flex items-center justify-between">
        <Image
          className="mr-3"
          src={reward}
          alt="reward icon"
          width={24}
          height={24}
        />
        <p className="flex flex-col items-start text-lg font-bold">
          {date}
          <span className="text-sm font-medium text-onPrimaryContainer-dark">
            {description}
          </span>
        </p>
      </div>
      <p className="flex flex-col items-end text-lg font-bold">
        {amount}
        <span className="text-sm font-medium text-onPrimaryContainer-dark">
          {dollarAmount}
        </span>
      </p>
    </div>
  );
};
