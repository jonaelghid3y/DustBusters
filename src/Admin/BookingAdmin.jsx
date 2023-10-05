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
            await axios.post("https://api-s5hih6nmta-uc.a.run.app/booking", newBooking);
            setNewBooking({
                name: '',
                date: '',
                service: '',
            });
            fetchBookings();
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://api-s5hih6nmta-uc.a.run.app/booking${id}`);

            fetchBookings();
        } catch (error) {
            console.error(`Error deleting booking ${id}:`, error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1>List of Booking</h1>


            <form onSubmit={handleSubmit}>
                <button type="submit">Add new booking</button>
                <label>Customer:</label>
                <input
                    type="text"
                    name="name"
                    value={newBooking.name}
                    onChange={handleInputChange}
                />
                <label>Date:</label>
                <input
                    type="text"
                    name="date"
                    value={newBooking.date}
                    onChange={handleInputChange}
                />
                <label>Edit:</label>
                <input
                    type="text"
                    name="service"
                    value={newBooking.service}
                    onChange={handleInputChange}
                />

            </form>

            <table style={tableStyle}>

                <thead>
                    <tr>
                        <th style={thStyle}>Cutomer</th>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Edit</th>
                        <th style={thStyle}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ul>
                        {bookings.map((booking) => (
                            <li key={booking.id}>
                                {booking.name} - {booking.date} - {booking.service}
                                <button onClick={() => this.handleDelete(booking.id)}>
                                    <MdDelete />
                                </button>
                                <button onClick={() => this.handleEdit(booking.id)}>
                                    <MdEdit />
                                </button>
                            </li>
                        ))}
                    </ul>
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
};

const tableStyle = {
    width: "80%",
    borderCollapse: "collapse",
}

const thStyle = {
    backgroundColor: "#FFD530",
    color: "#333333",
    padding: "10px",
    textAlign: "left",
    margin: "10px",
};
export default BookingAdmin;