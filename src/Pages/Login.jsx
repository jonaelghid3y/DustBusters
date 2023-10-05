import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from '../Components/LoginForm';

function Login() {

  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <StyledDiv>
      <StyledLoginModal>
        <AnimatePresence mode='wait'>
          {isRegistering ? (
            <LoginForm
              title="Register"
              label="Register"
              key="registerform"
              text="Already have an account? "
              isRegistering={isRegistering}
              setIsRegistering={setIsRegistering} />
          ) : (
            <LoginForm
              title="Log in"
              label="Log in"
              key="loginform"
              text="Don't have an account? "
              isRegistering={isRegistering}
              setIsRegistering={setIsRegistering}
            />
          )}
        </AnimatePresence>
      </StyledLoginModal>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  border: 1px solid black;
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
width: 30%;
min-height: 550px;
padding: 25px;
border-radius: 20px;
padding: 25px;
gap: 20px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
@media (max-width: 768px) {

  width: 80%;
  min-height: 600px;
  
 }
`;

export default Login;