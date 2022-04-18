import React from 'react';
import TripDetails from '../../components/TripDetails/TripDetails';
<<<<<<< HEAD
import TripsCard from './TripsCard';
=======

import TripsCard from './TripsCard';

>>>>>>> b13d8190c1b54a227935501ad1eec397925b4693
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
