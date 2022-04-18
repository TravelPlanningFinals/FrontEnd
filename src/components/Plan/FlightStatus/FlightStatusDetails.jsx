import React from 'react';
import './flightStatus.css';

export default function FlightStatusDetails() {
  return (
    <form class="flightInputs">
      <div className="first">
        {/* --- 1st Person flight info --- */}
        <input placeholder="Name" />
        <input placeholder="Flight Airline" />
        <input placeholder="Departure" />
        <input placeholder="Arrival" />
        <input placeholder="Flight Number" />
      </div>
      <div className="second">
        {/* Second person flight info */}
        <input placeholder="Name" />
        <input placeholder="Flight Airline" />
        <input placeholder="Departure" />
        <input placeholder="Arrival" />
        <input placeholder="Flight Number" />
      </div>
      <div className="third">
        {/* Second person flight info */}
        <input placeholder="Name" />
        <input placeholder="Flight Airline" />
        <input placeholder="Departure" />
        <input placeholder="Arrival" />
        <input placeholder="Flight Number" />
      </div>
      <div className="fourth">
        {/* Second person flight info */}
        <input placeholder="Name" />
        <input placeholder="Flight Airline" />
        <input placeholder="Departure" />
        <input placeholder="Arrival" />
        <input placeholder="Flight Number" />
      </div>
    </form>
  );
}
