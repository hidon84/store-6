/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable react/no-unused-state */
import { Component, createRef, RefObject } from 'react';
import Peer, { MediaConnection, DataConnection } from 'peerjs';
import { Socket } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import {
  Stain,
  Logo,
  TypeCategoryIcon,
  DoodleAnnouncement1,
  DoodleAnnouncement2,
  Button,
} from '~/components/main/IconButtons';
import PixelArt, { Minimi, genRandomPixelArt } from '~/components/main/Minimi';
import { MainContainer } from './index.style';
import createSocket from '~/lib/api/socket';
import createPeer from '~/lib/api/peer';
import { alert } from '~/utils/modal';
import { RouterContext } from '~/core/Router';

interface MainState {
  users: { id: string; y: number; x: number; minimi: Minimi }[];
  peerCalls: Record<string, MediaConnection>;
  connections: Record<string, DataConnection>;
  minimi: Minimi;
  entered?: TypeCategoryIcon;
  y: number;
  x: number;
}

type MinimiUpdateMessage = {
  y: number;
  x: number;
  minimi: Minimi;
  from: string;
  message: 'updateMinimi';
};

const [DY, DX] = [2, 2];
const delayMS = 400;
const pleaseAlloweRecord =
  '음성녹음을 허용해주세요! 다른유저와 채팅할 수 있습니다.';

const categoryCoords = {
  book: { x: 23, y: 15 },
  hat: { x: 14, y: 62 },
  house: { x: 58, y: 36 },
  kk: { x: 72, y: 18 },
  baedal: { x: 30, y: 43 },
  tree: { x: 38, y: 76 },
  pencil: { x: 80, y: 43 },
  colab: { x: 66, y: 72 },
  gift: { x: 5, y: 34 },
};

class Main extends Component<{ u?: string }, MainState> {
  audioGridRef: RefObject<HTMLDivElement>;
  peer: Peer;
  myId: string;
  myStream?: MediaStream;
  socket: Socket;

  constructor(props) {
    super(props);
    const { minimi, y, x } = genRandomPixelArt();
    this.state = {
      peerCalls: {},
      connections: {},
      minimi,
      y,
      x,
      users: [],
    };
    this.socket = createSocket();
    this.myId = uuidv4();
    this.peer = createPeer(this.myId);
    this.peer.on('open', (id) => {
      this.socket.emit('join-room', id);
    });
    this.audioGridRef = createRef<HTMLDivElement>();
    this.setupConnections = this.setupConnections.bind(this);
    this.addConnections = this.addConnections.bind(this);
    this.addAudioStream = this.addAudioStream.bind(this);
    this.updateMinimi = this.updateMinimi.bind(this);
    this.setupConnections();
  }

  componentDidMount() {
    if (window.history.state) {
      const { from, error } = window.history.state;
      if (error === 'accessWithToken') {
        alert(`로그인 한 채로 ${from.slice(1)}페이지로 이동할 수 없습니다.`);
      } else if (error === 'accessWithoutToken') {
        alert(
          `로그인을 하지 않은 채로 ${from.slice(
            1,
          )}페이지로 이동할 수 없습니다.`,
        );
      }
    }
  }

  componentWillUnmount() {
    this.myStream?.getTracks().forEach((mediaTrack) => {
      mediaTrack.stop();
    });
    this.socket.disconnect();
    this.peer.destroy();
    document.body.removeEventListener('keydown', this.onKeyDown);
  }

  setupConnections() {
    this.setupAudioStream();

    this.socket.on('user-connected', async (userId: string) => {
      alert(`user-connected! ${userId}`);
      const conn = this.peer.connect(userId);

      setTimeout(() => {
        const { minimi, y, x } = this.state;
        const firstMinimiNotifyMessage: MinimiUpdateMessage = {
          y,
          x,
          from: this.myId,
          minimi,
          message: 'updateMinimi',
        };
        conn.send({ message: 'hello', from: this.myId });
        this.addConnections(userId, conn);
        conn.send(firstMinimiNotifyMessage);
      }, delayMS);
    });

    this.peer.on('connection', (con) => {
      con.on('data', (data) => {
        if (data.message === 'updateMinimi') {
          this.updateMinimi(data);
        } else if (data.message === 'hello') {
          alert(`new user?: ${con.peer}`);
          const conn = this.peer.connect(con.peer);
          setTimeout(() => {
            conn.send({ message: 'hello2', from: this.myId });
            this.addConnections(con.peer, conn);
          }, delayMS);
        }
      });
    });

    this.socket.on('user-disconnected', (userId) => {
      alert(`user-disconnected: , ${userId}`);
      const { peerCalls } = this.state;
      peerCalls[userId]?.close();
      delete peerCalls[userId];
      this.setState({
        peerCalls,
        users: this.state.users.filter((user) => user.id !== userId),
      });
      this.removeConnections(userId);
    });

    document.body.addEventListener('keydown', this.onKeyDown);
  }

  updateMinimi = (minimiMessage: MinimiUpdateMessage) => {
    const { y, x, from, minimi } = minimiMessage;
    const { users } = this.state;
    const nextUsers = users.slice().filter((user) => user.id !== from);
    nextUsers.push({ y, x, minimi, id: from });
    this.setState({ users: nextUsers });
  };

  addConnections = (id: string, connection: DataConnection) => {
    const { connections } = this.state;
    const nextConnections = {
      ...connections,
      [id]: connection,
    };
    this.setState({ connections: nextConnections });
  };

