import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Socket.io Chat App</h1>
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
