import React from 'react';
import { useUser } from '../../../context/UserProvider';
import './tripLocation.css';

export default function TripLocationDetails() {
  const { user } = useUser();

  console.log('user', user);

  return (
    <div class="tripCard">
      <div>Trip Location Page</div>
      <h1>Your Trip</h1>
      <div>
        <ul>
          <li>User Context's Group</li>
          <li> Date of whent they are going</li>
          <li>Where they are going</li>
          <li>count down until event</li>
        </ul>
      </div>
      <input type="text" placeholder="testing"></input>
    </div>
  );
}
