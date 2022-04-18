import { createContext, useContext, useEffect, useState } from 'react';
import fetchUser from '../services/user';
import { getCurrentUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetchUser()
    //   .then((fetchedUser) => {
    //     setUser(fetchedUser);
    //   })
    //   .catch((error) => {
    //     throw new Error(`Error: ${error}`);
    //   });
    getCurrentUser()
      .then((user) => setUser(user))
      .finally(() => setLoading(false));
  }, []);

  const contextValue = { user, loading };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext Provider');
  }
  return context;
};
export { UserProvider, useUser };
