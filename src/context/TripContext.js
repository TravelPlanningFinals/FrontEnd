import { useContext, createContext, useState } from 'react';

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const contextValue = { trips, setTrips };
  return (
    <TripProvider.Provider value={contextValue}>
      {children}
    </TripProvider.Provider>
  );
};

const useTrips = () => {
  const context = useContext(TripContext);

  if (context === undefined) {
    throw new Error('has to be within an TripConext Provider');
  }
  return context;
};

export { TripProvider, useTrips };
