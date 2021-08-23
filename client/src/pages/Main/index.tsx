/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable react/no-unused-state */
import { Component, createRef, RefObject } from 'react';
import Peer, { MediaConnection, DataConnection } from 'peerjs';
import { v4 as uuidv4 } from 'uuid';
import {
  Book,
  Baedal,
  Hat,
  Gift,
  House,
  Kk,
  Tree,
  Pencil,
  Colab,
  Stain,
  Logo,
} from '~/components/main/IconButtons';
import PixelArt from '~/components/main/pixelArts';
import { MainContainer } from './index.style';
import socket from '~/lib/api/socket';
import createPeer from '~/lib/api/peer';
import { delay } from '~/utils/protocol';
import { alert } from '~/utils/modal';

interface MainState {
  myId: string;
  users?: { id: string; y: number; x: number }[];
  peerCalls: Record<string, MediaConnection>;
  connections: Record<string, DataConnection>;
  y: number;
  x: number;
}

const [DY, DX] = [2, 2];

class Main extends Component<{ u?: string }, MainState> {
  audioGridRef: RefObject<HTMLDivElement>;
  peer: Peer;
  myId: string;
  myStream?: MediaStream;

  constructor(props) {
    super(props);
    this.state = {
      peerCalls: {},
      connections: {},
      myId: '',
      x: 5,
      y: 5,
    };
    this.myId = uuidv4();
    this.peer = createPeer(this.myId);
    this.peer.on('open', (id) => {
      socket.emit('join-room', id);
    });
    this.audioGridRef = createRef<HTMLDivElement>();
    this.setupConnections();
  }

  componentWillUnmount() {
    window.console.log('componentWillUnmount');
    this.myStream?.getTracks().forEach((mediaTrack) => {
      mediaTrack.stop();
    });
    document.body.removeEventListener('keydown', this.onKeyDown);
  }

  setupConnections() {
    this.setupAudioStream();

    socket.on('user-connected', async (userId: string) => {
      alert(`user-connected! ${userId}`);
      const conn = this.peer.connect(userId, { reliable: true });

      await delay(1000);
      conn.send({ message: 'hello', from: this.myId });
      this.addConnections(userId, conn);
    });

    this.peer.on('connection', (con) => {
      con.on('data', (data) => {
        window.console.log('received data: ', data);
        // const { connections } = this.state;
        // const conn =
        con.send({ message: 'reply!!!' });
        // this.addConnections(data.from, con);
      });
    });

    socket.on('user-disconnected', (userId) => {
      window.console.log('user-disconnected: ', userId);
      const { peerCalls } = this.state;
      peerCalls[userId]?.close();
    });

    document.body.addEventListener('keydown', this.onKeyDown);
  }

  addConnections = (id: string, connection: DataConnection) => {
    const { connections } = this.state;
    const nextConnections = {
      ...connections,
      [id]: connection,
    };
    this.setState({ connections: nextConnections }, () => {
      window.console.log('myId', this.myId);
      window.console.log(this.state);
    });
  };

  addAudioStream = (video: HTMLAudioElement, stream: MediaStream) => {
    // eslint-disable-next-line no-param-reassign
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  };

  setupAudioStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((myStream) => {
        this.myStream = myStream;
        /**
         * When Someone tries to call me
         */
        this.peer.on('call', (call) => {
          call.answer(myStream);
          const newAudio = document.createElement('audio');
          this.audioGridRef.current.appendChild(newAudio);
          call.on('stream', (otherUserStream) => {
            this.addAudioStream(newAudio, otherUserStream);
          });
          window.console.log('peer: ', call.peer);
        });

        socket.on('user-connected', (userId) => {
          const call = this.peer.call(userId, myStream);
          const newAudio = document.createElement('audio');
          this.audioGridRef.current.appendChild(newAudio);
          call.on('stream', (otherUserStream) => {
            this.addAudioStream(newAudio, otherUserStream);
          });
          call.on('close', () => {
            newAudio.remove();
          });
          const { peerCalls: peers } = this.state;
          const nextPeers = {
            ...peers,
            [userId]: call,
          };
          this.setState({ peerCalls: nextPeers });
        });
      });
  };

  onKeyDown = (event: globalThis.KeyboardEvent) => {
    const { y, x } = this.state;
    switch (event.code) {
      case 'ArrowUp':
        this.setState({ y: Math.max(0, y - DY) });
        break;
      case 'ArrowDown':
        this.setState({ y: Math.min(90, y + DY) });
        break;
      case 'ArrowLeft':
        this.setState({ x: Math.max(0, x - DX) });
        break;
      case 'ArrowRight':
        this.setState({ x: Math.min(90, x + DX) });
        break;
      default:
        break;
    }
  };

  render() {
    const { y, x } = this.state;
    return (
      <MainContainer>
        <div className="audio-grid" ref={this.audioGridRef} />
        <PixelArt className="cat" />
        <PixelArt className="sonic" coord={{ left: '15%', top: '30%' }} />
        <PixelArt className="chicken" coord={{ left: `${x}%`, top: `${y}%` }} />
        <PixelArt className="flower" coord={{ right: '10%' }} />
        <PixelArt className="ladybug" coord={{ bottom: '20%' }} />
        <PixelArt
          className="hedgehog"
          coord={{ bottom: '20%', right: '40%' }}
        />
        <Book />
        <Baedal />
        <Hat />
        <Gift />
        <House />
        <Kk />
        <Tree />
        <Pencil />
        <Colab />
        <Stain />
        <Logo />
      </MainContainer>
    );
  }
}

export default Main;
