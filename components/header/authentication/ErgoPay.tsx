import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

import Button from '@/components/Button';
import { apiConfig } from '@/utils/constants';
import useWebSocket from '@/utils/useWebSocket';

interface Props {
  handleCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const ErgoPay = ({ handleCloseModal }: Props) => {
  const { socket, connected } = useWebSocket(apiConfig.BASE_API_URL);

  const [showInput, setShowInput] = useState(false);
  const [address, setAddress] = useState('');
  const [uuid, setUuid] = useState('');

  const handleSubmit = async () => {
    if (!showInput) setShowInput(true);
    else {
      setUuid('');

      if (connected) {
        socket?.emit('register_address', {
          address: address,
        });

        socket?.on('register_success', (data) => {
          setUuid(data?.uuid);
        });
      }
    }
  };

  useEffect(() => {
    if (address && uuid?.length > 0)
      window.location.href = `ergoauth://api-dev.testudo.xyz/auth/ergopay/${address}/${uuid}`;
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
      {showInput && (
        <input
          className=" mb-2 w-full text-black"
          value={address.length > 0 ? address : ''}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
      )}
      <Button fullWidth onClick={handleSubmit} kind="Tonal" className="w-full">
        {!showInput ? 'Connect ErgoPay' : 'send'}
      </Button>
    </>
  );
};
