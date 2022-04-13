import React, { useState } from 'react';
import LodgingDetails from '../../components/Plan/Lodging/LodgingDetails';

export default function Lodging() {
  const [lodgingStyle, setStyle] = useState('lodgingStyle');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!lodgingStyle);
    setHidden(!hidden);
  };

  return (
    <div
      onClick={ToggleClass}
      className={lodgingStyle ? 'lodgingStyle' : 'lodgingStyleBig'}
    >
      <h1 className="padding">Lodging Page</h1>
      <div className={hidden ? 'hidden' : 'lodgingStyleShow'}>
        <LodgingDetails />
      </div>
    </div>
  );
}
