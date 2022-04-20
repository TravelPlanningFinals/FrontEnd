import React from 'react';
import { useUser } from '../../../context/UserProvider';
import { useTrips } from '../../../hooks/useTrips';
import './tripLocation.css';

export default function TripLocationDetails() {
  const { user } = useUser();
  const { trips, loading } = useTrips();
  console.log('Look here NOAH', trips.guests);

  if (loading) return <p>...loading</p>;

  return (
    <div class="tripCard">
      <div>
        <ul>
          <li>Trip Summary for {trips.location}</li>
          <li>{user?.username} Will be your Tour guide</li>
          <li>
            <img src={user?.avatar} />
          </li>
          <li>
            The Trip will begin on {trips.startDate} and end on {trips.endDate}
          </li>
          <li>
            {trips.guests.map((guest) => {
              return (
                <div key={guest.id}>
                  <h2>{guest.name}</h2>
                  <h2>{guest.phone_number}</h2>
                </div>
              );
            })}
          </li>
          {/* --- Start Date count down of when to go. */}
          <li>count down until event</li>
        </ul>
      </div>
      <input type="text" placeholder="testing"></input>
    </div>
  );
}
