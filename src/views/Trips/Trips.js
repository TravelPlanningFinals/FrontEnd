import React from 'react';
import TripDetails from '../../components/TripDetails/TripDetails';

import TripsCard from './TripsCard';

import { getAllTrips } from '../../services/params';

export default function Trips() {
  const tripList = getAllTrips();
  console.log('getAllTrips', getAllTrips([]));
  console.log('tripList', tripList);

  return (
    <>
      <TripDetails />
      <TripsCard />
    </>
  );
}
