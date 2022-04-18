import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTrips } from '../../context/TripProvider';
import { getAllTrips } from '../../services/trips';

export default function TripsCard() {
  const { trips, setTrips } = useTrips();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTrips();
      setTrips(data);
      console.log(data);
      //   setLoading(false);
    };
    fetchData();
  }, []);
  console.log(trips);
  return (
    <div>
      <h1 className="tripListTitle">TRIPS</h1>

      {trips.map((trips) => {
        return (
          <div className="tripsList" key={trips.id}>
            <h1 className="tripLocation">Destination: {trips.location}</h1>
            <Link className="tripLink" to={`/plan/${trips.id}`}>
              <p className="tripStartDate">Start Date: {trips.startDate}</p>
              <p className="tripEndDate">End Date: {trips.endDate}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
