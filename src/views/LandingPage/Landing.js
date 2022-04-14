import React, { useState } from 'react';
import './Landing.css';

export default function Landing() {
  const [date, setDate] = useState('');
  const [returnDate, setendDate] = useState('');

  return (
    <>
      <h1>start your next adventure</h1>
      <div className="landingCard">
        <h2>Destination City</h2>
        <input placeholder="location"></input>
        <h2> Destination State </h2>
        <input placeholder="state"></input>
        <mark>Trip Starting Date:</mark>
        <input
          className="controls"
          type="date"
          placeholder="Starting Date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <mark className="end">Trip Ending Date:</mark>

        <input
          className="controls"
          type="date"
          placeholder="Ending Date"
          value={returnDate}
          onChange={(e) => {
            setendDate(e.target.value);
          }}
        />
        <br></br>

        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Plan your trip
        </button>
      </div>
    </>
  );
}
