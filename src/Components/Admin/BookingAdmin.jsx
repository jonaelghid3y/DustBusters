import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdEdit } from 'react-icons/md';

function BookingAdmin() {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: '',
    date: '',
    service: '',
  });
  const [editingBookingId, setEditingBookingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://api-s5hih6nmta-uc.a.run.app/booking");
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({
      ...newBooking,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingBookingId) {

        await axios.put(`https://api-s5hih6nmta-uc.a.run.app/booking/${editingBookingId}`, newBooking);
        setEditingBookingId(null);
      } else {

        await axios.post("https://api-s5hih6nmta-uc.a.run.app/booking", newBooking);
      }

      setNewBooking({
        name: '',
        date: '',
        service: '',
      });

      fetchBookings();
    } catch (error) {
      console.error('Error creating/updating booking:', error);
    }
  };

  const handleEdit = (id) => {
    const bookingToEdit = bookings.find((booking) => booking.id === id);
    if (bookingToEdit) {
      setNewBooking({
        name: bookingToEdit.name,
        date: bookingToEdit.date,
        service: bookingToEdit.service,
      });
      setEditingBookingId(id);
    }
  };

  const handleCancelEdit = () => {
    setNewBooking({
      name: '',
      date: '',
      service: '',
    });
    setEditingBookingId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-s5hih6nmta-uc.a.run.app/booking/${id}`);
      fetchBookings();
    } catch (error) {
      console.error(`Error deleting booking ${id}:`, error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>List of Bookings</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="name">Customer:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newBooking.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={newBooking.date}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>

        <div>
          {editingBookingId ? (
            <div>
              <button type="submit" style={submitButtonStyle}>
                Update booking
              </button>
              <button onClick={handleCancelEdit} style={cancelButtonStyle}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="submit" style={submitButtonStyle}>
              Add new booking
            </button>
          )}
        </div>
      </form>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Edit</th>
            <th style={thStyle}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={tableCellStyle}>{booking.name}</td>
              <td style={tableCellStyle}>{booking.date}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEdit(booking.id)} style={iconButtonStyle}>
                  <MdEdit />
                </button>
              </td>
              <td style={tableCellStyle}>
                <button onClick={() => handleDelete(booking.id)} style={iconButtonStyle}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const containerStyle = {
  padding: "20px",
  paddingTop: "40px",
  maxWidth: "800px",
  margin: "0 auto",
  fontFamily: 'Poppins',
  textAlign: "center",
  color: "#333333",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",

};

const inputStyle = {
  width: "30%",
  padding: "10px",
  marginBottom: "10px",
  margin: "5px",
};

const submitButtonStyle = {
  padding: "10px",
  background: "#FFD530",
  color: "#333333",
  border: "none",
  borderRadius: "5px",
  display: "block",
  width: "200px",
  fontFamily: 'Poppins',
};

const cancelButtonStyle = {
  padding: "10px",
  background: "#FFD530",
  color: "#333333",
  border: "none",
  borderRadius: "5px",
  display: "block",
  width: "40%",
  fontFamily: 'Poppins',
  marginTop: "5px",
};

const tableStyle = {
  width: "80%",
  borderCollapse: "collapse",
  padding: "5px",
  margin: "20px",
};

const thStyle = {
  backgroundColor: "#FFD530",
  color: "#333333",
  padding: "10px",
  textAlign: "left",
  margin: "10px",
};

const tableCellStyle = {
  padding: "10px",
  color: 'white',
  marginBottom: '10px',
};

const iconButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',

};

const evenRowStyle = {
  backgroundColor: "gray",
};

const oddRowStyle = {
  backgroundColor: "black",
};

export default BookingAdmin;