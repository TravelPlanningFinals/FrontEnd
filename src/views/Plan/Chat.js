import React, { useState } from 'react';
import ChatDetails from '../../components/Plan/Chat/ChatDetails';
import X from '../../assets/images/X.png';

export default function Chat() {
  const [style, setStyle] = useState('chat');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('chatBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('chat');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      {/* --- replace with below if going 4x4 tiles --- */}
      <div onClick={handleClick} className="hidden">
        {/* <div onClick={handleClick} className={style}> */}
        <h1 className="padding">Chat Page</h1>
        <div className={hidden}>
          <ChatDetails />
        </div>
      </div>
    </div>
  );
}
