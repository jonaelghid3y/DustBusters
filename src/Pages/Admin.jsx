import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>

      <h1>Admin page</h1>
      <Link to="/service-admin">Go to Service Admin</Link>
      <Link to="/booking-admin">Go to Booking Admin</Link>
    </div >
  )
}
