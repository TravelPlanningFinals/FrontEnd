import React, { useState } from 'react';
import FlightStatusDetails from '../../components/Plan/FlightStatus/FlightStatusDetails';
import X from '../../assets/images/X.png';

export default function FlightStatus() {
  const [style, setStyle] = useState('flightStatus');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('tripInfoBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('flightStatus');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">FlightStatus Page</h1>
        <div className={hidden}>
          <FlightStatusDetails />
        </div>
      </div>
    </div>
  );
}
