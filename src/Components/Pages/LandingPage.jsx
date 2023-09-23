import React from 'react'
import styled from 'styled-components'

function LandingPage() {
  return (
    <StyledDiv>
        <StyledLandingImg>
          <StyledHeadline>
            Who you gonna call?
          </StyledHeadline>

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
  align-items: flex-start;
  justify-content: center;
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

export default LandingPage