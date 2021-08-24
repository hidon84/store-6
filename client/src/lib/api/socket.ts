import io from 'socket.io-client';

const devServer = 'http://localhost:5000';
const prodServer = 'https://store.woowa.link';

const createSocket = (uuid?: string) => {
  const socket = io(
    process.env.NODE_ENV === 'development' ? devServer : prodServer,
  );
  return socket;
};

export default createSocket;
