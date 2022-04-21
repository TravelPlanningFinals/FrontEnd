import React, { useState } from 'react';
import { useTrips } from '../../../hooks/useTrips';
import { addFlights, deleteFlight } from '../../../services/flights';
import './flightStatus.css';

export default function FlightStatusDetails() {
  const { trips, loading } = useTrips();
  const tripsId = trips.id;
  const [airline, setAirline] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlights(airline, departure, arrival, flightNumber, tripsId);
    window.location.reload('/');
  };

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteFlight(trips.flights.id);
  // };

  if (loading) return <p>loading</p>;

  return (
    <>
      {trips.flights.map((flight) => {
        console.log('flight.flight_id', flight.flight_id);
        return (
          <>
            <button>Edit</button>
            <button onClick={() => deleteFlight(flight.flight_id)}>
              Delete
            </button>
            <div className="flightlist" key={flight.flight_id}>
              <p className="flightdetails">
                Airline: <p className="details">{flight.airline}</p>
              </p>
              <p className="flightdetails">
                Departure: <p className="details">{flight.departure}</p>
              </p>
              <p className="flightdetails">
                Arrival: <p className="details">{flight.arrival}</p>
              </p>
              <p className="flightdetails">
                Flight Number: <p className="details">{flight.flight_number}</p>
              </p>
            </div>
          </>
        );
      })}
      <form className="flightform">
        <input
          placeholder="Airline"
          value={airline}
          onChange={(e) => {
            setAirline(e.target.value);
          }}
        />
        <input
          placeholder="Departure"
          value={departure}
          onChange={(e) => {
            setDeparture(e.target.value);
          }}
        />
        <input
          placeholder="Arrival"
          value={arrival}
          onChange={(e) => {
            setArrival(e.target.value);
          }}
        />
        <input
          placeholder="Flight Number"
          value={flightNumber}
          onChange={(e) => {
            setFlightNumber(e.target.value);
          }}
        />
      </form>
      <button
        class="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5"
        onClick={handleSubmit}
      >
        Add New Flight Information{' '}
      </button>
    </>
  );
}
