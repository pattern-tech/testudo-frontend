import React from 'react';

import Image from 'next/image';

interface Props {
  iconSrc: string;
  amount: number;
  name: string;
  dollarAmount?: string;
}

export const EarningIconItem = ({
  iconSrc,
  amount,
  name,
  dollarAmount,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-between odd:mr-10">
      <Image src={iconSrc} alt={amount + name} width={44} height={44} />
      <span className="mt-3 text-lg font-bold leading-tight">
        {amount} {name}
      </span>
      {dollarAmount && (
        <span className=" text-sm font-medium leading-tight text-onPrimaryContainer-dark">
          {dollarAmount}
        </span>
      )}
    </div>
  );
};
