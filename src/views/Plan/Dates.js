import React, { useState } from 'react';
import DateDetails from '../../components/Plan/Dates/DateDetails';

export default function Dates() {
  const [dateInfo, setStyle] = useState('dateInfo');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!dateInfo);
    setHidden(!hidden);
  };

  return (
    <div
      onClick={ToggleClass}
      className={dateInfo ? 'dateInfo' : 'dateInfoBig'}
    >
      <h1 className="padding">Date Page</h1>
      <div className={hidden ? 'hidden' : 'dateInfoShow'}>
        <DateDetails />
      </div>
    </div>
  );
}
