import React, { useState } from 'react';
import LodgingDetails from '../../components/Plan/Lodging/LodgingDetails';
import X from '../../assets/images/X.png';

export default function Lodging() {
  const [style, setStyle] = useState('lodgingStyle');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('lodgingStyleBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('lodgingStyle');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Lodging Page</h1>
        <div className={hidden}>
          <LodgingDetails />
        </div>
      </div>
    </div>
  );
}
