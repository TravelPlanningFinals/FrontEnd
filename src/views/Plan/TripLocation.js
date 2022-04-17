import React, { useState } from 'react';
import TripLocationDetails from '../../components/Plan/TripLocation/TripLocationDetails';
import X from '../../assets/images/X.png';

export default function TripLocation() {
  const [style, setStyle] = useState('tripInfo');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  // const ToggleClass = () => {
  //   // setStyle(!tripInfo);
  //   // setHidden(!hidden);
  //   setStyle(tripInfoBig);
  //   setHidden(hidden);
  // };

  function handleClick() {
    setStyle('tripInfoBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('tripInfo');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div
        // onClick={ToggleClass}
        onClick={handleClick}
        className={style}
        // className={tripInfo ? 'tripInfo' : 'tripInfoBig'}
      >
        {/* pull from back end */}
        <h1 className="padding">CITY going to</h1>
        {/* <div className={hidden ? 'hidden' : 'tripInfoShow'}> */}
        <div className={hidden}>
          <TripLocationDetails />
        </div>
      </div>
    </div>
  );
}
