import React from 'react';

import { Earnings } from './earnings/Earnings';

export const Reward = () => {
  return (
    <div className=" mt-40 flex flex-col items-center rounded-[1.25rem] bg-surfaceContainer-dark py-7 ">
      <h2 className=" text-[2.5rem] font-extrabold leading-tight">
        Estimated reward
      </h2>
      <p className=" mt-3 text-2xl font-semibold text-primaryFixed-dark">
        Potential earnings from current APR
      </p>
      <Earnings />
    </div>
  );
};