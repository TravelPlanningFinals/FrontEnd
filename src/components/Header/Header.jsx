import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../services/users';

export default function Header() {
  return (
    <div>
      <Link to="/">Back to Home (this is header)</Link>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}
