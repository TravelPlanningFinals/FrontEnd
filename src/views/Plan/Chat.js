import React, { useState } from 'react';
import ChatDetails from '../../components/Plan/Chat/ChatDetails';

export default function Chat() {
  const [chat, setStyle] = useState('chat');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!chat);
    setHidden(!hidden);
  };

  return (
    <div onClick={ToggleClass} className={chat ? 'chat' : 'chatBig'}>
      <h1 className="padding">Chat Page</h1>
      <div className={hidden ? 'hidden' : 'chatShow'}>
        <ChatDetails />
      </div>
    </div>
  );
}
