import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin Page</h1>
      <div style={linkContainerStyle}>
        <Link to="/Services-Admin" style={linkStyle}>
          Services Admin
        </Link>
        <Link to="/Booking-Admin" style={linkStyle}>
          Bookings Admin
        </Link>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',

};

const headerStyle = {
  fontSize: '28px',
  marginBottom: '20px',
};

const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '20px',
  padding: '10px',
  margin: '5px',
  backgroundColor: '#FFD530',
  color: '#333333',
  borderRadius: '5px',
  width: '200px',
  textAlign: 'center',
  transition: 'background 0.3s ease',
};

// Define :hover pseudo-class here
linkStyle[':hover'] = {
  backgroundColor: '#FFC000',
};