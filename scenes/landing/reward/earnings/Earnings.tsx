import React from 'react';

import ergCoin from '@/assets/svg/ergCoin.svg';
import rsnCoin from '@/assets/svg/rsnCoin.svg';
import Button from '@/components/Button';
import { EarningIconItem } from '@/components/EarningIconItem';

import { EarningValues } from './EarningValues';

export const Earnings = () => {
  return (
    <div className="mt-[3.75rem] flex flex-col items-center justify-between">
      <div className="flex flex-row items-center">
        <EarningIconItem iconSrc={ergCoin} name="ERG" amount={500} />
        <EarningIconItem iconSrc={rsnCoin} name="RSN" amount={500} />
      </div>

      <div className="mb-[3.75rem] mt-5">
        <EarningValues title="Daily Earnings" amount="0.07690131  RSN" />
        <EarningValues title="Monthly Earnings" amount="2.36573251  RSN" />
        <EarningValues title="Yearly Earnings" amount="32.39  RSN" />
      </div>
      <Button kind="Filled">Earn now</Button>
    </div>
  );
};
