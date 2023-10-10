import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../../Components/context/Authcontext';
import LoginForm from '../../../Components/LoginForm';

function Login() {

  const { handleLogin, handleRegister,loginMessage } = useContext(AuthContext);
  const [isRegistering, setIsRegistering] = useState(false);
  const handleRegisterClick = async (username, password) => {
    const success = await handleRegister(username, password);
    if (success) {
      setTimeout(() => {
        setIsRegistering(false);
      }, 2000);
    }
  };
  return (
    <StyledDiv>
      {loginMessage}
      <StyledLoginModal>
        <AnimatePresence mode='wait'>
          {isRegistering ? (
            <LoginForm
              title="Register"
              label="Register"
              key="registerform"
              text="Already have an account? "
              toggleLink="Sign in"
              isRegistering={isRegistering}
              setIsRegistering={setIsRegistering}
              handleClick={handleRegisterClick}
            />
          ) : (
            <LoginForm
              title="Log in"
              label="Log in"
              key="loginform"
              text="Don't have an account? "
              toggleLink="Sign up"
              isRegistering={isRegistering}
              setIsRegistering={setIsRegistering}
              handleClick={handleLogin}
            />
          )}
        </AnimatePresence>
      </StyledLoginModal>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
`;
const StyledLoginModal = styled(motion.div)`

border: 1px solid lightgray;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 450px;
min-height: 550px;
padding: 25px;
border-radius: 20px;
padding: 25px;
gap: 20px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
@media (max-width: 768px) {

  width: 80%;
  min-height: 500px;
  
 }
`;

export default Login;