import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

import { authApiGateway } from '@/api/auth';
import nautilusLogo from '@/assets/svg/nautilusLogo.svg';
import Button from '@/components/Button';
import { apiConfig } from '@/utils/constants';
import { connectWallet, getWalletAddress } from '@/utils/nautilus';
import useWebSocket from '@/utils/useWebSocket';

interface Props {
  handleCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const Nautilus = ({ handleCloseModal }: Props) => {
  const { socket, connected } = useWebSocket(apiConfig.BASE_API_URL);
  const [uuid, setUuid] = useState('');

  const { useNautilus } = authApiGateway;

  const [parameters, setParameters] = useState({
    proof: undefined,
    message: undefined,
    address: undefined,
  });

  const nautilusResponse = useNautilus(parameters);

  connectWallet();

  const ergoAuth = async () => {
    const ergoAuthResult = await ergo.auth(parameters.address, uuid);

    setParameters({
      ...parameters,
      proof: ergoAuthResult.proof,
      message: ergoAuthResult.signedMessage,
    });
    nautilusResponse.refetch();
  };

  useEffect(() => {
    if (parameters?.address && uuid?.length > 0) ergoAuth();
  }, [uuid, parameters.address]);

  useEffect(() => {
    if (nautilusResponse?.data?.token) {
      localStorage.setItem('token', nautilusResponse?.data?.token);
      setParameters({
        address: undefined,
        proof: undefined,
        message: undefined,
      });
      setUuid('');
      handleCloseModal(false);
    }
  }, [nautilusResponse?.data]);

  const handleSubmit = async () => {
    setUuid('');
    setParameters({ ...parameters, address: await getWalletAddress() });

    if (connected) {
      socket?.emit('register_address', {
        address: parameters.address,
      });

      socket?.on('register_success', (data) => {
        setUuid(data?.uuid);
      });
    }
  };

  return (
    <Button fullWidth kind="Tonal" onClick={handleSubmit}>
      <Image
        src={nautilusLogo}
        alt="nautilusLogo logo"
        width={18}
        height={18}
        className="mr-2"
      />
      Connect Nautilus wallet
    </Button>
  );
};
