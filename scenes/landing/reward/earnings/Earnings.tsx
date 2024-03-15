import React from 'react';

import Button from '@/components/button/Button';

import { EarningIconItem } from './EarningIconItem';
import { EarningValues } from './EarningValues';

export const Earnings = () => {
  return (
    <div className="mt-[3.75rem] flex flex-col items-center justify-between">
      <div className="flex flex-row items-center">
        <EarningIconItem
          iconSrc="/images/ergCoin.svg"
          name="ERG"
          amount={500}
        />
        <EarningIconItem
          iconSrc="/images/rsnCoin.svg"
          name="RSN"
          amount={500}
        />
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
