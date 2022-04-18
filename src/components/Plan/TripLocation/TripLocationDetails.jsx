import React from 'react';
import { useUser } from '../../../context/UserProvider';
import './tripLocation.css';

export default function TripLocationDetails() {
  // --- Need to use this context below ----
  const { user } = useUser();

  return (
    <div class="tripCard">
      <div>Trip Location Page</div>
      <h1>Your Trip</h1>
      <div>
        <ul>
          {/* --- user context here for user names "group" --- */}
          <li>User Context's Group</li>
          {/* user context example here */}
          <li>{user?.username}</li>
          {/* --- use the TripId to pull dates going */}
          <li> Date of whent they are going</li>
          {/* --- back end of tripId to show where they are going */}
          <li>Where they are going</li>
          {/* --- Start Date count down of when to go. */}
          <li>count down until event</li>
        </ul>
      </div>
      <input type="text" placeholder="testing"></input>
    </div>
  );
}
