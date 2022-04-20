import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../services/users';
import './Header.css';

export default function Header() {
  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
    window.location.replace('/');
  };

  return (
    <div className="header">
      <div className="back-to-trips">
        <Link to="/trips">Back to your trips</Link>
      </div>
      <div className="sign-out">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}
