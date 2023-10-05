import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import AvailableTimes from '../Components/AvailableTimes'
import { Button } from './Button'
import Modal from './Modal'

const Calendar = () => {

    const [currMonth, setCurrMonth] = useState("");
    const [currYear, setCurrYear] = useState("");
    const [currDate, setCurrDate] = useState("");

    const [clicked, setClicked] = useState(false);
    const [clickedDate, setClickedDate] = useState(null);

    const [bookedTimes, setBookedTimes] = useState([]);
    const [availiableTimesArr, setAvailiableTimesArr] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);


    const renderCurrDate = () => {
        let date = new Date();
        setCurrDate(date.getDate());
        setCurrYear(date.getFullYear())
        setCurrMonth(date.getMonth())
    }

    useEffect(() => {
        renderCurrDate();
        fetchBookings();
    }, [clickedDate]);

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var curr = new Date();
    var first = curr.getDay() - ((curr.getDay() + 6) % 7);

    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() - 1; // getting first day of month
    if (firstDayofMonth == -1) {
        firstDayofMonth = 6
    }
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

    const calendarDates = [];

    for (let i = firstDayofMonth; i > 0; i--) {
        if (i < currDate) {
            calendarDates.push({
                date: lastDateofLastMonth - i + 1,
                class: "nonactive",
            }
            );
        } else {
            calendarDates.push({
                date: lastDateofLastMonth - i + 1,
                class: "nonactive",
            }
            );

        }
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        if (i < currDate) {
            calendarDates.push({
                date: i,
                class: "active"
            }
            );
        }
        else {
            calendarDates.push(
                {
                    date: i,
                    class: "active"
                }
            )
        }
    }
    for (let i = 1; calendarDates.length < 42; i++) {
        calendarDates.push({
            date: i,
            class: "nonactive"
        });
        if (calendarDates.length == 35) break
    }


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
                    <CalendarDiv>
                        {
                            calendarDates.map((date) => {
                                return date.date == new Date().getDate()
                                    && currMonth == new Date().getMonth()
                                    && date.class != "nonactive"
                                    ? <button className="active" key={date.date} onClick={() => getAvailiableTimes(date.date)}>
                                        <div className="current" value={date.date}>
                                            <p>{date.date}</p>
                                        </div>
                                    </button>
                                    : date.class == "active"
                                        ? <button className="active" key={date.date} onClick={() => getAvailiableTimes(date.date)}>
                                            <p>{date.date}</p>
                                        </button>
                                        : <button className="nonactive" key={date.date + 31} disabled onClick={() => getAvailiableTimes(date.date)}>
                                            <p>{date.date}</p>
                                        </button>
                            })
                        }
                    </CalendarDiv>
                </div>
                {
                    clicked == true
                        ? <Section>
                            <p id='todaysDate'>
                                {days[new Date(currYear, currMonth, clickedDate).getDay()]} {clickedDate} {months[currMonth]}
                            </p>
                            <div id='times'>
                                {availiableTimesArr.length == 0
                                    ? <NoDate>
                                        No available times, please choose another date.
                                    </NoDate>
                                    : availiableTimesArr.map((time) => {
                                        return <div key={time} className='timeslot'>
                                            <p>{time}.00</p>
                                            <Button primary size="small" label="Book" onClick={() => setModalOpen(true)} />
                                        </div>
                                    })
                                }
                            </div>
                        </Section>
                        : <ChooseDate>
                            Choose a date in the calendar to see available times.
                        </ChooseDate>
                }
            </Wrapper>
            <ModalContainer>
                {modalOpen && (
                    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
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

        .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border-color: gray;
        background-color: gray;
        }

    }
    .active {
        background-color: white;
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

`
const ChooseDate = styled.p`
    padding-top: 30%;
`
const NoDate = styled.p`
    padding-top: 20%;
`

const Section = styled.section`
  
  #chooseDate {
    margin-top: 200px;
    font-size: 1.3rem;
  }
  #todaysDate {
    font-size: 1.3rem;
    margin-bottom: 50px;
  }
  #times {
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    column-gap: 10%;

  }
  .timeslot {
    margin: 20px;
  }
`


export default Calendar