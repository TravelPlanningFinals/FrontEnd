import React, { useState } from 'react';
import { useTrips } from '../../../hooks/useTrips';
import { addFlights, deleteFlight } from '../../../services/flights';
import { getTripsById } from '../../../services/trips';
import './flightStatus.css';

export default function FlightStatusDetails() {
  const { trips, loading, setTrips } = useTrips();
  const tripsId = trips.id;
  const [airline, setAirline] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlights(airline, departure, arrival, flightNumber, tripsId);
    const data = await getTripsById(tripsId);
    setTrips(data);
    setAirline('');
    setDeparture('');
    setArrival('');
    setFlightNumber('');
  };

  const handleClick = async (id) => {
    await deleteFlight(id);
    const data = await getTripsById(tripsId);
    setTrips(data);
  };

  if (loading) return <p>loading</p>;

  return (
    <>
      <div>
        {trips.flights.map((flight) => {
          return (
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
              <button
                className="delete-button"
                onClick={() => handleClick(flight.flight_id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
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
        <button
          class="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5 width-25"
          onClick={handleSubmit}
        >
          Add New Flight Information
        </button>
      </form>
    </>
  );
}
