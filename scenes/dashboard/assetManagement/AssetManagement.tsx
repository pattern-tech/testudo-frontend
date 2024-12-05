'use client';
import React, { useState } from 'react';

import Image from 'next/image';

import dot from '@/assets/svg/dot.svg';
import info from '@/assets/svg/info.svg';
import minus from '@/assets/svg/minus.svg';
import plus from '@/assets/svg/plus.svg';
import Button from '@/components/Button';
import PopUp from '@/components/PopUp';
import CenteredTabs from '@/components/tabs/Tabs';
import Tooltip from '@/components/Tooltip';
import Stake from '@/scenes/dashboard/assetManagement/actions/stake/Stake';
import BalanceHistory from '@/scenes/dashboard/assetManagement/balanceHistory/BalanceHistory';
import RewardHistory from '@/scenes/dashboard/assetManagement/rewardHistory/RewardHistory';
import Withdraw from './actions/withdraw/Withdraw';

export const AssetManagement = () => {
  const [isOpenActionModals, setIsOpenActionModals] = useState({
    stake: false,
    unStake: false,
    withdraw: false,
  });

  return (
    <div className="m-auto w-2/4 pb-24 pt-5">
      <h4 className=" text-sm font-medium text-onPrimaryContainer-dark">
        Current balance
      </h4>
      <p className=" mt-1 flex flex-row items-center">
        $43.24
        <Tooltip
          title={
            <div className="flex flex-col px-4 py-[0.875rem]">
              <p>Staked assets: $10.23</p>
              <p>Unstaked assets: $90.23</p>
            </div>
          }
        >
          <Image
            className="ml-1"
            src={info}
            alt="tooltip icon"
            width={24}
            height={24}
          />
        </Tooltip>
      </p>
      <div className=" mt-8 flex items-center justify-between gap-5">
        <Button
          className="w-2/6"
          kind="Filled"
          onClick={() =>
            setIsOpenActionModals({ ...isOpenActionModals, stake: true })
          }
        >
          <Image
            className="mr-2"
            src={plus}
            width={18}
            height={18}
            alt="plus icon"
          />
          Label
        </Button>
        <Button className="w-2/6" kind="Outlined">
          <Image
            className="mr-2"
            src={dot}
            width={18}
            height={18}
            alt="dot icon"
          />
          Unstake
        </Button>
        <Button
          className="w-2/6"
          kind="Outlined"
          onClick={() =>
            setIsOpenActionModals({ ...isOpenActionModals, withdraw: true })
          }
        >
          <Image
            className="mr-2"
            src={minus}
            width={18}
            height={18}
            alt="minus icon"
          />
          Withdraw
        </Button>
      </div>
      <CenteredTabs
        className=" mt-8"
        tabs={[
          {
            label: 'Balance history',
            children: <BalanceHistory />,
          },
          {
            label: 'Reward history',
            children: <RewardHistory />,
          },
        ]}
      />
      {isOpenActionModals.stake && (
        <PopUp
          title="Stake money"
          state={isOpenActionModals.stake}
          handleClose={() =>
            setIsOpenActionModals({ ...isOpenActionModals, stake: false })
          }
        >
          <Stake />
        </PopUp>
      )}
      {isOpenActionModals.withdraw && (
        <PopUp
          title="Withdraw money"
          state={isOpenActionModals.withdraw}
          handleClose={() =>
            setIsOpenActionModals({ ...isOpenActionModals, withdraw: false })
          }
        >
          <Withdraw />
        </PopUp>
      )}
    </div>
  );
};
