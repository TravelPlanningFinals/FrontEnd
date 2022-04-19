import React from 'react';

export default function GroupAddForm({
  name1,
  setName1,
  name2,
  setName2,
  name3,
  setName3,
  name4,
  setName4,
  email1,
  setEmail1,
  email2,
  setEmail2,
  email3,
  setEmail3,
  email4,
  setEmail4,
  contact1,
  setContact1,
  contact2,
  setContact2,
  contact3,
  setContact3,
  contact4,
  setContact4,
  phone1,
  setPhone1,
  phone2,
  setPhone2,
  phone3,
  setPhone3,
  phone4,
  setPhone4,
}) {
  return (
    <div>
      <div class="groupCard">
        <h1>username from context</h1>
        <div class="groupInputs">
          {/* Turn these into H2s, with an edit button */}
          <h1>First Names</h1>
          <input
            placeholder="First Name"
            type="text"
            value={name1}
            onChange={(e) => {
              setName1(e.target.value);
            }}
          />
          <input
            placeholder="First Name"
            type="text"
            value={name2}
            onChange={(e) => {
              setName2(e.target.value);
            }}
          />
          <input
            placeholder="First Name"
            type="text"
            value={name3}
            onChange={(e) => {
              setName3(e.target.value);
            }}
          />
          <input
            placeholder="First Name"
            type="text"
            value={name4}
            onChange={(e) => {
              setName4(e.target.value);
            }}
          />
        </div>
        <div class="emailInputs">
          <h1>Emails</h1>
          <input
            placeholder="Email Input"
            type="text"
            value={email1}
            onChange={(e) => {
              setEmail1(e.target.value);
            }}
          ></input>
          <input
            placeholder="Email Input"
            type="text"
            value={email2}
            onChange={(e) => {
              setEmail2(e.target.value);
            }}
          ></input>
          <input
            placeholder="Email Input"
            type="text"
            value={email3}
            onChange={(e) => {
              setEmail3(e.target.value);
            }}
          ></input>
          <input
            placeholder="Email Input"
            type="text"
            value={email4}
            onChange={(e) => {
              setEmail4(e.target.value);
            }}
          ></input>
        </div>
        <div class="emergencyContacts">
          <h1>Emergency Contact</h1>
          <input
            placeholder="Emergency Contact"
            type="text"
            value={contact1}
            onChange={(e) => {
              setContact1(e.target.value);
            }}
          />
          <input
            placeholder="Emergency Contact"
            type="text"
            value={contact2}
            onChange={(e) => {
              setContact2(e.target.value);
            }}
          />
          <input
            placeholder="Emergency Contact"
            type="text"
            value={contact3}
            onChange={(e) => {
              setContact3(e.target.value);
            }}
          />
          <input
            placeholder="Emergency Contact"
            type="text"
            value={contact4}
            onChange={(e) => {
              setContact4(e.target.value);
            }}
          />
        </div>
        <div class="phoneInputs">
          <h1>Phone Number</h1>
          <input
            placeholder="phone number"
            type="number"
            value={phone1}
            onChange={(e) => {
              setPhone1(e.target.value);
            }}
          />
          <input
            placeholder="phone number"
            type="number"
            value={phone2}
            onChange={(e) => {
              setPhone2(e.target.value);
            }}
          />
          <input
            placeholder="phone number"
            type="number"
            value={phone3}
            onChange={(e) => {
              setPhone3(e.target.value);
            }}
          />
          <input
            placeholder="phone number"
            type="number"
            value={phone4}
            onChange={(e) => {
              setPhone4(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
