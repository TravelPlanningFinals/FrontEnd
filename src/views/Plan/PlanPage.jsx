import React from 'react';
import Budget from './Budget';
import Chat from './Chat';
import Dates from './Dates';
import Entertainment from './Entertainment';
import FlightStatus from './FlightStatus';
import Group from './Group';
import Lodging from './Lodging';
import TripLocation from './TripLocation';

//renders trip.js

export default function PlanPage() {
  return (
    <div>
      Planning Page
      <TripLocation />
      <Dates />
      <Group />
      <FlightStatus />
      <Entertainment />
      <Lodging />
      <Budget />
      <Chat />
    </div>
  );
}
