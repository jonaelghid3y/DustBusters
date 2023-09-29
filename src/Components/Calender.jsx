import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const Calendar = () => {

    const [currMonth, setCurrMonth] = useState("");
    const [currYear, setCurrYear] = useState("");
    const [currDate, setCurrDate] = useState("");


    const renderCalendar = () => {
        let date = new Date();
        setCurrDate(date.getDate());
        setCurrYear(date.getFullYear())
        setCurrMonth(date.getMonth())
    }

    useEffect(() => {
        renderCalendar();
    }, []);

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];


    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() - 1; // getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

    const calendarDates = [];

    for (let i = firstDayofMonth; i > 0; i--) {
        if (i == currDate && currMonth == new Date().getMonth()) {
            calendarDates.push({
                date: lastDateofLastMonth - i + 1,
                class: "current",
                dotClass: "green"
            }
            );
        } else if (i < currDate) {
            calendarDates.push({
                date: lastDateofLastMonth - i + 1,
                class: "nonactive",
                dotClass: "grey"
            }
            );
        } else {
            calendarDates.push({
                date: lastDateofLastMonth - i + 1,
                class: "nonactive",
                dotClass: "green"
            }
            );

        }
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        if (i == currDate && currMonth == new Date().getMonth()) {
            calendarDates.push(
                {
                    date: i,
                    class: "current"
                }
            )
        } else if (i < currDate) {
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
    for (let i = 1; calendarDates.length < 35; i++) {
        if (i == currDate && currMonth == new Date().getMonth()) {
            calendarDates.push({
                date: i,
                class: "current"
            });
        } else {
            calendarDates.push({
                date: i,
                class: "nonactive"
            });
        }
    }

    
    const showNextMonth = () => {
        if (currMonth < 11)
        setCurrMonth(currMonth+1)
        else 
        setCurrMonth(0)
        
    }
    const showPrevMonth = () => {
        if (currMonth > 0)
        setCurrMonth(currMonth-1)
        else
        setCurrMonth(11)
    }

    return (
        <div>
            <div className="wrapper">
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
                            return date.class == "current" 
                                ? <button className="active">
                                    <div className={date.class}>
                                        <p>{date.date}</p>
                                    </div>
                                    <div className="dot"></div>
                                </button>
                                : <button className={date.class}>
                                    <p>{date.date}</p>
                                    <div className="dot"></div>
                                </button>
                        })
                    }
                </CalendarDiv>



            </div>
        </div>
    )
}

const Styledheader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin-bottom: 20px;
    button {
    all: unset;
    cursor: pointer;
    }
    p {
        font-size: 1.1rem;
    }
`

const DaysDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 500px;
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
    width: 500px;
    height: 360px;

    div, button {
        cursor: pointer;
        border: 1px solid black;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 10px;

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



export default Calendar