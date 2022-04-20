import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTrips } from '../../../hooks/useTrips';
import { addFlights } from '../../../services/flights';
import './flightStatus.css';

export default function FlightStatusDetails() {
  const { trips, loading } = useTrips();
  const { id } = useParams();
  console.log('id', id);
  const tripsId = trips.id;
  console.log('tripsId', tripsId);
  console.log('trips.id', trips.id);
  console.log('trips.flights', trips.flights);

  const [airline, setAirline] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlights(airline, departure, arrival, flightNumber, tripsId);
  };
  if (loading) return <p>loading</p>;
  return (
    <>
      <h1>this is showing on flights</h1>
      {trips.flights.map((flight) => {
        return (
          <div className="flight-list" key={flight.id}>
            <p className="airline">airline: {flight.airline}</p>
            <p className="airline">departure: {flight.departure}</p>
            <p className="airline">arrival: {flight.arrival}</p>
            <p className="airline">flight Number: {flight.flight_number}</p>
          </div>
        );
      })}
      <form className="flight-form">
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
        <button onClick={handleSubmit}>Add new flight information</button>
      </form>
    </>
  );
}
