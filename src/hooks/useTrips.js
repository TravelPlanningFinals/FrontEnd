import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTripsById } from '../services/trips';

export function useTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTripsById(id);
      setTrips(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { trips, loading, setTrips, setLoading };
}
