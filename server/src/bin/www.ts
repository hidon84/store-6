import http from 'http';
import { Server, Socket } from 'socket.io';
import createApp from '@/app';
import config from '@/config';

const { port } = config;

createApp().then(app => {
  app.set('port', port);
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.on('move', (data: any) => {
      console.log('move', data);
      io.emit('update-moves', data);
    });
    socket.on('join-room', userId => {
      // socket.join('gate');
      // socket.to('gate').emit('user-connected', userId);
      socket.broadcast.emit('user-connected', userId);
      console.log('user-connected! id: ', userId);
      socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', userId);
      });
    });
  });

  /**
   * Event listener for HTTP server "error" event.
   */
  const onError = (error: any) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  /**
   * Event listener for HTTP server "listening" event.
   */
  const onListening = () => {
    const addr = server.address();
    const bind =
      typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
    console.info(`Listening on ${bind}`);
  };

  server.listen(port, () => {
    console.log(`Express Server ${port}`);
  });

  server.on('error', onError);
  server.on('listening', onListening);
});
