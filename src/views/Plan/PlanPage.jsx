import React, { useEffect, useState } from 'react';
import Budget from './Budget';
import Chat from './Chat';
import Dates from './Dates';
import Entertainment from './Entertainment';
import FlightStatus from './FlightStatus';
import Group from './Group';
import Lodging from './Lodging';
import TripLocation from './TripLocation';
import './PlanPage.css';
import { getTripsById } from '../../services/params';
import { useParams } from 'react-router-dom';

//renders trip.js

export default function PlanPage() {
  const [tripId, setTripId] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTripsById(id);
      setTripId(data);
      setLoading(false);
      console.log('data', data);
    };
    fetchData();
  }, [id]);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      Planning Page
      <div className="planningBody">
        <TripLocation />
        <Dates />
        <Group />
        <FlightStatus />
        <Entertainment />
        <Lodging />
        <Budget />
        <Chat />
      </div>
    </div>
  );
}
