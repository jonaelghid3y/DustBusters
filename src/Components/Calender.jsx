import React from 'react'
import styled from 'styled-components'

const Calendar = ({ currYear, currMonth, currDate, getAvailiableTimes }) => {

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

    return (
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
                        </button>
                        : date.class == "active"
                            ? <button
                                className="active"
                                key={date.date}
                                onClick={() => getAvailiableTimes(date.date)}>
                                <p>{date.date}</p>
                            </button>
                            : <button
                                className="nonactive"
                                key={date.date + 31}
                                disabled onClick={() => getAvailiableTimes(date.date)}>
                                <p>{date.date}</p>
                            </button>
                })
            }
        </CalendarDiv>
    )
}

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

export default Calendar