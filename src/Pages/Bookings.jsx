import React from 'react'
import Calendar from '../Components/Calender'
import styled from 'styled-components'

function Bookings() {
  return (
    <section className="bookingsContainer">
        <Calendar />
    </section>
  )
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5%;
`


export default Bookings