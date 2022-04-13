import React, { useState } from 'react';
import GroupDetails from '../../components/Plan/Group/GroupDetails';

export default function Group() {
  const [group, setStyle] = useState('group');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!group);
    setHidden(!hidden);
  };

  return (
    <div onClick={ToggleClass} className={group ? 'group' : 'groupBig'}>
      <h1 className="padding">Group Page</h1>
      <div className={hidden ? 'hidden' : 'groupShow'}>
        <GroupDetails />
      </div>
    </div>
  );
}
