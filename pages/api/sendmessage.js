import { Server } from 'socket.io';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

// Initialize a new Socket.io server
const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
  }

  res.socket.server.io.on('connection', (socket) => {
    console.log('A client connected');

    // Listen for chat messages from clients
    socket.on('chat message', (message) => {
      console.log('Message:', message);

      // Broadcast the message to all connected clients
      res.socket.server.io.emit('chat message', message);
    });

    // Handle disconnections
    socket.on('disconnect', () => {
      console.log('A client disconnected');
    });
  });

  res.end();
};

export default withApiAuthRequired(ioHandler);
