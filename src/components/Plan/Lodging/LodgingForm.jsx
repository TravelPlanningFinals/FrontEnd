import React, { useState } from 'react';
import { addLodging } from '../../../services/lodging';
import { useTrips } from '../../../hooks/useTrips';

export default function LodgingForm() {
  const { trips, loading } = useTrips();
  const tripsId = trips.id;
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

  const handleSubmit = async (e) => {
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
  };
  if (loading) return <p>loading</p>;
  return (
    <>
      <h1>Lodging</h1>
      {trips.lodging.map((lodging) => {
        return (
          <div className="lodging-list" key={lodging.id}>
            <p className="name">Name of Stay: {lodging.name_of_place}</p>
            <p className="contact">Contact Info: {lodging.contact_info}</p>
            <p className="price">Price: {lodging.price_per_night}</p>
            <p className="check-in">Check In: {lodging.check_in}</p>
            <p className="check-out">Check Out: {lodging.check_out}</p>
            <p className="address1">Address 1: {lodging.address_1}</p>
            <p className="address2">Address 2: {lodging.address_2}</p>
            <p className="city">City: {lodging.city}</p>
            <p className="state">State: {lodging.state}</p>
            <p className="zip">Zip: {lodging.zip}</p>
          </div>
        );
      })}
      <form>
        <div class="lodgingCard">
          <div class="lodgingInputs">
            <h1>Name</h1>
            <input
              placeholder="Name"
              type="text"
              value={nameOfPlace}
              onChange={(e) => {
                setNameOfPlace(e.target.value);
              }}
            />
          </div>
          <div className="contact">
            <h1>Contact</h1>
            <input
              placeholder="Contact"
              type="text"
              value={contactInfo}
              onChange={(e) => {
                setContactInfo(e.target.value);
              }}
            />
          </div>
          <div className="price">
            <h1>Price</h1>
            <input
              placeholder="Price"
              type="text"
              value={pricePerNight}
              onChange={(e) => {
                setPricePerNight(e.target.value);
              }}
            />
          </div>
          <div className="check-in">
            <h1>Check In</h1>
            <input
              placeholder="check in"
              type="text"
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
            />
          </div>
          <div className="check-out">
            <h1>Check Out</h1>
            <input
              placeholder="check out"
              type="text"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
            />
          </div>
          <div className="address1">
            <h1>Address1</h1>
            <input
              placeholder="Address1"
              type="text"
              value={address1}
              onChange={(e) => {
                setAddress1(e.target.value);
              }}
            />
          </div>
          <div className="address2">
            <h1>Address2</h1>
            <input
              placeholder="Address2"
              type="text"
              value={address2}
              onChange={(e) => {
                setAddress2(e.target.value);
              }}
            />
          </div>
          <div className="city">
            <h1>City</h1>
            <input
              placeholder="city"
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="state">
            <h1>State</h1>
            <input
              placeholder="state"
              type="text"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
          <div className="zip">
            <h1>Zip</h1>
            <input
              placeholder="zip"
              type="text"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
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
// export default function LodgingForm({
//   nameOfPlace,
//   setNameOfPlace,
//   contactInfo,
//   setContactInfo,
//   pricePerNight,
//   setPricePerNight,
//   checkIn,
//   setCheckIn,
//   checkOut,
//   setCheckOut,
//   address1,
//   setAddress1,
//   address2,
//   setAddress2,
//   city,
//   setCity,
//   state,
//   setState,
//   zip,
//   setZip,
//   handleSubmit,
// }) {
//   return (
//     <div>
//       <form>
//         <div>
//           <h1>Name of the hotel/Airbnb:</h1>
//           {/* --- Back end of name_of_place in loding table --- */}
//           <input placeholder="name of hotel/Airbnb" />
//         </div>
//         <div>
//           {/* --- need to change location in loding table to below --- */}
//           <h1>Address:</h1>
//           <input placeholder="address 1" />
//           <input placeholder="address 2" />
//           <input placeholder="city" />
//           <input placeholder="state" />
//           <input placeholder="zip" />
//         </div>
//         <div>
//           <h1>Phone:</h1>
//           {/* --- to contact_info in backend --- */}
//           <input placeholder="Phone Number" />
//         </div>
//         <div>
//           {/* --- to price_per_night in back end --- */}
//           <h1>Price per night</h1>
//           $<input placeholder="Price per night" type="number" />
//         </div>
//         <div>
//           {/* --- to check_in and check_out in loding --- */}
//           {/* --- Change to date inputs --- */}
//           <h1>Check in date</h1>
//           <input placeholder="Check in Date" />
//           <h1>Check out date</h1>
//           <input placeholder="Check Out Date" />
//         </div>
//         <button>Submit Info</button>
//       </form>
//     </div>
//   );
// }
