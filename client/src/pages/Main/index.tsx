import {
  Component,
  createRef,
  FC,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MediaConnection } from 'peerjs';
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
import peer from '~/lib/api/peer';

interface MainState {
  users?: { id: string; y: number; x: number }[];
  peers: Record<string, MediaConnection>;
  y: number;
  x: number;
}

class Main extends Component<{ u?: string }, MainState> {
  audioGridRef: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.state = {
      peers: {},
      x: 5,
      y: 5,
    };
    this.audioGridRef = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((myStream) => {
        /**
         * When Someone tries to call me
         */
        peer.on('call', (call) => {
          call.answer(myStream);
          const newAudio = document.createElement('audio');
          this.audioGridRef.current.appendChild(newAudio);
          call.on('stream', (otherUserStream) => {
            this.addAudioStream(newAudio, otherUserStream);
          });
          console.log('peer: ', call.peer);
        });

        socket.on('user-connected', (userId) => {
          console.log('user-connected! ID: ', userId);
          const call = peer.call(userId, myStream);
          const newAudio = document.createElement('audio');
          this.audioGridRef.current.appendChild(newAudio);
          call.on('stream', (otherUserStream) => {
            this.addAudioStream(newAudio, otherUserStream);
          });
          call.on('close', () => {
            newAudio.remove();
          });
          const { peers } = this.state;
          const nextPeers = {
            ...peers,
            userId: call,
          };
          this.setState({ peers: nextPeers });
        });
      });

    peer.on('open', (id) => {
      socket.emit('join-room', id);
    });

    socket.on('user-disconnected', (userId) => {
      console.log('user-disconnected: ', userId);
      const { peers } = this.state;
      peers[userId]?.close();
    });

    document.body.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyDown);
  }

  addAudioStream = (video: HTMLAudioElement, stream: MediaStream) => {
    // eslint-disable-next-line no-param-reassign
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  };

  onKeyDown = (event: globalThis.KeyboardEvent) => {
    const { y, x } = this.state;
    switch (event.code) {
      case 'ArrowUp':
        this.setState({ y: Math.max(0, y - 1) });
        break;
      case 'ArrowDown':
        this.setState({ y: Math.min(90, y + 1) });
        break;
      case 'ArrowLeft':
        this.setState({ x: Math.max(0, x - 1) });
        break;
      case 'ArrowRight':
        this.setState({ x: Math.min(90, x + 1) });
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

const MM: FC = () => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [users, setUsers] = useState<{ id: string; video: HTMLVideoElement }>();
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const videoGridRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: globalThis.KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        setY(Math.max(0, y - 1));
        break;
      case 'ArrowDown':
        setY(Math.min(90, y + 1));
        break;
      case 'ArrowLeft':
        setX(Math.max(0, x - 1));
        break;
      case 'ArrowRight':
        setX(Math.min(90, x + 1));
        break;
      default:
        break;
    }
  };

  function addVideoStream(video: HTMLVideoElement, stream: MediaStream) {
    // eslint-disable-next-line no-param-reassign
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    console.log('appended new video');
    videoGridRef.current.appendChild(video);
  }

  const onJoinRoom = useCallback((id) => {
    socket.emit('join-room', id);
  }, []);

  const connectToNewUser = useCallback(
    (userId: string, stream: MediaStream) => {
      const call = peer.call(userId, stream);
      const video = document.createElement('video');
      const handleStream = (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      };
      call.on('stream', handleStream);
      // call.off('stream', handleStream);
      call.on('close', () => video.remove());
    },
    [],
  );

  const onUserConnected = useCallback((userId, stream?: MediaStream) => {
    console.log('user-connected! id: ', userId);
    connectToNewUser(userId, stream);
  }, []);

  useEffect(() => {
    let myStream;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        myVideoRef.current.muted = true;
        addVideoStream(myVideoRef.current, stream);

        socket.on('user-connected', (userId) => {
          connectToNewUser(userId, stream);
        });
      })
      .catch((err) => {
        console.error('failed to get local stream', err);
      });
    return () => {
      // socket.off('user-connected', tmp);
    };
  });

  useEffect(() => {
    console.log('this has called');
    peer.on('open', onJoinRoom);
    // socket.on('user-connected', onUserConnected);

    return () => {
      peer.off('open', onJoinRoom);
      // socket.off('user-connected', onUserConnected);
    };
  });

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return (
    <MainContainer>
      <div className="video-grid" ref={videoGridRef}>
        <video width="300" height="200" ref={myVideoRef}>
          <track kind="captions" />
        </video>
      </div>
      <PixelArt className="cat" />
      <PixelArt className="sonic" coord={{ left: '15%', top: '30%' }} />
      <PixelArt className="chicken" coord={{ left: `${x}%`, top: `${y}%` }} />
      <PixelArt className="flower" coord={{ right: '10%' }} />
      <PixelArt className="ladybug" coord={{ bottom: '20%' }} />
      <PixelArt className="hedgehog" coord={{ bottom: '20%', right: '40%' }} />
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
};

export default Main;
