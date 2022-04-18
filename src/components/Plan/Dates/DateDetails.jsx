import React from 'react';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import './dateInfo.css';

export default function DateDetails() {
  return (
    <div>
      DateDetails
      <ReactEmbeddedGoogleCalendar
        // --- Need to turn this into creating a calendar
        // --- How to have others access this?
        publicUrl="https://calendar.google.com/calendar/embed?src=u23uboje4s9l1il5137s0efng8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        width="600px"
        height="300px"
      />
    </div>
  );
}
