import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import AvailableTimes from '../Components/AvailableTimes'
import Calendar from '../Components/Calender'
import Modal from '../Components/Modal'

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

  const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

  const renderCurrDate = () => {
    let date = new Date();
    setCurrDate(date.getDate());
    setCurrYear(date.getFullYear())
    setCurrMonth(date.getMonth())
  }

  const bookTime = () => {
    setModalOpen(!isModalOpen);
  }

  const handleSubmit = async (e) => {

    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          date: new Date(currYear, currMonth, clickedDate + 1).toJSON().slice(0, 10),
          startTime: 10,
          service: "Vardagsstädning"
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
  }, [clickedDate]);

  const showNextMonth = () => {
    if (currMonth < 11)
      setCurrMonth(currMonth + 1)
    else
      setCurrMonth(0)

  }
  const showPrevMonth = () => {
    if (currMonth > 0)
      setCurrMonth(currMonth - 1)
    else
      setCurrMonth(11)
  }

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

  }

  return (
    <div>
      <Wrapper className="wrapper">
        <div>
          <Styledheader>
            <button id="prev" onClick={() => showPrevMonth()}>&#60;</button>
            <p className='month'>{months[currMonth]}</p>
            <button id="next" onClick={() => showNextMonth()}>&#62;</button>
          </Styledheader>
          <DaysDiv>
            <div><p>Mo</p></div>
            <div><p>Tu</p></div>
            <div><p>We</p></div>
            <div><p>Th</p></div>
            <div><p>Fr</p></div>
            <div><p>Sa</p></div>
            <div><p>Su</p></div>
          </DaysDiv>
          <Calendar
            currYear={currYear}
            currMonth={currMonth}
            currDate={currDate} 
            getAvailiableTimes={getAvailiableTimes}
          />
        </div>
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
            handleSubmit={handleSubmit} />
        )}
      </ModalContainer>
    </div>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5%;
`

const ModalContainer = styled.div`
    position: fixed;
    left: 30%;
`

const Styledheader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 35vw;
    margin-bottom: 20px;
    button {
    all: unset;
    cursor: pointer;
    }
    p {
        font-size: 1.3rem;
    }

`

const DaysDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 35vw;
    background-color: #FFD530;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 10px;
    p {
        font-size: 1.2rem;
        font-weight: 300;
    }

`
const ChooseDate = styled.p`
    padding-top: 30%;
`

export default Bookings