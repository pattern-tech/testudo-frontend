import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ergImage from '@/assets/svg/ergCoin.svg';
import rsnImage from '@/assets/svg/rsnCoin.svg';
import infoCircle from '@/assets/svg/Info-Circle.svg';
import Slider from '@mui/material/Slider';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@/components/Button';
import PopUp from '@/components/PopUp';
import successImage from '@/assets/svg/check.svg';

interface PrettoSliderProps {
  error?: boolean;
  showErrorLabel?: boolean;
}

const PrettoSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== 'error' && prop !== 'showErrorLabel',
})<PrettoSliderProps>(({ theme, error }) => ({
  color: error ? theme.palette.error.main : '#92CEF5',
  height: 8,
  '& .MuiSlider-track': {
    backgroundColor: error ? theme.palette.error.main : '#92CEF5',
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: error ? theme.palette.error.main : '#92CEF5',
    border: `2px solid ${error ? theme.palette.error.main : '#92CEF5'}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: error ? theme.palette.error.main : '#92CEF5',
    color: '#00344B',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': {
      display: 'none',
    },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

const Unstake = () => {
  const totalERG = 113.234;
  const totalRSN = 113.234;
  const [sliderValue, setSliderValue] = useState(0);
  const [ergAmount, setErgAmount] = useState('');
  const [rsnAmount, setRsnAmount] = useState('');
  const [ergError, setErgError] = useState(false);
  const [rsnError, setRsnError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [timerId, setTimerId] = useState<number | null>(null);

  const currentDate = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    setErgError(parseFloat(ergAmount) > totalERG);
    setRsnError(parseFloat(rsnAmount) > totalRSN);

    setHasError(
      parseFloat(ergAmount) > totalERG || parseFloat(rsnAmount) > totalRSN,
    );
  }, [ergAmount, rsnAmount, totalERG, totalRSN]);

  useEffect(() => {
    return () => {
      if (timerId !== null) clearTimeout(timerId);
    };
  }, [timerId]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setSliderValue(value);
    const percentage = value / 100;
    const newErgAmount = (totalERG * percentage).toFixed(3);
    const newRsnAmount = (totalRSN * percentage).toFixed(3);
    setErgAmount(newErgAmount);
    setRsnAmount(newRsnAmount);
    setErgError(parseFloat(newErgAmount) > totalERG);
    setRsnError(parseFloat(newRsnAmount) > totalRSN);
  };

  const handleErgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newErgAmount = event.target.value;
    const percentage = (parseFloat(newErgAmount) / totalERG) * 100;
    setSliderValue(percentage);
    setErgAmount(newErgAmount);
    setRsnAmount(((totalRSN * percentage) / 100).toFixed(3));
    setErgError(parseFloat(newErgAmount) > totalERG);
  };

  const handleRsnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRsnAmount = event.target.value;
    const percentage = (parseFloat(newRsnAmount) / totalRSN) * 100;
    setSliderValue(percentage);
    setRsnAmount(newRsnAmount);
    setErgAmount(((totalERG * percentage) / 100).toFixed(3));
    setRsnError(parseFloat(newRsnAmount) > totalRSN);
  };

  const StyledButton = styled(Button)({
    marginTop: '16px',
    '&:disabled': {
      backgroundColor: 'rgb(128, 128, 128)',
      color: '#DFE3E7',
    },
  });

  const valueLabelFormat = (value: number) => {
    if (hasError) return '!';
    return `${value}%`;
  };

  const handleButtonClick = () => {
    const timer = window.setTimeout(() => {
      setShowSuccessPopup(true);
    }, 2000) as unknown as number;

    setTimerId(timer);
  };


  
  return (
    <div>
      <p className="my-7 text-center text-sm text-onPrimaryContainer-dark">
        Before withdrawing, your assets must be unstaked. Once unstacked,you
        have the option to either withdraw them or restake them to earn rewards.
      </p>

      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-onPrimaryContainer-dark">Your LTV:</p>

        <div className="flex flex-row">
          <div className="m-5">
            <Image src={ergImage} alt="ERGcoin" className="m-2 mx-auto block" />
            <h2 className="text-center font-bold">113.234 ERG</h2>
            <p className="text-center text-sm text-onPrimaryContainer-dark">
              ~$32.31
            </p>
          </div>

          <div className="m-5">
            <Image src={rsnImage} alt="RSNcoin" className="m-2 mx-auto block" />
            <h2 className="text-center font-bold">113.234 ERG</h2>
            <p className="text-center text-sm text-onPrimaryContainer-dark">
              ~$32.31
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-semiboldm m-4 text-center text-base">
          Set the percentage you want to unstake of your total staked assets
        </p>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 'calc(100% - 3rem)',
            mb: 2,
          }}
        >
          <Typography gutterBottom className="m-4">
            0%
          </Typography>
          <PrettoSlider
            className="w-[480px]"
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            onChange={handleSliderChange}
            min={0}
            max={100}
            error={hasError}
            valueLabelFormat={valueLabelFormat}
          />
          <Typography gutterBottom className="m-4">
            100%
          </Typography>
        </Box>

        <div className="flex items-center space-x-4">
          <TextField
            id="amount-erg"
            label="0 ERG"
            variant="outlined"
            type="number"
            value={ergAmount ? Number(ergAmount).toFixed(3) : ''}
            onChange={handleErgChange}
            className="w-[225px]"
            error={ergError}
            helperText={ergError ? 'There is not enough ERG' : ''}
          />

          <TextField
            id="amount-rsn"
            label="0 RSN"
            variant="outlined"
            type="number"
            value={rsnAmount ? Number(rsnAmount).toFixed(3) : ''}
            onChange={handleRsnChange}
            className="w-[225px]"
            error={rsnError}
            helperText={rsnError ? 'There is not enough RSN' : ''}
          />
        </div>

        <div className=" mt-8 w-[475px] rounded-[1.25rem] bg-surfaceContainer-dark px-6 py-4">
          <p className=" flex items-center justify-between text-sm font-medium text-orange-600">
            <Image
              className="mr-3"
              src={infoCircle}
              alt="infoCircle"
              width={24}
              height={24}
            />
              By unstaking this asset, you will cease to earn rewards. To resume
              earning, you must restake the asset.
            <br />
              The unstaking process may take up to 72 hours.
          </p>
        </div>

        <StyledButton
          className="w-[475px]"
          type="submit"
          kind={'Filled'}
          onClick={handleButtonClick}
          disabled={
            hasError ||
            !ergAmount ||
            !rsnAmount ||
            Number(ergAmount) === 0 ||
            Number(rsnAmount) === 0
          }
        >
          Unstake {ergAmount ? `${ergAmount} ERG` : ''}{' '}
          {rsnAmount ? `and ${rsnAmount} RSN` : ''}
        </StyledButton>
      </div>

      {showSuccessPopup && (
        <PopUp
          title="Invest money"
          state={showSuccessPopup}
          handleClose={() => setShowSuccessPopup(false)}
        >
          <p className="my-5 text-center text-sm text-onPrimaryContainer-dark">
            Before withdrawing, your assets must be unstaked. Once unstacked,you
            have the option to either withdraw them or restake them to earn
            rewards.
          </p>

          <Image
            src={successImage}
            alt="successful"
            className="mx-auto my-5 block h-24 w-24"
          />
          <p className="my-5 text-center text-lg font-bold">
            {ergAmount ? `${ergAmount} ERG` : ''}{' '}
            {rsnAmount ? `and ${rsnAmount} RSN ` : ''}
            tokens unstake request submitted
          </p>
          <p className="my-5 text-center text-sm">
            Your unstaking request may takes up to 72hours to proceed completely
          </p>

          <div className="m-auto h-40 w-[475px] rounded-xl bg-neutral-600 pt-0.5 text-onPrimaryContainer-dark">
            <div className="m-5 mt-2 flex items-center justify-between text-sm">
              <p>Date</p>
              <p>{currentDate}</p>
            </div>

            <div className="m-5 flex items-center justify-between text-sm">
              <p>Status</p>
              <p>Waiting to proceed</p>
            </div>

            <div className="m-5 flex items-center justify-between text-sm">
              <p>Sender</p>
              <p>9fFMwTZo...KPWMZkp</p>
            </div>

            <div className="m-5 flex items-center justify-between text-sm">
              <p>Network fee</p>
              <p>1 Erg ~ $0.05</p>
            </div>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default Unstake;
