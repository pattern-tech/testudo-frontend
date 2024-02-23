import React from 'react';

import Button from '@/components/button/Button';

import { StatisticBox } from './StatisticBox';

export const Statistics = () => {
  return (
    <div className="mt-40 flex flex-col items-center">
      <h2 className=" text-[2.5rem] font-extrabold leading-loose">
        Rosen Bridge statistics:
      </h2>
      <div className="my-5 flex w-full flex-row items-center justify-between gap-5">
        <StatisticBox value="$140 M" description="Total value locked" />
        <StatisticBox value="100+" description="Collaborated stakers " />
        <StatisticBox value="200+" description="Online watchers" />
        <StatisticBox value="+ $23K" description="Claimed rewards" />
      </div>
      <Button kind="Filled">Stake now</Button>
    </div>
  );
};
