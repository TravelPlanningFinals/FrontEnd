import React from 'react';
import DateDetails from '../../components/Plan/Dates/DateDetails';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

export default function Dates() {
  return (
    <div>
      Date Page
      <ReactEmbeddedGoogleCalendar
        publicUrl="https://calendar.google.com/calendar/embed?src=u23uboje4s9l1il5137s0efng8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        width="600px"
        height="300px"
      />
      <DateDetails />
    </div>
  );
}
