import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Button } from './Button'

const AvailableTimes = () => {

  const [bookedTimes, setBookedTimes] = useState('[]');

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/booking')
      const data = await response.json();
      setBookedTimes(data);

    } catch (error) {
      console.log(error)
    }
  }

  let availiableTimesArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  return (
    <Section>
      {/* <p id='chooseDate'>
        Choose a date in the calendar to see available times.
      </p> */}
      <p id='todaysDate'>
        Thursday 21 September
      </p>
      <div id='times'>
      {
        availiableTimesArr.map((time) => {
          return <div className='timeslot'>
          <p>{time}.00</p>
          <Button primary size="small" label="Book"/>
          </div>
        })
      }
      </div>
      {/* <p>9.00</p>
      <Button primary size="small" label="Book"/>
      <p>10.00</p>
      <Button primary size="small" label="Book"/>
      <p>11.00</p>
      <Button primary size="small" label="Book"/> */}
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
