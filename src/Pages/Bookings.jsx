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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5%;
`


export default Bookings