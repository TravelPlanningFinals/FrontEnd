import React from 'react';
import { useState } from 'react';
import './TripDetails.css';
import { useUser } from '../../context/UserProvider';
import { addTrips } from '../../services/trips';

export default function TripDetails() {
  const [locationText, setLocationText] = useState('');
  const [startDateText, setStartDateText] = useState('');
  const [endDateText, setEndDateText] = useState('');
  const { user, loading } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTrips(locationText, startDateText, endDateText);
    window.location.replace('/trips');
  };

  if (loading) return <p>loading...</p>;
  return (
    <>
      <div className="trip-form">
        <h2>Start Your Adventure!</h2>
        <form>
          <label>Location: </label>
          <input
            className="location"
            type="text"
            placeholder="location"
            value={locationText}
            onChange={(e) => {
              setLocationText(e.target.value);
            }}
          />
          <label>Start Date: </label>
          <input
            className="dates"
            type="date"
            value={startDateText}
            onChange={(e) => {
              setStartDateText(e.target.value);
            }}
          />
          <label>End Date: </label>
          <input
            className="dates"
            type="date"
            value={endDateText}
            onChange={(e) => {
              setEndDateText(e.target.value);
            }}
          />
        </form>
        <button
          class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5"
          onClick={handleSubmit}
        >
          Plan Your Trip
        </button>
      </div>
    </>
  );
}
