import React from 'react';

import Image from 'next/image';

import check from '@/assets/svg/check.svg';
import ergCoin from '@/assets/svg/ergCoin.svg';
import rsnCoin from '@/assets/svg/rsnCoin.svg';
import stake from '@/assets/svg/stake.svg';
import unStake from '@/assets/svg/unStake.svg';
import withdraw from '@/assets/svg/withdraw.svg';
import Button from '@/components/Button';
import { EarningIconItem } from '@/components/EarningIconItem';

import { HistoryItem } from './HistoryItem';

const BalanceHistory = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="flex items-center justify-between">
        <EarningIconItem
          iconSrc={ergCoin}
          name="ERG"
          amount={113.234}
          dollarAmount="~$32.31"
        />
        <EarningIconItem
          iconSrc={rsnCoin}
          name="RSN"
          amount={113.234}
          dollarAmount="~$32.31"
        />
      </div>
      <div className=" mt-8 rounded-[1.25rem] bg-surfaceContainer-dark px-6 py-4 ">
        <p className=" flex items-center justify-between text-sm font-medium text-green-dark">
          <Image
            className="mr-3"
            src={check}
            alt="check icon"
            width={24}
            height={24}
          />
          All your RSN and ERG tokens are staked on our platform, and any
          rewarded RSN will be automatically staked within the app.
        </p>
        <p className="mt-4 text-xs font-normal text-onSurfaceVariant-dark">
          <span className="pb-1 text-primary-dark">
            Why I see this message?
          </span>
          <br />
          Your assets are stacked trough Testudo´s platform, to support
          Testudo´s watchers and earn rewards as compensation. Dismiss this note
        </p>
      </div>
      <hr className="mt-8 w-full border border-solid border-outlineVariant-dark" />
      <div className="flex w-full flex-col items-center justify-between">
        <HistoryItem
          date="Apr 16 2023"
          actions={[
            {
              name: 'Stake',
              iconSrc: stake,
              description: 'Transferred from TWppiAa...Hoh9nPu',
              amount: '10 RSN & 20 ERG',
              dollarAmount: '$15.00',
            },
            {
              name: 'Unstake',
              iconSrc: unStake,
              description: 'Unstacked and returned to  TWppiAa...Hoh9nPu',
              amount: '10 RSN & 20 ERG',
              dollarAmount: '$15.00',
            },
          ]}
        />
        <HistoryItem
          date="Apr 15 2023"
          actions={[
            {
              name: 'Withdraw',
              iconSrc: withdraw,
              description: 'Transferred to TWppiAa...Hoh9nPu',
              amount: '10 RSN',
              dollarAmount: '$15.00',
            },
          ]}
        />
        <Button className="mt-6" kind="Outlined">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default BalanceHistory;
