import io from 'socket.io-client';

const createSocket = (uuid?: string) => {
  const socket = io(process.env.SOCKET_URI);
  return socket;
};

export default createSocket;
