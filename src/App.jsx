import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import Header from './components/header/header';
import Login from './views/Auth/Login';
import Landing from './views/LandingPage/Landing';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Login isSigningUp />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}
