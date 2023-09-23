import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    return (
        <StyledNav>
            <StyledLoggoDiv>
                <StyledLogoText1>
                    Dust
                </StyledLogoText1>
                <StyledLogoText2>
                    Busters
                </StyledLogoText2>
                
            </StyledLoggoDiv>

            <StyledLänkcontainer>
                <Link to="/"className="länkar">Hem</Link>
                <Link to="/Bookings"className="länkar">Boka</Link>
                <Link to="/Services"className="länkar">Tjänster</Link>
                <Link to="/Aboutus"className="länkar" id="länkknapp">Login</Link>
            </StyledLänkcontainer>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
height: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
font-weight: bold;
font-family: 'Poppins', sans-serif;
padding: 0 30px;
background-color: #232323;


`
const StyledLänkcontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 25px;

.länkar {
    text-decoration: none; // Remove underline
    color: white; // Or any color you prefer
    font-size: 18px; // Adjust as needed
    transition: color 0.3s ease; // Optional for smooth color transition
  }

  .länkar:hover {
    color: #FFD530; // Color when hovered
  }

  .länkar:active {
    color: #e5e5e5; // Color when active
  }
  #länkknapp{
    background-color: #FFD530;
    border-radius: 5px;
    padding: 2px 7px;
    color: black;
  }
`
const StyledLoggoDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const StyledLogoText1 = styled.h2`
font-size:26px;
color: white;
`
const StyledLogoText2 = styled.h2`
font-size:26px;
color: #FFD530;

`

export default Nav