import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Components/context/Authcontext';
import Login from './Login';
import Admin from './Admin';
import Profile from './Profile';

export default function AuthNavigator() {
  const { accessToken, admin } = useContext(AuthContext);

  return (
    <>
      {
        accessToken && admin
          ? <Admin />
          : accessToken
            ? <Profile />
            : <Login />
      }
    </>
  );
}