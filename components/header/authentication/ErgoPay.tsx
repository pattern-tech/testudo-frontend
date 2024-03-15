import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

import circleArrowLeftSvg from '@/assets/svg/circleArrowLeft.svg';
import Button from '@/components/button/Button';
import InputBox from '@/components/InputBox';
import PopUp from '@/components/popUp/PopUp';
import QRCodeSection from '@/components/QRCode';
import { apiConfig } from '@/utils/constants';
import useWebSocket from '@/utils/useWebSocket';

interface Props {
  handleCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const ErgoPay = ({ handleCloseModal }: Props) => {
  const { socket, connected } = useWebSocket(apiConfig.BASE_API_URL);

  const [secondStep, setSecondStep] = useState(false);
  const [address, setAddress] = useState('');
  const [uuid, setUuid] = useState('');
  const [seconds, setSeconds] = useState(23);

  const handleSubmit = async () => {
    setUuid('');

    if (connected) {
      socket?.emit('register_address', {
        address: address,
      });

      socket?.on('register_success', (data) => {
        setUuid(data?.uuid);
      });
    }
  };

  useEffect(() => {
    if (secondStep) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timer); // Stop the counter when seconds reach 0
            handleSubmit();

            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [secondStep]);

  useEffect(() => {
    if (address && uuid?.length > 0) setSecondStep(true);
  }, [uuid, address]);

  useEffect(() => {
    if (connected)
      socket?.on('auth_success', (data) => {
        if (data) {
          localStorage.setItem('token', data?.jwtToken?.token);
          handleCloseModal(false);
        }
      });
  }, [connected]);

  return (
    <>
      <p className=" text-base font-bold text-onSurface-dark">
        First step: Please import your ergo wallet address first.
      </p>

      <InputBox
        required={false}
        id="outlined-required"
        label="Wallet address"
        className="mt-4 w-full"
        onChange={(e) => setAddress(e.target.value)}
        value={address.length > 0 ? address : ''}
        type="text"
      />
      <Button
        fullWidth
        onClick={() => {
          handleSubmit();

          setSecondStep(true);
        }}
        kind="Tonal"
        className="mt-4 w-full"
        disabled={address.length === 0}
      >
        Continue
      </Button>
      {secondStep && (
        <PopUp
          title="Login"
          state={secondStep}
          handleClose={() => setSecondStep(false)}
        >
          <div className="mt-5 flex items-center">
            <button className="mr-2" onClick={() => setSecondStep(false)}>
              <Image
                src={circleArrowLeftSvg}
                alt="arrow left icon"
                width={48}
                height={48}
              />
            </button>
            <h4>Second step: Finalize login process</h4>
          </div>
          <p className="mt-4 text-xs font-normal text-onPrimaryContainer-dark">
            Please scan this QR code and authenticate the flow with your
            imported wallet address.
          </p>
          <div className="mt-5 flex flex-col items-center">
            <QRCodeSection
              size={156}
              data={`ergoauth://api-dev.testudo.xyz/auth/ergopay/${address}/${uuid}`}
            />
            <p className="mt-2 flex flex-col items-center rounded-3xl bg-surfaceContainerLow-dark px-6 py-4 text-xs font-normal ">
              Time remained to generate new QR code:
              <span className="mt-1 text-sm font-semibold text-primary-dark">
                {seconds} seconds
              </span>
            </p>
          </div>
          <div className="mt-5 flex flex-col items-baseline gap-4 rounded-3xl bg-surfaceContainerLow-dark px-6 py-4 text-onPrimaryContainer-dark">
            <p className=" text-base font-semibold ">
              Have ErgoPay application?
            </p>
            <p className=" text-xs font-normal">
              If you have ErgoPay application, you can continue with the
              application
            </p>
            <Button
              onClick={() =>
                (window.location.href = `ergoauth://api-dev.testudo.xyz/auth/ergopay/${address}/${uuid}`)
              }
              className="w-full"
              kind="Outlined"
            >
              Open ErgoPay application
            </Button>
          </div>
        </PopUp>
      )}
    </>
  );
};
