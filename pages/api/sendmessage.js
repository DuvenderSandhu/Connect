import { Server } from 'socket.io';



export default async (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
  }

  res.socket.server.io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('chat message', (message) => {
      console.log('Message:', message);
      res.socket.server.io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
      console.log('A client disconnected');
    });
  });

  res.end();
};
