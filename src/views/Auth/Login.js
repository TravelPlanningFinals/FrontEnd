import React from 'react';
import logo from '../../assets/images/logo.png';
import './Login.css';

export default function Login() {
  return (
    <>
      <img className="logo" src={logo} />
      <div className="login">
        <h2 className="signin-message">Sign in with Github</h2>

        <a href={`${process.env.HEROKU_URL}/api/v1/github/login`}>
          <button class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded m-6">
            Sign in
          </button>
        </a>
      </div>
    </>
  );
}