  removeConnections = (id: string) => {
    const { connections } = this.state;
    delete connections[id];
    this.setState({ connections });
  };

  addAudioStream = (video: HTMLAudioElement, stream: MediaStream) => {
    // eslint-disable-next-line no-param-reassign
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  };

  setupAudioStream = () => {
    /* When Someone tries to call me */
    this.peer.on('call', (call) => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((myStream) => {
          this.myStream = myStream;
          call.answer(myStream);
          const newAudio = document.createElement('audio');
          this.audioGridRef.current.appendChild(newAudio);
          call.on('stream', (otherUserStream) => {
            this.addAudioStream(newAudio, otherUserStream);
          });
        })
        .catch((_) => {
          alert(pleaseAlloweRecord, 3000);
        });
    });
    this.socket.on('user-connected', async (userId) => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((myStream) => {
          this.myStream = myStream;
          const call = this.peer.call(userId, myStream);
          const newAudio = document.createElement('audio');
          this.audioGridRef.current?.appendChild(newAudio);
          call.on('stream', (otherUserStream) => {
            this.addAudioStream(newAudio, otherUserStream);
          });
          call.on('close', () => {
            newAudio.remove();
          });
          const { peerCalls } = this.state;
          const nextPeers = {
            ...peerCalls,
            [userId]: call,
          };
          this.setState({ peerCalls: nextPeers });
        })
        .catch((_) => {
          alert(pleaseAlloweRecord, 3000);
        });
    });
  };

  broadCastMove = () => {
    const { connections, minimi, y, x } = this.state;
    Object.keys(connections).forEach((targetId) => {
      const conn = connections[targetId];
      const minimiUpdateMessage: MinimiUpdateMessage = {
        y,
        x,
        from: this.myId,
        minimi,
        message: 'updateMinimi',
      };
      conn.send(minimiUpdateMessage);
    });
  };

  // {category : string
  boundChecker = () => {
    const threshold = {
      y: 14,
      x: 12,
    };
    const characterOffset = {
      y: 3,
      x: 3,
    };
    const { y, x } = this.state;
    let enteredCategory: TypeCategoryIcon;
    Object.entries(categoryCoords).forEach(
      ([category, { x: categoryX, y: categoryY }]) => {
        if (
          categoryY - threshold.y < y - characterOffset.y &&
          y - characterOffset.y < categoryY + threshold.y &&
          categoryX - threshold.x < x - characterOffset.x &&
          x - characterOffset.x < categoryX + threshold.x
        ) {
          enteredCategory = category as TypeCategoryIcon;
        }
      },
    );
    if (enteredCategory) {
      this.setState({ entered: enteredCategory }, () => {
        alert(`스페이스 버튼을 눌러서 ${enteredCategory} 카테고리로 이동해요`);
      });
    } else {
      this.setState({ entered: undefined });
    }
  };

  onMinimiMove = () => {
    this.boundChecker();
    this.broadCastMove();
  };

  onKeyDown = (event: globalThis.KeyboardEvent) => {
    const { y, x, entered } = this.state;

    switch (event.code) {
      case 'ArrowUp':
        this.setState({ y: Math.max(0, y - DY) }, this.onMinimiMove);
        break;
      case 'ArrowDown':
        this.setState({ y: Math.min(90, y + DY) }, this.onMinimiMove);
        break;
      case 'ArrowLeft':
        this.setState({ x: Math.max(0, x - DX) }, this.onMinimiMove);
        break;
      case 'ArrowRight':
        this.setState({ x: Math.min(100, x + DX) }, this.onMinimiMove);
        break;
      case 'Space':
        if (!entered) break;
        this.context.push({
          pathname: '/products',
          state: {
            from: '/',
            category: entered,
          },
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { minimi, y, x, users, entered } = this.state;
    return (
      <MainContainer>
        <div className="audio-grid" ref={this.audioGridRef} />
        <PixelArt className="cat" coord={{ left: '4%', top: '14%' }} />
        <PixelArt className="chicken" coord={{ left: '35%', top: '20%' }} />
        <PixelArt className="sonic" coord={{ left: '15%', top: '30%' }} />
        <PixelArt className={minimi} coord={{ left: `${x}%`, top: `${y}%` }} />
        <PixelArt className="flower" coord={{ top: '8%', left: '80%' }} />
        <PixelArt className="ladybug" coord={{ top: '70%' }} />
        <PixelArt className="hedgehog" coord={{ top: '80%', right: '40%' }} />
        {users.map((user) => (
          <PixelArt
            key={`${user.id}`}
            className={user.minimi}
            coord={{ left: `${user.x}%`, top: `${user.y}%` }}
          />
        ))}
        <DoodleAnnouncement1 />
        <DoodleAnnouncement2 />
        <Button category="book" entered={entered === 'book'} />
        <Button category="baedal" entered={entered === 'baedal'} />
        <Button category="hat" entered={entered === 'hat'} />
        <Button category="gift" entered={entered === 'gift'} />
        <Button category="house" entered={entered === 'house'} />
        <Button category="kk" entered={entered === 'kk'} />
        <Button category="tree" entered={entered === 'tree'} />
        <Button category="pencil" entered={entered === 'pencil'} />
        <Button category="colab" entered={entered === 'colab'} />
        <Stain />
        <Logo />
      </MainContainer>
    );
  }
}

Main.contextType = RouterContext;

export default Main;
