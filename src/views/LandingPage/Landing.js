import React, { useState } from 'react';
import { fetchYelp } from '../../services/yelp';
import './Landing.css';

export default function Landing() {
  const [date, setDate] = useState('');
  const [returnDate, setendDate] = useState('');

  // Wrap in a use effect

  // fetchYelp();

  return (
    <>
      <h1>start your next adventure</h1>
      <input placeholder="location"></input>
      <br></br>
      {/* <input placeholder="dates"></input> */}
      <br></br>
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
      <br></br>
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
    </>
  );
}
