import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>

      <h1>Admin page</h1>
      <Link to="/Services-Admin">Go to Service Admin</Link>
      <Link to="/Booking-Admin">Go to Booking Admin</Link>
    </div >
  );
}
