import React, { useState } from 'react';
import EntertainmentDetails from '../../components/Plan/Entertainment/EntertainmentDetails';

export default function Entertainment() {
  const [entertainmentInfo, setStyle] = useState('entertainmentInfo');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!entertainmentInfo);
    setHidden(!hidden);
  };

  return (
    <div
      onClick={ToggleClass}
      className={
        entertainmentInfo ? 'entertainmentInfo' : 'entertainmentInfoBig'
      }
    >
      <h1 className="padding">Entertainment Page</h1>
      <div className={hidden ? 'hidden' : 'entertainmentInfoShow'}>
        <EntertainmentDetails />
      </div>
    </div>
  );
}
