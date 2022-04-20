import React, { useState } from 'react';
import TripLocationDetails from '../../components/Plan/TripLocation/TripLocationDetails';
import X from '../../assets/images/X.png';
import { useUser } from '../../context/UserProvider';
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
        {/* pull from back end */}
        {/* --- Context of City name goes here --- */}
        <h1 className="padding">Your Trip to</h1>
        <img src={travel} class={image}></img>
        <h1>{trips.location}</h1>
        <div className={hidden}>
          <TripLocationDetails />
        </div>
      </div>
    </div>
  );
}
