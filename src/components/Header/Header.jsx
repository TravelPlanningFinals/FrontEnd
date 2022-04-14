import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">Back to Home (this is header)</Link>
    </div>
  );
}
