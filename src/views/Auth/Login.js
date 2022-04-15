import React from 'react';
import AuthLogin from '../../components/Auth/AuthLogin';
import './Login.css';

export default function Login() {
  return (
    <div className="login">
      <AuthLogin />
      <h2>Sign in with Github OAuth</h2>
      <button class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-#a2e3c4-500 hover:border-transparent rounded">
        {/* <a href={'https://travelapp70.herokuapp.com/api/v1/github/login'}> */}
        {/* !!!!!this link above auto deploys MAIN branch. We need to activate this one, and disable the one below for presentation !!!!!*/}

        <a href={'http://localhost:7890/api/v1/github/login'}>
          {' '}
          {/* !!!! this is dev link!!!!! */}
          Sign in
        </a>
      </button>
    </div>
  );
}
