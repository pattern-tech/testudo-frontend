import { useEffect, useState } from 'react';

import io from 'socket.io-client';
import * as SocketIOClient from 'socket.io-client';

const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io(url, {
      transports: ['websocket'],
      upgrade: false,
    });

    socket.on('connect', () => {
      setConnected(true);
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [url]);

  return { socket, connected };
};

export default useWebSocket;
