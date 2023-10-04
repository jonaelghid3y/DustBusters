import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            const response = await axios.get("");
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
            await axios.post("", newBooking);
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
            await axios.delete(`${id}`);

            fetchBookings();
        } catch (error) {
            console.error(`Error deleting booking ${id}:`, error);
        }
    };

    return (
        <div>
            <h1>List of Booking</h1>


            <form onSubmit={handleSubmit}>
                <label>Name:</label>
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
                <label>Service:</label>
                <input
                    type="text"
                    name="service"
                    value={newBooking.service}
                    onChange={handleInputChange}
                />
                <button type="submit">Create Booking</button>
            </form>


            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {booking.name} - {booking.date} - {booking.service}
                        <button onClick={() => handleDelete(booking.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookingAdmin;