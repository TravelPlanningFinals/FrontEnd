import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTripsById } from '../../../services/trips';
import { getYelp } from '../../../utils/yelp';
import './entertainment.css';

export default function EntertainmentDetails() {
  const [city, setCity] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTripsById(id);
      const yelp = await getYelp(data.location);
      console.log('yelp', yelp.body.businesses);
      setCity(yelp.body.businesses);
    };
    fetchData();
  }, []);

  console.log('city', city);

  return (
    <>
      <div>
        {city.map((item) => {
          return (
            <div key={item.name}>
              <h2 key="item">{item.name}</h2>;
            </div>
          );
        })}
      </div>
    </>
  );
}
