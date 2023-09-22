import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    return (
        <StyledNav>
            <StyledLänkcontainer>
                <Link to="/"className="länkar">Hem</Link>
                <Link to="/Bookings"className="länkar">Boka</Link>
                <Link to="/Services"className="länkar">Tjänster</Link>
                <Link to="/Aboutus"className="länkar">About us</Link>
            </StyledLänkcontainer>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
height: 100%;

 display: flex;
 align-items: center;
 justify-content: center;
  border: 1px solid black;
`
const StyledLänkcontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 15px;

  border: 1px solid black;
`

export default Nav