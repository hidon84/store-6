import Peer from 'peerjs';

const peer = new Peer(undefined, {
  host: 'localhost',
  port: 9000,
});

export default peer;
