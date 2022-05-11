import { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/users';

export function useUser() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentUser();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { user, setUser, loading, setLoading };
}
