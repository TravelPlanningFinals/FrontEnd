import React, { useState } from 'react';
import TripLocationDetails from '../../components/Plan/TripLocation/TripLocationDetails';
import X from '../../assets/images/X.png';
import travel from '../../assets/images/travel.png';
import { useTrips } from '../../hooks/useTrips';

export default function TripLocation() {
  const [style, setStyle] = useState('tripInfo');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('travel');
  const { trips } = useTrips();

  function handleClick() {
    setStyle('tripInfoBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('tripInfo');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('travel');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Begin Your Trip to {trips.location}</h1>
        <img src={travel} class={image}></img>
        <div className={hidden}>
          <TripLocationDetails />
        </div>
      </div>
    </div>
  );
}
