import React, { useEffect } from 'react';
import { getTripsById } from '../../../services/trips';
import { getYelp } from '../../../utils/yelp';
import './entertainment.css';

export default function EntertainmentDetails() {
  const location = 'Reno';

  useEffect(() => {
    const fetchData = async () => {
      const yelp = await getYelp(location);
      console.log('yelp', yelp);
    };
    fetchData();
  }, []);

  return <h1> Test</h1>;
}
