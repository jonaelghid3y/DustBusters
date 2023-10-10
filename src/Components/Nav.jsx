import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Logo } from './Logo';
import { Button } from './Button';
import { useContext } from 'react';
import { AuthContext } from './context/Authcontext';

function Nav() {
  const [isopen, setIsopen] = useState(false);
  const location = useLocation();
  const { handleLogout, accessToken } = useContext(AuthContext);

  return (
    <>
      {
        accessToken !== null
          ?
          < StyledNav >
            <Link style={{ textDecoration: 'none' }} to="/">
              <Logo primary />
            </Link>
            <StyledHamburgerIcon onClick={() => setIsopen(!isopen)} size={30} />
            <StyledLänkcontainer $isopen={isopen}>

              {/* <StyledLink to="/" className={`links ${location.pathname === "/" ? "active" : ""}`}>Home</StyledLink>
              <StyledLink to="/Bookings" className={`links ${location.pathname === "/Bookings" ? "active" : ""}`}>Book</StyledLink>
              <StyledLink to="/Services" className={`links ${location.pathname === "/Services" ? "active" : ""}`}>Services</StyledLink>
              <StyledLink to="/Aboutus" className={`links ${location.pathname === "/Aboutus" ? "active" : ""}`}>About us</StyledLink> */}

              <Link to="/login" id="linkButton"><Button secondary size="small" onClick={handleLogout} label="Log out" /></Link>
            </StyledLänkcontainer>
          </StyledNav >

          :

          < StyledNav >
            <Link style={{ textDecoration: 'none' }} to="/">
              <Logo primary />
            </Link>
            <StyledHamburgerIcon onClick={() => setIsopen(!isopen)} size={30} />
            <StyledLänkcontainer $isopen={isopen}>

              <StyledLink to="/" className={`links ${location.pathname === "/" ? "active" : ""}`}>Home</StyledLink>
              <StyledLink to="/Bookings" className={`links ${location.pathname === "/Bookings" ? "active" : ""}`}>Book</StyledLink>
              <StyledLink to="/Services" className={`links ${location.pathname === "/Services" ? "active" : ""}`}>Services</StyledLink>
              <StyledLink to="/Aboutus" className={`links ${location.pathname === "/Aboutus" ? "active" : ""}`}>About us</StyledLink>

              <Link to="/login" id="linkButton"><Button primary size="small" label="Log in" /></Link>
            </StyledLänkcontainer>
          </StyledNav >

      }
    </>
  );
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
`;

const StyledLänkcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px) {
        position: absolute;
        top: 60px;
        right: 0;
        padding: 15px;
        background-color: #232323;
        width: 30%;
        flex-direction: column;
        display: ${props => (props.$isopen ? 'flex' : 'none')};
    }

    .links {
        text-decoration: none; 
        color: white; 
        font-size: 18px; 
        transition: color 0.3s ease; 
    }

    .links:hover {
        color: #FFD530; 
    }

    .links:active {
        color: #e5e5e5; 
    }
  
    /* #linkButton {
        background-color: #FFD530;
        border-radius: 5px;
        padding: 2px 7px;
        color: black;
        text-decoration: none; 
        font-size: 18px; 
        transition: color 0.3s ease;
    } */
`;
const StyledLink = styled(NavLink)`
    &.active {
        color: #FFD530; 
    }
`;

const StyledHamburgerIcon = styled(FaBars)`
    cursor: pointer;
    color: #FFD530;
    
    @media (min-width: 769px) {
        display: none;
    }
`;

export default Nav;
