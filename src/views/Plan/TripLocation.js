import React, { useState } from 'react';
import TripLocationDetails from '../../components/Plan/TripLocation/TripLocationDetails';

export default function TripLocation() {
  const [tripInfo, setStyle] = useState('tripInfo');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!tripInfo);
    setHidden(!hidden);
  };

  return (
    <div
      onClick={ToggleClass}
      className={tripInfo ? 'tripInfo' : 'tripInfoBig'}
    >
      {/* pull from back end */}
      <h1 className="padding">CITY going to</h1>
      <div className={hidden ? 'hidden' : 'tripInfoShow'}>
        <TripLocationDetails />
      </div>
    </div>
  );
}
