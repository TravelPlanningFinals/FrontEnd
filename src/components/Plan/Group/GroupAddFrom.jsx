import React, { useState } from 'react';
import { addGuests, deleteGuest } from '../../../services/guests';
import { useTrips } from '../../../hooks/useTrips';
import { getTripsById } from '../../../services/trips';

export default function GroupAddForm() {
  const { trips, loading, setTrips } = useTrips();
  const tripsId = trips.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addGuests(name, email, phoneNumber, emergencyContact, tripsId);
    const data = await getTripsById(tripsId);
    setTrips(data);
  };

  const handleClick = async (id) => {
    await deleteGuest(id);
    const data = await getTripsById(tripsId);
    setTrips(data);
  };
  if (loading) return <p>loading</p>;
  return (
    <>
      <h1>Your Group!</h1>
      {trips.guests.map((guest) => {
        return (
          <div className="guestlist" key={guest.guest_id}>
            <p className="name">
              Name: <p className="details">{guest.name}</p>
            </p>
            <p className="name">
              Email: <p className="details">{guest.email}</p>
            </p>
            <p className="name">
              Phone Number: <p className="details">{guest.phone_number}</p>
            </p>
            <p className="name">
              Emergency Contact:{' '}
              <p className="details">{guest.emergency_contact}</p>
            </p>
            <button onClick={() => handleClick(guest.guest_id)}>Delete</button>
          </div>
        );
      })}
      <form className="groupform">
        <div class="groupform1">
          <h1>First Name</h1>
          <input
            placeholder="First Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="groupform1">
          <h1>Email</h1>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="groupform1">
          <h1>Phone Number</h1>
          <input
            placeholder="Phone Number"
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className="groupform1">
          <h1>Emgergency Contact</h1>
          <input
            placeholder="emergency contact"
            type="text"
            value={emergencyContact}
            onChange={(e) => {
              setEmergencyContact(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="button">
        <button
          class="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </>
  );
}
