import React from 'react';
import styled from 'styled-components';

const BookFrom = ({ name, setName, adress, setAdress, setSelectedService, setSelectedHours, services, availiableTimesArr, clickedTime }) => {

  const getHours = (time) => {
    let startTime = time;
    let count = 0;
    let hourArr = [];
    while (availiableTimesArr.includes(startTime + 1)) {
      startTime = startTime + 1;
      count = count + 1;
      hourArr.push(count);
      console.log(hourArr);
    }
    hourArr.push(count + 1);
    return hourArr;
  };

  return (
    <>
      <StyledFormDivs>
        <label> Name:</label>
        <StyledInput
          type="text"
          name='name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </StyledFormDivs>
      <StyledFormDivs>
        <label> Adress:</label>
        <StyledInput
          type="text"
          name='name'
          required
          value={adress}
          onChange={(e) => setAdress(e.target.value)} />
      </StyledFormDivs>
      <label htmlFor="select-service">Choose service:</label>
      <StyledSelect name="services" id="select-service" onChange={(e) => setSelectedService(e.target.value)}>
        <option value="">--Please choose a service--</option>
        {services.map((service) => {
          return <option key={service.id} value={service.title}>{service.title}</option>;
        })}
      </StyledSelect>
      <StyledSelect name="hours" id="select-hours" onChange={(e) => setSelectedHours(e.target.value)}>
        <option value="">--Please select hours--</option>
        {getHours(clickedTime).map(hour => {
          return <option key={hour} value={hour}>{hour}h</option>;
        })}
      </StyledSelect>
    </>
  );
};

const StyledFormDivs = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    `;

const StyledInput = styled.input`
    font-size: 16.5px;
    width: 20vw;
    height: 5vh;
    @media (max-width: 768px) {
    width: 60vw;  
    }

`;

const StyledSelect = styled.select`
    font-size: 16.5px;
    width: 20vw;
    height: 5vh;
    @media (max-width: 768px) {
    width: 60vw;
    }
`;

export default BookFrom;
