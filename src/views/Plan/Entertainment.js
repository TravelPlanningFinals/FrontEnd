import React, { useState } from 'react';
import EntertainmentDetails from '../../components/Plan/Entertainment/EntertainmentDetails';
import X from '../../assets/images/X.png';

export default function Entertainment() {
  const [style, setStyle] = useState('entertainmentInfo');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('entertainmentInfoBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('entertainmentInfo');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Entertainment Page</h1>
        <div className={hidden}>
          <EntertainmentDetails />
        </div>
      </div>
    </div>
  );
}
