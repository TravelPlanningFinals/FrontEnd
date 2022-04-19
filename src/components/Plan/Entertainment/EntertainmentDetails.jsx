import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTripsById } from '../../../services/trips';
import { getYelp } from '../../../utils/yelp';
import './entertainment.css';

export default function EntertainmentDetails() {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTripsById(id);
      const yelp = await getYelp(data.location);
      console.log('yelp', yelp.body.businesses);
    };
    fetchData();
  }, []);

  return <h1>HOlder</h1>;
}
