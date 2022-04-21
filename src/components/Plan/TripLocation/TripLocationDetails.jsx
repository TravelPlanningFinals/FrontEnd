import React from 'react';
import { useUser } from '../../../context/UserProvider';
import CountDown from '../../../utils/countdown';
import './tripLocation.css';

export default function TripLocationDetails({ mapData, loading }) {
  const { user } = useUser();
  const count = CountDown(mapData.startDate);
  console.log('mapData', mapData.guests);

  if (loading) return <p>loading...</p>;

  return (
    <>
      <div className="tripSummary">
        <li>is in {count} days</li>
        <li>{user?.username} Will be your Tour guide</li>
        <img src={user?.avatar} />
        <li>
          The Trip will begin on: {mapData.startDate} and end on{' '}
          {mapData.endDate}
        </li>
        <li>Your travel group is:</li>
      </div>
      <div>
        {mapData.guests.map((guest) => {
          return (
            <div classname="Person" key={guest.guest_id}>
              <p>{guest.name}</p>
              <p>{guest.phone_number}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
