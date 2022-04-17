import React, { useState } from 'react';
import DateDetails from '../../components/Plan/Dates/DateDetails';
import X from '../../assets/images/X.png';

export default function Dates() {
  const [style, setStyle] = useState('dateInfo');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('dateInfoBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('dateInfo');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>

      <div onClick={handleClick} className={style}>
        <h1 className="padding">Date Page</h1>
        <div className={hidden}>
          <DateDetails />
        </div>
      </div>
    </div>
  );
}
