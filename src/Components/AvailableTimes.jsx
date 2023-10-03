import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Button } from './Button'

const AvailableTimes = ({availiableTimesArr, clickedDate, currMonth, currDay}) => {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <Section>
      <p id='todaysDate'>
        {days[new Date(currYear, currMonth, clickedDate).getDay()]} {clickedDate} {months[currMonth]}
      </p>
      <div id='times'>
      {
        availiableTimesArr.map((time) => {
          return <div key ={time} className='timeslot'>
          <p>{time}.00</p>
          <Button primary size="small" label="Book"/>
          </div>
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
  .timeslot {
    margin: 20px;
  }
`

export default AvailableTimes
