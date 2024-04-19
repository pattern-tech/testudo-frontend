import React, { useState } from 'react';
import Image from 'next/image';
import ergImage from '@/assets/svg/ergCoin.svg';
import loadingImage from '@/assets/svg/Loading.png';
import successImage from '@/assets/svg/check.svg';
import { Stack, Chip, TextField, Box, InputAdornment } from '@mui/material';
import Button from '@/components/Button';
import PopUp from '@/components/PopUp';
import { format } from 'date-fns';


const ErgContent = () => {
  const maxErgAmount = 113.234;
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverAddressError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [transactionDate, setTransactionDate] = useState('');

  const isFormValid = receiverAddress && amount && parseFloat(amount) > 0;

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (isFormValid && parseFloat(amount) <= maxErgAmount) {
      setShowPopup(true);
      setTransactionDate(format(new Date(), 'MMM dd, yyyy, h:mm a'));

      setTimeout(() => {
        setShowPopup(false);
        setShowSuccessPopup(true);
      }, 3000);
    }
  };

  const handleChangeAmount = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (parseFloat(value) > maxErgAmount) {
      setAmountError(`You don't have enough ERG.`);
    } else {
      setAmountError('');
    }
    setAmount(value);
  };

  const handleMaxClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setAmount(maxErgAmount.toString());
    setAmountError('');
  };

  return (
    <div>
      <Image src={ergImage} alt="ERGcoin" className="m-2 mx-auto block" />

      <div>
        <h2 className="text-center font-bold">113.234 ERG</h2>
        <p className="text-center text-sm text-onPrimaryContainer-dark">
          ~$32.31
        </p>
      </div>

      <Stack className="items-center">
        <Chip label="Unstacked" className="h-9 w-28 rounded-lg font-bold" />
      </Stack>

      <Box
        component="form"
        className="text-center"
        sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="receiver-address"
          label="Receiver address"
          variant="outlined"
          fullWidth
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
          error={!!receiverAddressError}
          helperText={receiverAddressError}
        />
        <TextField
          id="amount-erg"
          label="Amount (ERG)"
          variant="outlined"
          type="number"
          value={amount}
          onChange={handleChangeAmount}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          fullWidth
          error={!!amountError}
          helperText={amountError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <button
                  type="button"
                  onClick={handleMaxClick}
                  style={{ color: '#FFFFFF', padding: 0, minWidth: 'auto' }}
                >
                  Max
                </button>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          kind={'Filled'}
          style={{ marginTop: 16}}
          disabled={!isFormValid}
        >
          Withdraw {amount || '0'} ERG
        </Button>
      </Box>

      {showPopup && (
        <PopUp
          title="Withdraw money"
          state={showPopup}
          handleClose={() => setShowPopup(false)}
        >
          <p className="my-5 text-center text-sm text-onPrimaryContainer-dark">
            You can withdraw assets once unstaked
          </p>
          <Image src={loadingImage} alt="Loading" className="mx-auto my-5 block" />
        </PopUp>
      )}

      {showSuccessPopup && (
        <PopUp
          title="Withdraw money"
          state={showSuccessPopup}
          handleClose={() => setShowSuccessPopup(false)}
        >
          <p className="my-5 text-center text-sm text-onPrimaryContainer-dark">
            You can withdraw assets once unstaked
          </p>

          <Image src={successImage} alt="successful" className="mx-auto my-5 block h-24 w-24" />
          <p className="my-5 text-center text-lg font-bold">
            {amount} ERG withdrawed successfully.
          </p>

          <div className="m-auto h-40 w-80 rounded-xl bg-neutral-600 pt-0.5 text-onPrimaryContainer-dark">
            <div className="m-5 mt-2 flex items-center justify-between text-sm">
              <p>Date</p>
              <p>{transactionDate}</p>
            </div>

            <div className="m-5 flex items-center justify-between text-sm">
              <p>Status</p>
              <p>Completed</p>
            </div>

            <div className="m-5 flex items-center justify-between text-sm">
              <p>Receiver</p>
              <p>{receiverAddress}</p>
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


export default ErgContent;