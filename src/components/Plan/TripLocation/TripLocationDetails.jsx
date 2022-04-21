import React from 'react';
import { useUser } from '../../../context/UserProvider';
import CountDown from '../../../utils/countdown';
import './tripLocation.css';

export default function TripLocationDetails({ mapData, loading }) {
  const { user } = useUser();
  const count = CountDown(mapData.startDate);

  if (loading) return <p>loading...</p>;

  return (
    <>
      <div className="tripSummary">
        <li>This trip is in {count} days</li>
        <li>{user?.username} Will be your Tour guide</li>
        <img src={user?.avatar} />
        <li>
          The Trip will begin on: {mapData.startDate} and end on{' '}
          {mapData.endDate}
        </li>
        <li>Your travel group is:</li>
      </div>
      <div className="group-members">
        {mapData.guests.map((guest) => {
          return (
            <div className="person" key={guest.guest_id}>
              <p>{guest.name}</p>
              <p>Phone #: {guest.phone_number}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
