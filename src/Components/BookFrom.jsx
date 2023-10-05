import React from 'react'
import styled from 'styled-components';

const BookFrom = ({ name, setName, adress, setAdress, email, setEmail, setSelectedValue, services }) => {
  return (
    <>
      <StyledFormDivs>
        <StyledLabel> Name:</StyledLabel>
        <StyledInput
          type="text"
          name='name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </StyledFormDivs>
      <StyledFormDivs>
        <StyledLabel> Adress:</StyledLabel>
        <StyledInput
          type="text"
          name='name'
          required
          value={adress}
          onChange={(e) => setAdress(e.target.value)} />
      </StyledFormDivs>
      <StyledFormDivs>
        <StyledLabel> Email:</StyledLabel>
        <StyledInput
          type="text"
          name='name'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </StyledFormDivs>
      <label htmlFor="select-service">Choose service:</label>
      <StyledSelect name="services" id="select-service" onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="">--Please choose a service--</option>
        {services.map((service) => {
          return <option key={service.id} value={service.title}>{service.title}</option>
        })}
      </StyledSelect>
    </>
  )
}

const StyledFormDivs = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    `
const StyledLabel = styled.label`

`
const StyledInput = styled.input`
    font-size: 16.5px;
    width: 20vw;
    height: 5vh;
    @media (max-width: 768px) {

    width: 60vw;
    
    }

`

const StyledSelect = styled.select`
    font-size: 16.5px;
    width: 20vw;
    height: 5vh;
    @media (max-width: 768px) {

    width: 60vw;
    
    }
`

export default BookFrom
