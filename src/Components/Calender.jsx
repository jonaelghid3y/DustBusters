import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Calendar = ({ currYear, currMonth, setCurrMonth, currDate, getAvailiableTimes, setClicked, months }) => {

  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() - 1; // getting first day of month
  if (firstDayofMonth == -1) {
    firstDayofMonth = 6;
  }
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

  const calendarDates = [];

  for (let i = firstDayofMonth; i > 0; i--) {
    calendarDates.push({
      date: lastDateofLastMonth - i + 1,
      class: "nonactive",
    }
    );
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    calendarDates.push({
      date: i,
      class: "active"
    }
    );
  }
  for (let i = 1; calendarDates.length < 42; i++) {
    calendarDates.push({
      date: i,
      class: "nonactive"
    });
    if (calendarDates.length == 35) break;
  }

  const [bookedTimes, setBookedTimes] = useState([]);

  useEffect(() => {
    fetchBookings();
    getAvaliableDates();
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

  const getAvaliableDates = (date) => {

    if (date < new Date().getDate() && currMonth == new Date().getMonth()) {
      return "grey";
    }
    const bookedTimesOnSelectedDate = bookedTimes.filter(booking => new Date(booking.date).getDate() === date && new Date(booking.date).getMonth() == currMonth);
    const bookedStartTimes = bookedTimesOnSelectedDate.map(booking => booking.startTime);

    let availableTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    availableTimes = availableTimes.filter(time => !bookedStartTimes.includes(time));

    if (availableTimes.length == 0) {
      return "red";
    } else if (availableTimes.length < 5) {
      return "yellow";
    }
    else {
      return "green";
    }
  };

  const showNextMonth = () => {
    setClicked(false);
    if (currMonth < 11)
      setCurrMonth(currMonth + 1);
    else
      setCurrMonth(0);

  };
  const showPrevMonth = () => {
    setClicked(false);
    if (currMonth > 0)
      setCurrMonth(currMonth - 1);
    else
      setCurrMonth(11);
  };

  return (
    <div>
      <Styledheader>
        {new Date().getMonth() == currMonth
          ? <button id="first" className="arrow" disabled ></button>
          : <button id="prev" className="arrow" onClick={() => showPrevMonth()}>&#60;</button>}
        <p className='month'>{months[currMonth]}</p>
        <button id="next" className="arrow" onClick={() => showNextMonth()}>&#62;</button>
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
      <CalendarDiv>
        {
          calendarDates.map((date) => {
            return date.date == new Date().getDate()
              && currMonth == new Date().getMonth()
              && date.class != "nonactive"
              ? <button
                className="active"
                key={date.date}
                onClick={() => getAvailiableTimes(date.date)}>
                <div className="current" value={date.date}>
                  <p>{date.date}</p>
                </div>
                <div className={getAvaliableDates(date.date)}></div>
              </button>
              : date.class == "active" && getAvaliableDates(date.date) == "grey"
                ? <button
                  className="active-no-click"
                  key={date.date}
                  disabled
                  onClick={() => getAvailiableTimes(date.date)}>
                  <p>{date.date}</p>
                  <div className={getAvaliableDates(date.date)}></div>
                </button>
                : date.class == "active" && getAvaliableDates(date.date) != "grey"
                  ? <button
                    className="active"
                    key={date.date}
                    onClick={() => getAvailiableTimes(date.date)}>
                    <p>{date.date}</p>
                    <div className={getAvaliableDates(date.date)}></div>
                  </button>
                  : <button
                    className="nonactive"
                    key={date.date + 31}
                    disabled
                    onClick={() => getAvailiableTimes(date.date)}>
                    <p>{date.date}</p>
                    <div className="grey"></div>
                  </button>;
          })
        }
      </CalendarDiv>
    </div>
  );
};

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
    .arrow {
      padding-right: 20px;
      padding-left: 20px;
    }
    #first {
      cursor: default;
      color: white;
    }

`;

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

`;

const CalendarDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 35vw;

    div, button {
        cursor: pointer;
        border: 1px solid black;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 72px;

        p {
            font-size: 1.2rem;
            font-weight: 300;
        }

        .green, .red, .yellow, .grey {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border-color: #3e907a;
        background-color:  #3e907a;
        }
        .red {
        border-color: #bc473a;
        background-color: #bc473a;
        }
        .yellow {
        border-color: yellow;
        background-color: yellow;
        }
        .grey {
        border-color: grey;
        background-color: grey;
        }

    }
    .active {
        background-color: white;
    }
    .active-no-click {
      cursor: default;
    }

    .nonactive {
        cursor: default;
        background-color: #d9d9d9;
        color: #68625A
    }
    .current {
        border: 3px solid #FFD530;
        width: 50%;
        height: 45%;
        border-radius: 50%;
        margin-bottom: -4px;
        margin-top: -5px;
    }

    .active:hover {
        background-color:  #232323;
        color: white;
    }
`;

export default Calendar;