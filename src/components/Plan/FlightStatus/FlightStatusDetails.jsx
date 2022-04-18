import React, { useState } from 'react';
import { addFlights } from '../../../services/flights';
import './flightStatus.css';

export default function FlightStatusDetails() {
  const [name, setName] = useState('');
  const [airline1, setAirline1] = useState('');
  const [departure1, setDeparture1] = useState('');
  const [arrival1, setArrival1] = useState('');
  const [flightNumber1, setFlightNumber1] = useState('');
  const [name2, setName2] = useState('');
  const [airline2, setAirline2] = useState('');
  const [departure2, setDeparture2] = useState('');
  const [arrival2, setArrival2] = useState('');
  const [flightNumber2, setFlightNumber2] = useState('');
  const [airline3, setAirline3] = useState('');
  const [departure3, setDeparture3] = useState('');
  const [arrival3, setArrival3] = useState('');
  const [flightNumber3, setFlightNumber3] = useState('');
  const [airline4, setAirline4] = useState('');
  const [departure4, setDeparture4] = useState('');
  const [arrival4, setArrival4] = useState('');
  const [flightNumber4, setFlightNumber4] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlights(airline1, departure1, arrival1, flightNumber1);
    await addFlights(airline2, departure2, arrival2, flightNumber2);
    await addFlights(airline3, departure3, arrival3, flightNumber3);
    await addFlights(airline4, departure4, arrival4, flightNumber4);
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
          value={airline1}
          onChange={(e) => {
            setAirline1(e.target.value);
          }}
        />
        <input
          placeholder="Departure"
          value={departure1}
          onChange={(e) => {
            setDeparture1(e.target.value);
          }}
        />
        <input
          placeholder="Arrival"
          value={arrival1}
          onChange={(e) => {
            setArrival1(e.target.value);
          }}
        />
        <input
          placeholder="Flight Number"
          value={flightNumber1}
          onChange={(e) => {
            setFlightNumber1(e.target.value);
          }}
        />
      </div>
      <div className="second">
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
          value={airline2}
          onChange={(e) => {
            setAirline2(e.target.value);
          }}
        />
        <input
          placeholder="Departure"
          value={departure2}
          onChange={(e) => {
            setDeparture2(e.target.value);
          }}
        />
        <input
          placeholder="Arrival"
          value={arrival2}
          onChange={(e) => {
            setArrival2(e.target.value);
          }}
        />
        <input
          placeholder="Flight Number"
          value={flightNumber2}
          onChange={(e) => {
            setFlightNumber2(e.target.value);
          }}
        />
      </div>
      <div className="second">
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
          value={airline3}
          onChange={(e) => {
            setAirline3(e.target.value);
          }}
        />
        <input
          placeholder="Departure"
          value={departure3}
          onChange={(e) => {
            setDeparture3(e.target.value);
          }}
        />
        <input
          placeholder="Arrival"
          value={arrival3}
          onChange={(e) => {
            setArrival3(e.target.value);
          }}
        />
        <input
          placeholder="Flight Number"
          value={flightNumber3}
          onChange={(e) => {
            setFlightNumber3(e.target.value);
          }}
        />
      </div>
      <div className="second">
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
          value={airline4}
          onChange={(e) => {
            setAirline4(e.target.value);
          }}
        />
        <input
          placeholder="Departure"
          value={departure4}
          onChange={(e) => {
            setDeparture4(e.target.value);
          }}
        />
        <input
          placeholder="Arrival"
          value={arrival4}
          onChange={(e) => {
            setArrival4(e.target.value);
          }}
        />
        <input
          placeholder="Flight Number"
          value={flightNumber4}
          onChange={(e) => {
            setFlightNumber4(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Add new flight information</button>
    </form>
  );
}
