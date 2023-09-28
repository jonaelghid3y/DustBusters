import React from 'react'
import AvailableTimes from '../Components/AvailableTimes'
import Calendar from '../Components/Calender'
import styled from 'styled-components'

function Bookings() {
  return (
    <Section className="bookingsContainer">
        <Calendar />
        <AvailableTimes />
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 10%
`


export default Bookings