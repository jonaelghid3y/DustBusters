import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import { Button } from '../Components/Button';
import { motion } from 'framer-motion'

function Login() {
    return (
        <StyledDiv>
            <StyledReviewModal>
                <StyledFormHeadline>
                    Sign in
                </StyledFormHeadline>
                <StyledForm >
                    <StyledFormDivs>
                        <StyledLabel> Username:</StyledLabel>
                        <StyledInput type="text" name='name' />
                    </StyledFormDivs>
                    <StyledFormDivs>
                        <StyledLabel> Password:</StyledLabel>
                        <StyledInput type="password" name='name' />
                    </StyledFormDivs>
                    <StyledP>Dont have an acount? <Link>Register</Link></StyledP>
                    <Button primary size="small" label="Log in" />
                    
                </StyledForm>
               
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
  
`
const StyledReviewModal = styled(motion.div)`

border: 1px solid gray;
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