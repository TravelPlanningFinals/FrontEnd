import React, { useState } from 'react';
import FlightStatusDetails from '../../components/Plan/FlightStatus/FlightStatusDetails';
import flight from '../../assets/images/flight.png';
import X from '../../assets/images/X.png';

export default function FlightStatus() {
  const [style, setStyle] = useState('flightStatus');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('entertainmentStyle');

  function handleClick() {
    setStyle('tripInfoBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('flightStatus');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('entertainmentStyle');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">FlightStatus Page</h1>
        <img src={flight} class={image}></img>
        <div className={hidden}>
          <FlightStatusDetails />
        </div>
      </div>
    </div>
  );
}
