import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const AvailableTimes = () => {
  return (
    <Section>
      <p>9.00</p>
      <Button primary size="small" label="Book"/>
      <p>10.00</p>
      <Button primary size="small" label="Book"/>
      <p>11.00</p>
      <Button primary size="small" label="Book"/>
    </Section>
  )
}

const Section = styled.section`
  
  
`

export default AvailableTimes
