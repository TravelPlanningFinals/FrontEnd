import React, { useState } from 'react';
import LodgingDetails from '../../components/Plan/Lodging/LodgingDetails';
import X from '../../assets/images/X.png';
import lodging from '../../assets/images/lodging.png';

export default function Lodging() {
  const [style, setStyle] = useState('lodgingStyle');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('lodging');

  function handleClick() {
    setStyle('lodgingStyleBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('lodgingStyle');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('lodging');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Lodging Page</h1>
        <img src={lodging} class={image}></img>
        <div className={hidden}>
          <LodgingDetails />
        </div>
      </div>
    </div>
  );
}
