import React from 'react';
import Dates from './Dates';
import Entertainment from './Entertainment';
import FlightStatus from './FlightStatus';
import Group from './Group';
import Lodging from './Lodging';
import TripLocation from './TripLocation';
import './PlanPage.css';

export default function PlanPage() {
  return (
    <>
      <h1 className="planpage">Planning Page</h1>
      <div>
        <div className="planningBody">
          <TripLocation />
          <Dates />
          <Group />
          <FlightStatus />
          <Entertainment />
          <Lodging />
        </div>
      </div>
    </>
  );
}
