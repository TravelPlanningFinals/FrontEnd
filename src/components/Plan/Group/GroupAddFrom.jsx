import React, { useState, Component } from 'react';
import { addGuests } from '../../../services/guests';
import { useTrips } from '../../../hooks/useTrips';
import EasyEdit from 'react-easy-edit';

export default function GroupAddForm() {
  const { trips, loading } = useTrips();
  const tripsId = trips.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const save = (value) => {
    alert(value);
  };
  const cancel = () => {
    alert('Cancelled');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addGuests(name, email, phoneNumber, emergencyContact, tripsId);
    window.location.reload('/');
  };
  if (loading) return <p>loading</p>;
  return (
    <>
      <h1>Your Group!</h1>
      {trips.guests.map((guest) => {
        console.log(trips);
        return (
          <div className="guest-list" key={guest.id}>
            <p className="name">Name: {guest.name}</p>
            <p className="name">Email: {guest.email}</p>
            <p className="name">Phone Number: {guest.phone_number}</p>
            <p className="name">Emergency Contact: {guest.emergency_contact}</p>
          </div>
        );
      })}
      <form>
        <div class="groupCard">
          <div class="groupInputs">
            {/* Turn these into H2s, with an edit button */}
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
          <div className="email">
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
          <div className="phone">
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
          <div className="emergency">
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
        </div>
        <button
          class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-5"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </>
  );
}
