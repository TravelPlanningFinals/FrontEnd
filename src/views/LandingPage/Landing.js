import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import TripForm from '../../components/Forms/TripForm';
import { addTrip } from '../../services/city';
import './Landing.css';

export default function Landing() {
  const [location, setLocation] = useState('');
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTrip(location, start_date, end_date);
    } catch {
      alert('Failed to add a Trip');
    }
    <Redirect to="/plan" />;
  };

  return (
    <div>
      <h1>Plan a Trip</h1>
      <TripForm
        location={location}
        setLocation={setLocation}
        start_date={start_date}
        setStart_date={setStart_date}
        end_date={end_date}
        setEnd_date={setEnd_date}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
