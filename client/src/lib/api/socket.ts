import io from 'socket.io-client';

const createSocket = () => {
  const socket = io(process.env.SOCKET_URI);
  return socket;
};

export default createSocket;
