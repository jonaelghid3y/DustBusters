import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [admin, setAdmin] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status === 200) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('Admin', data.admin);
        setAccessToken(data.accessToken);
        setAdmin(data.admin);
        console.log(accessToken);
      } else {
        console.log("Failed to log in");
      }

    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = async (username, password) => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data.status);

      if (data.status === 409) {

        console.log("hej");

      }
      else {

        console.log("hej");

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    console.log('handleLogout');
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  const isLoggedIn = async () => {
    console.log('isLoggedIn');
    try {
      const token = localStorage.getItem('accessToken');
      setAccessToken(token);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
    handleLogout();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        admin,
        accessToken,
        handleLogout,
        handleLogin,
        handleRegister
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
