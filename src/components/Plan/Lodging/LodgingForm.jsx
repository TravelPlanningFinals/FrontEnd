import React from 'react';
export default function LodgingForm({
  nameOfPlace,
  setNameOfPlace,
  contactInfo,
  setContactInfo,
  pricePerNight,
  setPricePerNight,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  address1,
  setAddress1,
  address2,
  setAddress2,
  city,
  setCity,
  state,
  setState,
  zip,
  setZip,
  handleSubmit,
}) {
  return (
    <div>
      <form>
        <div>
          <h1>Name of the hotel/Airbnb:</h1>
          {/* --- Back end of name_of_place in loding table --- */}
          <input placeholder="name of hotel/Airbnb" />
        </div>
        <div>
          {/* --- need to change location in loding table to below --- */}
          <h1>Address:</h1>
          <input placeholder="address 1" />
          <input placeholder="address 2" />
          <input placeholder="city" />
          <input placeholder="state" />
          <input placeholder="zip" />
        </div>
        <div>
          <h1>Phone:</h1>
          {/* --- to contact_info in backend --- */}
          <input placeholder="Phone Number" />
        </div>
        <div>
          {/* --- to price_per_night in back end --- */}
          <h1>Price per night</h1>
          $<input placeholder="Price per night" type="number" />
        </div>
        <div>
          {/* --- to check_in and check_out in loding --- */}
          {/* --- Change to date inputs --- */}
          <h1>Check in date</h1>
          <input placeholder="Check in Date" />
          <h1>Check out date</h1>
          <input placeholder="Check Out Date" />
        </div>
        <button>Submit Info</button>
      </form>
    </div>
  );
}
