import React from 'react';
import { Link } from 'react-router-dom';
import AuthLogin from '../../components/Auth/AuthLogin';

export default function Login() {
  return (
    <div>
      <AuthLogin />
      <p>this page is Login.js in views/auth</p>
      {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link to="/register">Sign Up</Link>
      </button>
      <br></br> */}
      {/*this button above can be deleted, seeing as we are only logging in with GITHUb, and will not need a sign up function */}
      <button
        /*onClick={app.use('/api/v1/github', require('./controllers/github'))}*/
        class="bg-transparent hover:bg-pink-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        {/* <a href={'https://travelapp70.herokuapp.com/api/v1/github/login'}> */}
        {/* !!!!!this link above auto deploys MAIN branch. We need to activate this one, and disable the one below for presentation !!!!!*/}

        <a href={'http://localhost:7890/api/v1/github/login'}>
          {' '}
          {/* !!!! this is dev link!!!!! */}
          Sign in with Github
        </a>
      </button>
    </div>
  );
}
