import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const Calendar = () => {

    const [currMonth, setCurrMonth] = useState("");
    const [currYear, setCurrYear] = useState("");
    const [currDate, setCurrDate] = useState("");


    // const daysTag = document.querySelector(".days"),
    // currentDate = document.querySelector(".current-date"),
    // prevNextIcon = document.querySelectorAll(".icons span");
    // // getting new date, current year and month
    const renderCalendar = () => {
        let date = new Date();
        setCurrDate(date.getDate());
        setCurrYear(date.getFullYear())
        setCurrMonth(date.getMonth())
    }


    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];



    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() - 1; // getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month


    const tr1 = [];

    for (let i = firstDayofMonth; i > 0; i--) { 
        tr1.push({
            date: lastDateofLastMonth - i + 1,
            class: "nonactive"
        }
        );
    }
    for (let i = 1; i < 7; i++) {
        tr1.push({
            date: i,
            class: "active"
        })
        if (tr1.length == 7) {
            break
        }
    }

    const tr2 = [];
    for (let i = 8 - firstDayofMonth; i < 15 - firstDayofMonth; i++) {
        tr2.push({
            date: i,
            class: "active"
        });
    }

    const tr3 = [];
    for (let i = 15 - firstDayofMonth; i < 22 - firstDayofMonth; i++) { 
        
        tr3.push({
            date: i,
            class: "active"
        });
    }

    const tr4 = [];
    for (let i = 22 - firstDayofMonth; i < 29 - firstDayofMonth; i++) { 
        tr4.push({
            date: i,
            class: "active"
        });
    }

    const tr5 = [];
    for (let i = 29 - firstDayofMonth; i < 36 - firstDayofMonth; i++) { 
        tr5.push({
            date: i,
            class: "active"
        });
        if (i == lastDateofMonth) {
            break
        }
    }
    for (let i = 1; i < 7; i++) {
        tr5.push({
            date: i,
            class: "nonactive"
        });
        if (tr5.length == 7) {
            break
        }
    }
    console.log(tr5)

    useEffect(() => {
        renderCalendar();
    }, []);


    return (
        <div>
            <div className="wrapper">
                <Styledheader>
                    <button id="prev">&#60;</button>
                    <p className='month'>{months[currMonth]}</p>
                    <button id="next">&#62;</button>
                </Styledheader>
                <Table className="calendar">
                    <thead>
                        <tr className="days">
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="white-row"></tr>
                        <tr>
                            {
                                tr1.map((item) => {
                                    return <td class={item.class}>{item.date}</td>
                                })
                            }
                        </tr>
                        <tr>
                            {
                                tr2.map((item) => {
                                    return <td class={item.class}>{item.date}</td>
                                })
                            }
                        </tr>
                        <tr>
                            {
                                tr3.map((item) => {
                                    return <td class={item.class}>{item.date}</td>
                                })
                            }
                        </tr>
                        <tr>
                            {
                                tr4.map((item) => {
                                    return <td class={item.class}>{item.date}</td>
                                })
                            }
                        </tr>
                        <tr>
                            {
                                tr5.map((item) => {
                                    return <td class={item.class}>{item.date}</td>
                                })
                            }
                        </tr>


                    </tbody>

                </Table>
            </div>
        </div>
    )
}

const Styledheader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  button {
    all: unset;

  }
`

const Table = styled.table`
    border-collapse: collapse;
    td, tr {
        border: 1px solid black;
    }

    th, td {
        width: 50px;
        height: 50px;
        font-weight: 300;
        text-align: center;
    }
    .days {
        border: none;
        background: #ffd530;
        margin-bottom: 20px;
        
    }
    .nonactive {
        background-color: #d9d9d9;
        color: #68625A
    }
    .white-row {
        height: 20px;
        border: none;
    }
`

export default Calendar