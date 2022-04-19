import React from 'react';
import { useState } from 'react';
import './TripDetails.css';
// import { useTrips } from '../../context/TripProvider';
// import { useUser } from '../../context/UserProvider';
import { addTrips } from '../../services/trips';
// import { useHistory } from 'react-router-dom';

export default function TripDetails() {
  const [userText, setUserText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [startDateText, setStartDateText] = useState('');
  const [endDateText, setEndDateText] = useState('');
  // const { trips, setTrips } = useTrips();
  // const { user, setUser } = useUser();
  // const history = useHistory();
  // handle submit w/ locations and dates
  // map thru on trips page or push to another page to list trips

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTrips(locationText, startDateText, endDateText);
    // setUser(userText);
    // setTrips([
    //   ...trips,
    //   {
    //     location: locationText,
    //     startDate: startDateText,
    //     endDate: endDateText,
    //     user: userText,
    //   },
    // ]);
  };
  return (
    <>
      <div className="trip-form">
        <h2>Start Your Adventure</h2>
        <form>
          {/* <button onSubmit={() => setUser('')}>Create Trip</button> */}
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
        </form>
        <button onClick={handleSubmit}>Create Trip</button>
        {/* <button class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5">
          Plan Your Trip
        </button> */}
      </div>
    </>
  );
}
