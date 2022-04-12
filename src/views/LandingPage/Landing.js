import React from 'react';

export default function Landing() {
  return (
    <>
      <h1>start your next adventure</h1>
      <input placeholder="location"></input>
      <input placeholder="dates"></input>
      <br></br>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Plan your trip
      </button>
    </>
  );
}
