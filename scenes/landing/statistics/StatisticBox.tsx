import React from 'react';

interface Props {
  value: string;
  description: string;
}

export const StatisticBox = ({ value, description }: Props) => {
  return (
    <div className="flex w-1/4 flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7 ">
      <span className=" text-xl font-extrabold">{value}</span>
      <span className="mt-3 text-sm font-medium text-onSecondaryContainer-dark">
        {description}
      </span>
    </div>
  );
};
