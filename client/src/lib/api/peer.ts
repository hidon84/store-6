import Peer from 'peerjs';

const peer = new Peer(undefined, {
  host: '/',
  path: '/p2p',
  port: 9000,
});

export default peer;
