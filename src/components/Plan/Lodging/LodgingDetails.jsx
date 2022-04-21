import React, { useState } from 'react';
import { useTrips } from '../../../hooks/useTrips';
import { addLodging, deleteLodging } from '../../../services/lodging';
import { getTripsById } from '../../../services/trips';
import './lodging.css';

export default function LodgingDetails() {
  const [nameOfPlace, setNameOfPlace] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const { trips, loading, setTrips } = useTrips();
  const tripsId = trips.id;

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    await addLodging(
      nameOfPlace,
      contactInfo,
      pricePerNight,
      checkIn,
      checkOut,
      address1,
      address2,
      city,
      state,
      zip,
      tripsId
    );
    const data = await getTripsById(tripsId);
    setTrips(data);
  };

  const handleClick = async (id) => {
    await deleteLodging(id);
    const data = await getTripsById(tripsId);
    setTrips(data);
  };

  if (loading) return <p>loading</p>;

  return (
    <>
      <h1>Lodging Details</h1>
      {trips.lodging.map((lodge) => {
        return (
          <div key={lodge.id}>
            <p>{lodge.name_of_place}</p>
            <p>{lodge.contactInfo}</p>
            <p>{lodge.address1}</p>
            <p>{lodge.address2}</p>
            <p>{lodge.city}</p>
            <p>{lodge.state}</p>
            <p>{lodge.zip}</p>
            <p>Checkin Date:{lodge.checkIn}</p>
            <p>Checkin Date:{lodge.checkOut}</p>
            <p>Price:{lodge.pricePerNight}/Night</p>
            <button onClick={() => handleClick(lodge.lodging_id)}>
              Delete
            </button>
          </div>
        );
      })}
      <form>
        <input
          placeholder="Hotel Name"
          value={nameOfPlace}
          onChange={(e) => {
            setNameOfPlace(e.target.value);
          }}
        />
        <input
          placeholder="Contact Info"
          value={contactInfo}
          onChange={(e) => {
            setContactInfo(e.target.value);
          }}
        />
        <input
          placeholder="Price Per Night"
          value={pricePerNight}
          type="number"
          onChange={(e) => {
            setPricePerNight(e.target.value);
          }}
        />
        <input
          placeholder="Check In Date"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
          }}
        />
        <input
          placeholder="Check Out Date"
          value={checkOut}
          onChange={(e) => {
            setCheckOut(e.target.value);
          }}
        />
        <input
          placeholder="Address 1"
          value={address1}
          onChange={(e) => {
            setAddress1(e.target.value);
          }}
        />
        <input
          placeholder="Address Two"
          value={address2}
          onChange={(e) => {
            setAddress2(e.target.value);
          }}
        />
        <input
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          placeholder="State"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <input
          placeholder="Zipcode"
          value={zip}
          type="number"
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
      </form>
      <button onClick={hanldeSubmit}>Add Hotel Information</button>
    </>
  );
}
