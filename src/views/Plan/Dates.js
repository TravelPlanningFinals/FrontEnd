import React from 'react';
import calendar from '../../assets/images/calendar.png';
import CountDown from '../../utils/countdown';
import { useTrips } from '../../hooks/useTrips';
import '../../components/Plan/Dates/dateInfo.css';

export default function Dates() {
  const { trips } = useTrips();
  const count = CountDown(trips.startDate);

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
