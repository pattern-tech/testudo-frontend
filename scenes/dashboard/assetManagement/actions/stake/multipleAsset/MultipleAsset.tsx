import React, { useEffect, useState } from "react";

import Button from "@/components/Button";
import InputBox from "@/components/InputBox";
import SegmentedButton from "@/components/segmentedButton/SegmentedButton";
import CenteredTabs from "@/components/tabs/Tabs";
import StakeViaDeposit from "@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaDeposit";
import StakeViaErgoPaySecondStep
  from "@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaErgoPay/SecondStep";
import StakeViaErgoPayThirdStep
  from "@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaErgoPay/ThirdStep";
import StakeViaWallet from "@/scenes/dashboard/assetManagement/actions/stake/singleAsset/viaWallet";
import { apiConfig } from "@/utils/constants";
import { defaultSlippage, OUTPUT_ADDRESS } from "@/utils/utils";
import { connectWallet, swap } from "@/utils/nautilus";
import { send_tx } from "@/utils/wallet";

interface AmountProps {
  ergo: string;
  rsn: string;
}

interface Props {
  onClickHandler: () => void;
  amount: AmountProps;
  ratio: AmountProps;
  setAmount: React.Dispatch<React.SetStateAction<AmountProps>>;
  setRatio: React.Dispatch<React.SetStateAction<AmountProps>>;
}

const FirstStep = ({ onClickHandler, amount, setAmount, ratio, setRatio }: Props) => {
  const fetchAmount = async () => {
    try {
      const response = await fetch(
        apiConfig.BASE_API_URL + "/setting/getSetting"
      ); // Update this URL to your actual API endpoint

      if (!response.status === 200) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const ergo_value = data.find((item: any) => item.key === "ergo");
      const rsn_value = data.find((item: any) => item.key === "rsn");

      setRatio({ ergo: ergo_value.value, rsn: rsn_value.value });
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };
  const one_erg_change = async (value: number) => {
    await fetchAmount();

    const rsn_value = value * 1e9 * Number(ratio.rsn) / (Number(ratio.ergo) * 1e4);
    console.log(rsn_value);
    setAmount({ ergo: value.toString(), rsn: rsn_value.toString() });
  };
  const one_rsn_change = async (value: number) => {
    await fetchAmount();

    const erg_value = value * 1e4 * Number(ratio.ergo) / (Number(ratio.rsn) * 1e9);

    setAmount({ ergo: erg_value, rsn: value.toString() });
  };
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
              label: "ERG",
              children: (
                <InputBox
                  required={false}
                  id="outlined-required"
                  label="ERG amount"
                  className="w-full"
                  onChange={(e) => one_erg_change(e.target.value)}
                  value={amount.ergo.length > 0 ? amount.ergo : ""}
                  type="text"
                  endAdornment={<span>ERG</span>}
                />
              )
            },
            {
              label: "RSN",
              children: (
                <InputBox
                  required={false}
                  id="outlined-required"
                  label="RSN amount"
                  className="w-full"
                  onChange={(e) => one_rsn_change(e.target.value)}
                  value={amount.rsn.length > 0 ? amount.rsn : ""}
                  type="text"
                  endAdornment={<span>RSN</span>}
                />
              )
            }
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-col gap-5 rounded-[1.25rem] bg-surfaceContainerLow-dark p-4 text-center text-xs font-normal">
          <p className="flex flex-col gap-2 text-onPrimaryContainer-dark">
            This asset will be finally swapped and your final investment will
            be:
            <span className="leading-relaxed">{amount.ergo} ERG & {amount.rsn} RSN</span>
          </p>
          <p className=" text-[#EBC13E]">
            There is a {defaultSlippage}% slippage for swapping assets in single asset
            <br />
            transactions.{" "}
            <a className=" cursor-pointer underline">Learn more</a>
          </p>
        </div>
        <div
          className="flex flex-col gap-2 rounded-[1.25rem] bg-surfaceContainerLow-dark p-4 text-center text-xs font-normal text-onPrimaryContainer-dark">
          <p>
            Your estimated reward based on current APR:{" "}
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

const MultipleAsset = () => {
  const [step, setStep] = useState({ deposit: 1, wallet: 1, ergoPay: 1 });
  const [amount, setAmount] = useState<AmountProps>({ ergo: "", rsn: "" });
  const [ratio, setRatio] = useState<AmountProps>({ ergo: "", rsn: "" });
  const multiple_asset_handle = async () => {
    const addresses = JSON.parse(localStorage.getItem("addresses"));

    connectWallet();
    await send_tx(
      OUTPUT_ADDRESS,
      BigInt(Number(amount.ergo) * 1e9),
      BigInt(Number(amount.rsn) * 1e4),
      addresses,
    );
  };
  return (
    <CenteredTabs
      className="mt-4"
      tabs={[
        {
          label: "Stake via deposit",
          children:
            step.deposit === 2 ? (
              <StakeViaDeposit
                amount={amount}
                onBack={() => setStep({ ...step, deposit: 1 })}
              />
            ) : (
              <FirstStep
                onClickHandler={() => {
                  setStep({ ...step, deposit: 2 });
                }}
                amount={amount}
                setAmount={setAmount}
                ratio={ratio}
                setRatio={setRatio}
              />
            )
        },
        {
          label: "Stake via wallet",
          children:
            step.wallet === 2 ? (
              <StakeViaWallet
                amount={amount}
                onBack={() => setStep({ ...step, wallet: 1 })}
                onClickHandler={multiple_asset_handle}
              />
            ) : (
              <FirstStep
                onClickHandler={() => setStep({ ...step, wallet: 2 })}
                amount={amount}
                setAmount={setAmount}
                ratio={ratio}
                setRatio={setRatio}
              />
            )
        },
        {
          label: "Stake via ErgoPay",
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
            )
        }
      ]}
    />
  );
};

export default MultipleAsset;
