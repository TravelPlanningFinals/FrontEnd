import React, { useState } from 'react';
import EntertainmentDetails from '../../components/Plan/Entertainment/EntertainmentDetails';
import X from '../../assets/images/X.png';
import entertainment from '../../assets/images/entertainment.png';

export default function Entertainment() {
  const [style, setStyle] = useState('entertainmentInfo');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('entertainmentStyle');

  function handleClick() {
    setStyle('entertainmentInfoBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('entertainmentInfo');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('entertainmentStyle');
  }

  return (
    <div>
      <div className="xcss">
        <img onClick={minimize} src={X} class={XStyle}></img>
        <div onClick={handleClick} className={style}>
          <h1 className="padding">Entertainment Page</h1>
          <img src={entertainment} class={image}></img>
          <div className={hidden}>
            <EntertainmentDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
