import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import AvailableTimes from '../Components/AvailableTimes';
import Calendar from '../Components/Calender';
import Modal from '../Components/Modal';

function Bookings() {
  const [currMonth, setCurrMonth] = useState("");
  const [currYear, setCurrYear] = useState("");
  const [currDate, setCurrDate] = useState("");

  const [clicked, setClicked] = useState(false);
  const [clickedDate, setClickedDate] = useState(null);

  const [bookedTimes, setBookedTimes] = useState([]);
  const [availiableTimesArr, setAvailiableTimesArr] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [clickedTime, setClickedTime] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  const renderCurrDate = () => {
    let date = new Date();
    setCurrDate(date.getDate());
    setCurrYear(date.getFullYear());
    setCurrMonth(date.getMonth());
  };

  const bookTime = (time) => {
    setModalOpen(!isModalOpen);
    setClickedTime(time);
  };

  const handleSubmit = async () => {

    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          date: new Date(currYear, currMonth, clickedDate + 1).toJSON().slice(0, 10),
          startTime: clickedTime,
          service: selectedValue
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderCurrDate();
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/booking');
      const data = await response.json();
      setBookedTimes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAvailiableTimes = (date) => {

    setClicked(true);
    setClickedDate(date);

    const bookedTimesOnSelectedDate = bookedTimes.filter(booking => new Date(booking.date).getDate() === date);
    const bookedStartTimes = bookedTimesOnSelectedDate.map(booking => booking.startTime);

    let availableTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    availableTimes = availableTimes.filter(time => !bookedStartTimes.includes(time));

    setAvailiableTimesArr(availableTimes);

  };

  return (
    <div>
      <Wrapper className="wrapper">
        <Calendar
          currYear={currYear}
          currMonth={currMonth}
          setCurrMonth={setCurrMonth}
          currDate={currDate}
          months={months}
          getAvailiableTimes={getAvailiableTimes}
          setClicked={setClicked}
        />
        {
          clicked == true
            ? <AvailableTimes
              availiableTimesArr={availiableTimesArr}
              clickedDate={clickedDate}
              currMonth={currMonth}
              currYear={currYear}
              months={months}
              bookTime={bookTime} />
            : <ChooseDate>
              Choose a date in the calendar to see available times.
            </ChooseDate>
        }
      </Wrapper>
      <ModalContainer>
        {isModalOpen && (
          <Modal
            title="Book"
            modalOpen={isModalOpen}
            setModalOpen={setModalOpen}
            name={name}
            setName={setName}
            adress={adress}
            setAdress={setAdress}
            email={email}
            setEmail={setEmail}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            handleSubmit={handleSubmit} />
        )}
      </ModalContainer>
    </div>
  );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5%;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 30%;
`;

const ChooseDate = styled.p`
    padding-top: 30%;
`;

export default Bookings;