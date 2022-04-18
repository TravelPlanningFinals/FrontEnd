import React from 'react';
import { useUser } from '../../../context/UserProvider';
import './group.css';

export default function GroupDetails() {
  // --- Add user context ---
  // const { user } = useUser();
  // const flight from back end

  // Create and Edit button
  // Convert inputs to text
  // Check notes on Kanban for how to add users (gabe)
  return (
    <div>
      <div class="groupCard">
        <h1>username from context</h1>
        <div class="groupInputs">
          {/* Turn these into H2s, with an edit button */}
          <h1>First Names</h1>
          {/* --- 1st Person flight info --- */}
          <input placeholder="First Name" />
          {/* --- 2nd Person flight info --- */}
          <input placeholder="First Name" />
          {/* --- 3rd Person flight info --- */}
          <input placeholder="First Name" />
          {/* --- 4th Person flight info --- */}
          <input placeholder="First Name" />
        </div>
        <div class="emailInputs">
          <h1>Emails</h1>
          {/* --- 1st person Email --- */}
          <input placeholder="Email Input"></input>
          {/* --- 2nd person Email --- */}
          <input placeholder="Email Input"></input>
          {/* --- 3rd person Email --- */}
          <input placeholder="Email Input"></input>
          {/* --- 4th person Email --- */}
          <input placeholder="Email Input"></input>
        </div>
        <div class="emergencyContacts">
          <h1>Emergency Contact</h1>
          {/* --- 1st person emrgency contact --- */}
          <input placeholder="Emergency Contact" />
          {/* --- 2nd person emrgency contact --- */}
          <input placeholder="Emergency Contact" />
          {/* --- 3rd person emrgency contact --- */}
          <input placeholder="Emergency Contact" />
          {/* --- 4th person emrgency contact --- */}
          <input placeholder="Emergency Contact" />
        </div>
        <div class="phoneInputs">
          <h1>Phone Number</h1>
          {/* --- 1st person emrgency phone --- */}
          <input placeholder="phone number" />
          {/* --- 2nd person emrgency phone --- */}
          <input placeholder="phone number" />
          {/* --- 3rd person emrgency phone --- */}
          <input placeholder="phone number" />
          {/* --- 4th person emrgency phone --- */}
          <input placeholder="phone number" />
        </div>
      </div>
    </div>
  );
}
