import React, { useState } from 'react';
import FlightStatusDetails from '../../components/Plan/FlightStatus/FlightStatusDetails';

export default function FlightStatus() {
  const [flightStatus, setStyle] = useState('flightStatus');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!flightStatus);
    setHidden(!hidden);
  };

  return (
    <div
      onClick={ToggleClass}
      className={flightStatus ? 'flightStatus' : 'flightStatusBig'}
    >
      <h1 className="padding">FlightStatus Page</h1>
      <div className={hidden ? 'hidden' : 'flightStatusShow'}>
        <FlightStatusDetails />
      </div>
    </div>
  );
}
