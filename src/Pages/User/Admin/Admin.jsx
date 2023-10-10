import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Admin() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin Page</h1>
      <div style={linkContainerStyle}>
        < motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} > <Link to="/Services-Admin" style={linkStyle}>
          Services Admin
        </Link></motion.div>

        < motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} ><Link to="/Booking-Admin" style={linkStyle}>
          Booking Admin
        </Link></motion.div>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: "100%",
  height: '450px',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Poppins',
  margin: '10px',
};

const headerStyle = {
  fontSize: '30px',
  marginBottom: '30px',
  fontFamily: 'Poppins',
  margin: '10px',
};

const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
  paddingTop: '50px',
  fontSize: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '20px',
  padding: '13px',
  margin: '5px',
  backgroundColor: '#FFD530',
  color: '#333333',
  borderRadius: '15px',
  textAlign: 'center',
  transition: 'background 0.3s ease',
  fontFamily: 'Poppins',
};

linkStyle[':hover'] = {
  backgroundColor: '#FFC000',
};