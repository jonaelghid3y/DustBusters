import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete, MdEdit, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';


function BookingAdmin() {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: '',
    date: '',
    service: '',
  });
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [showAddBooking, setShowAddBooking] = useState(false);

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
      toggleAddBooking();
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
      setShowAddBooking(true);
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

  const toggleAddBooking = () => {
    setShowAddBooking(!showAddBooking);
  };

  return (
    <div style={containerStyle}>
      <h1>List of Bookings</h1>

      {!showAddBooking ? (
        <button onClick={toggleAddBooking} style={addBookingButtonStyle}>
          Add new booking
        </button>

      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="name">Customer:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newBooking.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <Link to="/admin" style={backToAdminButton}>
              <MdArrowBack />
            </Link>
          </div>

          <div style={inputContainerStyle}>
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
            <button type="submit" style={submitButtonStyle}>
              {editingBookingId ? "Update booking" : "Add new booking"}
            </button>
            {editingBookingId && (
              <button onClick={handleCancelEdit} style={cancelButtonStyle}>
                Cancel
              </button>
            )}
          </div>
        </form>
      )}

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={tableCellStyle}>{booking.name}</td>
              <td style={tableCellStyle}>{booking.date}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEdit(booking.id)} style={actionButtonStyle}>
                  <MdEdit />
                </button>
                <button onClick={() => handleDelete(booking.id)} style={actionButtonStyle}>
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

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  padding: "10px",
  background: "#FFD530",
  color: "#333333",
  border: "none",
  borderRadius: "5px",
  width: "100%",
  fontFamily: 'Poppins, sans-serif',
  cursor: "pointer",
  transition: "background 0.3s ease",
};

const cancelButtonStyle = {
  padding: "10px",
  background: "#FFD530",
  color: "#333333",
  border: "none",
  borderRadius: "5px",
  width: "50%",
  fontFamily: 'Poppins, sans-serif',
  marginTop: "5px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const thStyle = {
  backgroundColor: "#FFD530",
  color: "#333333",
  padding: "10px",
  textAlign: "left",
};

const tableCellStyle = {
  padding: "10px",
  color: "white",
};

const actionButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  marginRight: '10px',
  transition: "background 0.3s ease",
};

const evenRowStyle = {
  backgroundColor: "gray",
};

const oddRowStyle = {
  backgroundColor: "black",
};

const addBookingButtonStyle = {
  backgroundColor: '#FFD530',
  color: '#333333',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  width: "200px",
  fontFamily: 'Poppins, sans-serif',
  cursor: "pointer",
  transition: "background 0.3s ease",
};

const backToAdminButton = {
  color: 'black',
  padding: '10px',
  margin: '10px',
  cursor: 'pointer',
};

export default BookingAdmin;