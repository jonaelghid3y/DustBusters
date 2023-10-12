import React, { createContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillCheckCircle,AiFillCloseCircle } from 'react-icons/ai';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');

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
        setLoginMessage(<StyledSuccsesMessage>Succses! <AiFillCheckCircle color='#5cb85c' /></StyledSuccsesMessage>);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('admin', data.admin);
        setTimeout(() => {
          setAccessToken(data.accessToken);
          setAdmin(data.admin);
          setLoginMessage('');
        }, 2000);
      } else {
        setLoginMessage(<StyledErrorMessage>Something went wrong!<AiFillCloseCircle color=' #cc0000'/></StyledErrorMessage>);
        setTimeout(() => {
          setLoginMessage('');
          return false;
        }, 2000);
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

      if (data.status === 200) {
        setLoginMessage(<StyledSuccsesMessage>Succses!<AiFillCheckCircle color='#5cb85c' /></StyledSuccsesMessage>);
        setTimeout(() => {
          setLoginMessage('');
        }, 2000);
        return true;
      }
      else {
        setLoginMessage(<StyledErrorMessage>Username is already taken!<AiFillCloseCircle color=' #cc0000'/></StyledErrorMessage>);
        setTimeout(() => {
          setLoginMessage('');
        }, 2000);
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    console.log('handleLogout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('admin');
    setAccessToken(null);
    setAdmin(null);
  };

  const isLoggedIn = async () => {
    console.log('isLoggedIn');
    try {
      const token = localStorage.getItem('accessToken');
      const admin = localStorage.getItem('admin');
      setAccessToken(token);
      setAdmin(admin);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        admin,
        accessToken,
        handleLogout,
        handleLogin,
        handleRegister,
        loginMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const StyledSuccsesMessage = styled.p`

font-size: 16px;
color: #5cb85c;
background-color: white;
display: flex;
border-radius: 5px;
padding: 10px;
align-items: center;
position: absolute;
top: 85vh;
right: 40;
@media (max-width: 768px) {

  top: 80vh;
   
  }
`;
const StyledErrorMessage = styled.p`

font-size: 16px;
color: #cc0000;
background-color: white;
display: flex;
border-radius: 5px;
padding: 10px;
align-items: center;
position: absolute;
top: 85vh;
right: 40;
@media (max-width: 768px) {

 top: 80vh;
  
 }
`;
