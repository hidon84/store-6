import Peer from 'peerjs';

const peer = new Peer(undefined, {
  host: '/',
  path: '/p2p',
  debug: 3,
  secure: true,
});

export default peer;
