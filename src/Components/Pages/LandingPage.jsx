import React from 'react'
import styled from 'styled-components'

function LandingPage() {
  return (
    <StyledDiv>
      <StyledLandingImg>
        <StyledHeadline>
          Who you gonna call?
        </StyledHeadline>
        <StyledButton>
          Book now!
        </StyledButton>

      </StyledLandingImg>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  width: 100%;
  min-height: 100vh;
 
`
const StyledLandingImg = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-image: url('/public/imgs/pexels-tima-miroshnichenko-6195125.jpg');
  background-size: cover;
  background-position: bottom;  
  font-family: 'Poppins', sans-serif;
`
const StyledHeadline = styled.h1`
margin-top: 250px;
font-size:60px;
color: white;
`
const StyledButton = styled.button`
margin-top: 50px;
border: none;
background-color: #FFD530;
font-family: 'Poppins', sans-serif;
font-size: 25px;
font-weight: bold;
border-radius: 20px;
width: 180px;
height: 50px;

`

export default LandingPage