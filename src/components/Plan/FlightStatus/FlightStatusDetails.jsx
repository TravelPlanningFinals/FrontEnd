import React, { useState } from 'react';
import { addFlights } from '../../../services/flights';
import './flightStatus.css';

export default function FlightStatusDetails() {
  const [name, setName] = useState('');
  const [airline, setAirline] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlights(airline, departure, arrival);
  };

  return (
    <form class="flightInputs">
      <div className="first">
        {/* --- 1st Person flight info --- */}
        {/* <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        /> */}
        <input
          placeholder="Flight Airline"
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
        {/* <input placeholder="Flight Number" /> */}
      </div>
      <button onClick={handleSubmit}>Add new flight information</button>
    </form>
  );
}
