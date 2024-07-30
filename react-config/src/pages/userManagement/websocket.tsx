import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [sendmessage,setSendMessages] = useState<string>("");
  const ws = useRef<any>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080/ws');

    ws.current.onopen = () => {
      console.log('WebSocket Connection Opened');
    };

    ws.current.onmessage = (event:any) => {
      const message = event.data;
      setMessages((prevMessages:string[]) => [...prevMessages, message]);
    };

    ws.current.onclose = () => {
      console.log('WebSocket Connection Closed');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = (message:string) => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    } else {
      console.error('WebSocket is not open');
    }
  };

  const handleSendMessage = async () => {
    const message = 'Hello WebSocket'+sendmessage;
    sendMessage(message);

    try {
      const response = await axios.post('http://localhost:8080/api/message', { message });
      console.log('Message sent via Axios:', response.data);
    } catch (error) {
      console.error('Error sending message via Axios:', error);
    }
  };

  return (
    <div>
      <h1>WebSocket Communication</h1>
      <input type="text" value={sendmessage} onChange={(e)=>setSendMessages(e.target.value)} />
      <button onClick={handleSendMessage}>Send Message</button>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketComponent;
