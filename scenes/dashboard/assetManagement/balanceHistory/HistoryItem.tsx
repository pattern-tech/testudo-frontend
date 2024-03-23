import React from 'react';

import Image from 'next/image';

interface ActionInfo {
  name: string;
  iconSrc: string;
  amount: string;
  dollarAmount: string;
  description: string;
}

interface Props {
  date: string;
  actions: ActionInfo[];
}

export const HistoryItem = ({ date, actions }: Props) => {
  return (
    <div className="mt-8 flex w-full flex-col items-start">
      <span className="mb-4">{date}</span>

      {actions.map((action, index) => (
        <div
          className="my-2 flex w-full items-center justify-between"
          key={index}
        >
          <div className="flex items-center justify-between">
            <Image
              className="mr-3"
              src={action.iconSrc}
              alt={action.name + action.amount}
              width={24}
              height={24}
            />
            <p className="flex flex-col items-start text-lg font-bold">
              {action.name}
              <span className="text-sm font-medium text-onPrimaryContainer-dark">
                {action.description}
              </span>
            </p>
          </div>
          <p className="flex flex-col items-end text-lg font-bold">
            {action.amount}
            <span className="text-sm font-medium text-onPrimaryContainer-dark">
              {action.dollarAmount}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};
