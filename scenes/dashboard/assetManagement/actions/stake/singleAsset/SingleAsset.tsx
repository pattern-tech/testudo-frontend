import React, { useState } from 'react';

import Button from '@/components/Button';
import InputBox from '@/components/InputBox';
import SegmentedButton from '@/components/segmentedButton/SegmentedButton';
import CenteredTabs from '@/components/tabs/Tabs';
import StakeViaDeposit from '@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaDeposit';
import StakeViaErgoPaySecondStep from '@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaErgoPay/SecondStep';
import StakeViaErgoPayThirdStep from '@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaErgoPay/ThirdStep';
import StakeViaWallet from '@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaWallet';

interface AmountProps {
  ergo: string;
  rsn: string;
}

interface Props {
  onClickHandler: () => void;
  amount: AmountProps;
  setAmount: React.Dispatch<React.SetStateAction<AmountProps>>;
}

const FirstStep = ({ onClickHandler, amount, setAmount }: Props) => {
  return (
    <div className="mx-5 flex flex-col gap-5 rounded-[1.25rem] bg-surfaceContainer-dark px-6 py-4">
      <p className="text-base font-bold text-onSurface-dark">
        First step: Determine the invested token and amount.
      </p>
      <div className="flex items-center justify-between">
        <SegmentedButton
          className="flex w-full items-center gap-3"
          position="horizontal"
          tabs={[
            {
              label: 'ERG',
              children: (
                <InputBox
                  required={false}
                  id="outlined-required"
                  label="ERG amount"
                  className="w-full"
                  onChange={(e) => setAmount({ rsn: '', ergo: e.target.value })}
                  value={amount.ergo.length > 0 ? amount.ergo : ''}
                  type="text"
                  endAdornment={<span>ERG</span>}
                />
              ),
            },
            {
              label: 'RSN',
              children: (
                <InputBox
                  required={false}
                  id="outlined-required"
                  label="RSN amount"
                  className="w-full"
                  onChange={(e) => setAmount({ ergo: '', rsn: e.target.value })}
                  value={amount.rsn.length > 0 ? amount.rsn : ''}
                  type="text"
                  endAdornment={<span>RSN</span>}
                />
              ),
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-5 rounded-[1.25rem] bg-surfaceContainerLow-dark p-4 text-center text-xs font-normal">
          <p className="flex flex-col gap-2 text-onPrimaryContainer-dark">
            This asset will be finally swapped and your final investment will
            be:
            <span className="leading-relaxed">20 ERG & 10 RSN</span>
          </p>
          <p className=" text-[#EBC13E]">
            There is a 3% slippage for swapping assets in single asset
            <br />
            transactions.{' '}
            <a className=" cursor-pointer underline">Learn more</a>
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-[1.25rem] bg-surfaceContainerLow-dark p-4 text-center text-xs font-normal text-onPrimaryContainer-dark">
          <p>
            Your estimated reward based on current APR:{' '}
            <a className=" cursor-pointer underline">Learn more</a>
          </p>
          <span className="text-sm font-bold">0.02 RSN ~ 0.06 RSN</span>
        </div>
      </div>
      <Button
        disabled={amount.rsn.length === 0 && amount.ergo.length === 0}
        className="w-full disabled:opacity-60"
        kind="Filled"
        onClick={onClickHandler}
      >
        Continue to second step
      </Button>
    </div>
  );
};

const SingleAsset = () => {
  const [step, setStep] = useState({ deposit: 1, wallet: 1, ergoPay: 1 });
  const [amount, setAmount] = useState<AmountProps>({ ergo: '', rsn: '' });

  return (
    <CenteredTabs
      className="mt-4"
      tabs={[
        {
          label: 'Stake via deposit',
          children:
            step.deposit === 2 ? (
              <StakeViaDeposit
                amount={amount}
                onBack={() => setStep({ ...step, deposit: 1 })}
              />
            ) : (
              <FirstStep
                onClickHandler={() => setStep({ ...step, deposit: 2 })}
                amount={amount}
                setAmount={setAmount}
              />
            ),
        },
        {
          label: 'Stake via wallet',
          children:
            step.wallet === 2 ? (
              <StakeViaWallet
                amount={amount}
                onBack={() => setStep({ ...step, wallet: 1 })}
              />
            ) : (
              <FirstStep
                onClickHandler={() => setStep({ ...step, wallet: 2 })}
                amount={amount}
                setAmount={setAmount}
              />
            ),
        },
        {
          label: 'Stake via ErgoPay',
          children:
            step.ergoPay === 3 ? (
              <StakeViaErgoPayThirdStep
                amount={amount}
                onBack={() => setStep({ ...step, ergoPay: 2 })}
              />
            ) : step.ergoPay === 2 ? (
              <StakeViaErgoPaySecondStep
                onBack={() => setStep({ ...step, ergoPay: 1 })}
                onForward={() => setStep({ ...step, ergoPay: 3 })}
              />
            ) : (
              <FirstStep
                onClickHandler={() => setStep({ ...step, ergoPay: 2 })}
                amount={amount}
                setAmount={setAmount}
              />
            ),
        },
      ]}
    />
  );
};

export default SingleAsset;
