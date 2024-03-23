import React from 'react';

import { HistoryItem } from './HistoryItem';

export const RewardHistory = () => {
  return (
    <div className="mt-6 flex flex-col">
      <HistoryItem
        date="Apr 16 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
      <HistoryItem
        date="Apr 15 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
      <HistoryItem
        date="Apr 14 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
      <HistoryItem
        date="Apr 13 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
      <HistoryItem
        date="Apr 12 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
      <HistoryItem
        date="Apr 11 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
      <HistoryItem
        date="Apr 10 2023"
        description="Stacked into your assets"
        amount="10 RSN"
        dollarAmount="$15.00"
      />
    </div>
  );
};
