import React, { useEffect, useState } from 'react';
import { getTripsById } from '../../../services/trips';
import { getYelp } from '../../../utils/yelp';
import './entertainment.css';

export default function EntertainmentDetails() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const tripId = await getTripsById();
      console.log('tripId', tripId);
      const yelp = await getYelp(location);
      console.log('yelp', yelp);
    };
    fetchData();
  }, []);

  return <h1> Test</h1>;
}
