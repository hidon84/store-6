import io from 'socket.io-client';

const createSocket = (uuid?: string) => {
  const socket = io(process.env.FULL_URI);
  return socket;
};

export default createSocket;
