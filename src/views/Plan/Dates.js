import React, { useEffect, useState } from 'react';
import DateDetails from '../../components/Plan/Dates/DateDetails';
import X from '../../assets/images/X.png';
import calendar from '../../assets/images/calendar.png';
import { useParams } from 'react-router-dom';
import { getTripsById } from '../../services/trips';
import CountDown from '../../utils/countdown';
import { useTrips } from '../../hooks/useTrips';

export default function Dates() {
  const { trips } = useTrips();
  const count = CountDown(trips.startDate);

  console.log('tripsClaendar', trips.startDate);

  return (
    <div>
      <div className="dateInfo">
        <h2>Count down until Trip</h2>
        <h1>{count} Days</h1>
        <img src={calendar} class="calendar"></img>
      </div>
    </div>
  );
}
