import React from 'react';

interface Props {
  amount: string;
  title: string;
}

export const EarningValues = ({ amount, title }: Props) => {
  return (
    <p className="flex items-center justify-between text-sm font-medium leading-5 even:my-5">
      <span className=" text-onSecondaryContainer-dark">{title}:</span>
      <span className=" ml-10 text-primary-dark">+{amount}</span>
    </p>
  );
};
