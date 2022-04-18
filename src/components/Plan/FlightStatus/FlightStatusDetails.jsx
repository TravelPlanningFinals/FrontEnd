import React from 'react';
import './flightStatus.css';

export default function FlightStatusDetails() {
  return (
    <div>
      <div>
        <h1>username from context</h1>
        <div class="flightInputs">
          Turn these into H2s, with an edit button
          <h1>Flight</h1>
          {/* --- 1st Person flight info --- */}
          <input placeholder="Flight Airline" />
          <input placeholder="Flight Number" />
          {/* Second person flight info */}
          <input placeholder="Flight Airline" />
          <input placeholder="Flight Number" />
          {/* Second person flight info */}
          <input placeholder="Flight Airline" />
          <input placeholder="Flight Number" />
          {/* Second person flight info */}
          <input placeholder="Flight Airline" />
          <input placeholder="Flight Number" />
        </div>
      </div>
    </div>
  );
}
