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
    <>
      <div className="tripSummary">
        <li>is in {count} days</li>
        <li>{user?.username} Will be your Tour guide</li>
        <img src={user?.avatar} />
        <li>
          The Trip will begin on: {trips.startDate} and end on {trips.endDate}
        </li>
        <li>Your travel group is:</li>
      </div>
      <div className="group-members">
        {trips.guests.map((guest) => {
          return (
            <div className="person" key={guest.id}>
              <h2>{guest.name}</h2>
              <h2>Phone #: {guest.phone_number}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
