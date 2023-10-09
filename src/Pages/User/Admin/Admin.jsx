import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>

      <h1>Admin page</h1>
      <Link to="/Services-Admin">Services Admin</Link>
      <br></br>
      <Link to="/Booking-Admin"> Bookings Admin</Link>
    </div >
  );
}
