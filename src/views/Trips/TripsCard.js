import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrips } from '../../context/TripProvider';
import { getAllTrips } from '../../services/trips';
import './TripsCard.css';

export default function TripsCard() {
  const { trips, setTrips } = useTrips();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTrips();
      setTrips(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>loading...</p>;
  return (
    <>
      <h1 className="tripListTitle">TRIPS</h1>
      <div className="trips">
        {trips.map((trips) => {
          return (
            <div className="tripsList" key={trips.id}>
              <Link className="tripLink" to={`/plan/${trips.id}`}>
                <p className="tripLocation">
                  Destination:{' '}
                  {trips.location.charAt(0).toUpperCase() +
                    trips.location.slice(1)}
                </p>
              </Link>
              <div className="tripdates">
                <p className="tripStartDate">Start Date: {trips.startDate}</p>
                <p className="tripEndDate">End Date: {trips.endDate}</p>
              </div>
              <button
                class="bg-transparent hover:bg-pink-100 text-red-500 font-semibold hover:text-white py-1 px-2 border border-red-300 hover:border-transparent rounded m-3"
                // onClick={''}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
