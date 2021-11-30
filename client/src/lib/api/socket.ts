import io from 'socket.io-client';
import config from '~/config';

const createSocket = () => {
  const socket = io(config.socketURI);
  return socket;
};

export default createSocket;
