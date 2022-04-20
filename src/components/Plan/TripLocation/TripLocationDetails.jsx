import React from 'react';
import { useUser } from '../../../context/UserProvider';
import { useTrips } from '../../../hooks/useTrips';
import CountDown from '../../../utils/countdown';
import './tripLocation.css';

export default function TripLocationDetails() {
  const { user } = useUser();
  const { trips, loading } = useTrips();
  const count = CountDown(trips.startDate);

  if (loading) return <p>...loading</p>;

  return (
    <div className="tripCard">
      <div>
        <ul className="tripSummary">
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
          <li>Days Until Trip: {count}</li>
        </ul>
      </div>
    </div>
  );
}
