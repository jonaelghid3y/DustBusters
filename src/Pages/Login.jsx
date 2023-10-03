import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Button } from '../Components/Button';
import { motion, AnimatePresence } from 'framer-motion'

function Login() {

    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <StyledDiv>
            <StyledReviewModal>
            <AnimatePresence mode='wait'>
                
                {isRegistering ? (
                   <motion.div
                   key="registerForm"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
               >
                        <StyledFormHeadline>
                            Register
                        </StyledFormHeadline>
                        <StyledForm>
                            <StyledFormDivs>
                                <StyledLabel> Username:</StyledLabel>
                                <StyledInput type="text" name='username' />
                            </StyledFormDivs>
                            <StyledFormDivs>
                                <StyledLabel> Password:</StyledLabel>
                                <StyledInput type="password" name='password' />
                            </StyledFormDivs>
                            <StyledP>Already have an account? <Link onClick={toggleForm}>Sign in</Link></StyledP>
                            <Button primary size="small" label="Register" />
                        </StyledForm>
                        </motion.div>
                ) : (
                    <motion.div
                    key="loginForm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                        <StyledFormHeadline>
                            Sign in
                        </StyledFormHeadline>
                        <StyledForm>
                            <StyledFormDivs>
                                <StyledLabel> Username:</StyledLabel>
                                <StyledInput type="text" name='username' />
                            </StyledFormDivs>
                            <StyledFormDivs>
                                <StyledLabel> Password:</StyledLabel>
                                <StyledInput type="password" name='password' />
                            </StyledFormDivs>
                            <StyledP>Don't have an account? <Link onClick={toggleForm}>Register</Link></StyledP>
                            <Button primary size="small" label="Log in" />
                        </StyledForm>
                        </motion.div>
                )}
                </AnimatePresence>
            </StyledReviewModal>

        </StyledDiv>
    )
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
  
`
const StyledReviewModal = styled(motion.div)`

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
`
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black
  width: 80%;
  height: 80%;
  gap: 25px;
  
`
const StyledFormHeadline = styled.h3`

font-size: 30px;
margin-bottom: 20px;
`

const StyledFormDivs = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`
const StyledLabel = styled.label`

`
const StyledInput = styled.input`
font-size: 16.5px;
width: 20vw;
height: 5vh;
@media (max-width: 768px) {

  width: 60vw;
  
 }

`
const StyledP = styled.h3`
font-size:15px;
font-weight: normal;
text-align: center;
`

export default Login