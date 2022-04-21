# views

Our last folder is the `views` folder. The pages that we render on our websites are generally composed of many different individual components. The individual components that live in our `components` folder are used on these pages together to build our UI.

Think of a Home page in your app. The `Home.jsx` page would represent this page. The `Home.jsx` page will be comprised of many smaller components together. Each individual page in your app and the individual components needed to create that page will be in the views folder.

<!--
import React from 'react';
import { useState } from 'react';
import './TripDetails.css';
import { useUser } from '../../context/UserProvider';
import { useTrips } from '../../context/TripProvider';
import { addTrips } from '../../services/trips';

export default function TripDetails() {
  const [userText, setUserText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [startDateText, setStartDateText] = useState('');
  const [endDateText, setEndDateText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const { userInput, setUserInput } = useUser();
  const { guestEntry, setguestEntry } = useTrips();
  // const { loading } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTrips(locationText, startDateText, endDateText);
    window.location.replace('/trips');
  };

  const handleEdit = (e) => {
    setIsDisabled(!isDisabled);
    e.preventDefault();
    setUserInput(userText);
    setguestEntry([
      ...guestEntry,
      {
        locationText,
        userInput: userText,
        startDateText,
        endDateText,
        id: guestEntry.length,
      },
    ]);
  };

  const displayMessage = userInput ? `${userInput}` : 'edit';

  // if (loading) return <p>loading...</p>;
  return (
    <>
      <div className="trip-form">
        <h2>Start Your Adventure!</h2>
        <form onSubmit={handleEdit}>
          <h1>{displayMessage}</h1>
          <label>Location: </label>
          <input
            type="text"
            placeholder="testing"
            value={userText}
            onChange={(e) => {
              setUserText(e.target.value);
            }}
          />
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
        ></button>
        <button
          setUserInput={setUserInput}
          setguestEntry={setguestEntry}
          onClick={handleEdit}
        >
          Plan Your Trip
        </button>
      </div>
    </>
  );
}
 -->
