import Peer from 'peerjs';

const devOption = {
  host: '/',
  path: '/p2p',
  debug: 2,
  port: 5001,
};

const prodOption = {
  host: '/',
  path: '/p2p',
  debug: 0,
  port: 5001,
  secure: true,
};

// const peer = new Peer(
//   undefined,
//   process.env.NODE_ENV === 'development' ? devOption : prodOption,
// );

const createPeer = (uuid?: string) => {
  const peer = new Peer(
    uuid,
    process.env.NODE_ENV === 'development' ? devOption : prodOption,
  );
  return peer;
};

export default createPeer;
