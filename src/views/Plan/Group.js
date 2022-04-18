import React, { useState } from 'react';
import GroupDetails from '../../components/Plan/Group/GroupDetails';
import X from '../../assets/images/X.png';
import group from '../../assets/images/group.png';

export default function Group() {
  const [style, setStyle] = useState('group');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('groupImg');

  function handleClick() {
    setStyle('groupBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('group');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('groupImg');
  }

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Group Page</h1>
        <img src={group} class={image}></img>
        <div className={hidden}>
          <GroupDetails />
        </div>
      </div>
    </div>
  );
}
