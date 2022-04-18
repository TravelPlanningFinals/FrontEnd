import React, { useState } from 'react';
import BudgetDetails from '../../components/Plan/Budget/BudgetDetails';
import X from '../../assets/images/X.png';

export default function Budget() {
  const [style, setStyle] = useState('budgetStyle');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');

  function handleClick() {
    setStyle('budgetStyleBig');
    setHidden(null);
    setXStyle('X');
  }

  function minimize() {
    setStyle('budgetStyle');
    setHidden('hidden');
    setXStyle('hidden');
  }
  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>
      <div onClick={handleClick} className="hidden">
        {/* --- Bring back in if we go back to 4 tiles --- */}
        {/* <div onClick={handleClick} className={style}> */}
        <h1 className="padding">Budget Page</h1>
        <div className={hidden}>
          <BudgetDetails />
        </div>
      </div>
    </div>
  );
}
