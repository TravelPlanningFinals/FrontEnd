import React from 'react';
import { useState } from 'react';
import './TripDetails.css';
// import { useTrips } from '../../context/TripContext';
// import { useHistory } from 'react-router-dom';

export default function TripDetails() {
  const [locationText, setLocationText] = useState('');
  const [startDateText, setStartDateText] = useState('');
  const [endDateText, setEndDateText] = useState('');
  // const { trips, setTrips } = useTrips();
  // const history = useHistory();

  return (
    <>
      <div className="trip-form">
        <h2>Start Your Adventure</h2>
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
            placeholder="dates"
            value={startDateText}
            onChange={(e) => {
              setStartDateText(e.target.value);
            }}
          />
          <label>End Date: </label>
          <input
            className="dates"
            type="date"
            placeholder="dates"
            value={endDateText}
            onChange={(e) => {
              setEndDateText(e.target.value);
            }}
          />
          {/* <label>ehello</label>
          <input list="guests" />
          <datalist id="guests">
            <option>1</option>
          </datalist> */}
          {/* <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option> */}
        </form>
        <button class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5">
          Plan Your Trip
        </button>
      </div>
    </>
  );
}
