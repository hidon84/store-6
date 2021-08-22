import Peer from 'peerjs';

const peer = new Peer(undefined, {
  host: '/',
  path: '/p2p',
  debug: 3,
  secure: false,
});

export default peer;
