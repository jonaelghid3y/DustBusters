import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const AvailableTimes = ({ availiableTimesArr, clickedDate, currMonth, currYear, months, bookTime }) => {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <Section>
      <p id='todaysDate'>
        {days[new Date(currYear, currMonth, clickedDate).getDay()]} {clickedDate} {months[currMonth]}
      </p>
      <div id='times'>
        {availiableTimesArr.length == 0
          ? <NoDate>
            No available times, please choose another date.
          </NoDate>
          : availiableTimesArr.map((time) => {
            return <TimeSlot key={time} className='timeslot'>
              <p>{time}.00</p>
              <Button 
                primary size="small" 
                label="Book"
                onClick={() => bookTime(time)} />
            </TimeSlot>
          })
        }
      </div>
    </Section>
  )
}

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
`
const TimeSlot = styled.div `
  margin: 20px;
`
const NoDate = styled.p`
padding-top: 20%;
`

export default AvailableTimes
