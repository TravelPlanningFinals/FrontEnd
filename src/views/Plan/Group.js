import React, { useState } from 'react';
import GroupDetails from '../../components/Plan/Group/GroupDetails';
import X from '../../assets/images/X.png';

export default function Group() {
  const [style, setStyle] = useState('group');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('groupBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('group');
    setHidden('hidden');
    setXStyle('hidden');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Group Page</h1>
        <div className={hidden}>
          <GroupDetails />
        </div>
      </div>
    </div>
  );
}
