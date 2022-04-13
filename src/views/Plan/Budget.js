import React, { useState } from 'react';
import BudgetDetails from '../../components/Plan/Budget/BudgetDetails';

export default function Budget() {
  const [budgetStyle, setStyle] = useState('budgetStyle');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!budgetStyle);
    setHidden(!hidden);
  };

  return (
    <div
      onClick={ToggleClass}
      className={budgetStyle ? 'budgetStyle' : 'budgetStyleBig'}
    >
      <h1 className="padding">Budget Page</h1>
      <div className={hidden ? 'hidden' : 'budgetStyleShow'}>
        <BudgetDetails />
      </div>
    </div>
  );
}
