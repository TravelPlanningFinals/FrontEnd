import { useContext, createContext, useState } from 'react';

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [guestEntry, setguestEntry] = useState([]);
  const [trips, setTrips] = useState([]);
  const contextValue = { guestEntry, setguestEntry, trips, setTrips };
  return (
    <TripContext.Provider value={contextValue}>{children}</TripContext.Provider>
  );
};

const useTrips = () => {
  const context = useContext(TripContext);

  if (context === undefined) {
    throw new Error('has to be within an TripContext Provider');
  }
  return context;
};

export { TripProvider, useTrips };
