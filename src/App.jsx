import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; /* Global CSS */
// import styles from './App.module.css'; /* CSS Modules */
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TripDetails from './components/TripDetails/TripDetails';
import AboutUs from './views/About Us/AboutUs';
import Login from './views/Auth/Login';
import Landing from './views/LandingPage/Landing';
import PlanPage from './views/Plan/PlanPage';
// import Trips from './views/Trips/Trips';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            {/* <Landing /> */}
            <Login />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>

          {/* <Route path="/login"> */}
          <Route path="/landing">
            {/* <Login /> */}
            <Landing />
          </Route>

          <Route path="/register">
            <Login isSigningUp />
          </Route>
          <Route path="/trips">
            <TripDetails />
          </Route>
          <Route path="/plan">
            <PlanPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
