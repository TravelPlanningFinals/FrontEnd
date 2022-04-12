import React from 'react';
import { Link } from 'react-router-dom';
import AuthLogin from '../../components/Auth/AuthLogin';

export default function Login() {
  return (
    <div>
      <AuthLogin />
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/register">Sign Up</Link>
      <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}
