import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

function ServiceItem({ item, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      id={`${item.id}`}
      key={item.id}
    >
      <StyledItem $even={index % 2 === 0}  >
        <StyledImg src={item.imgURL} alt="cleaning" />
        <StyledTextDiv>
          <h1>{item.title}</h1>
          <br />
          <StyledP>{item.description}</StyledP>
          <StyledPrice >Price: {item.price}:-/h</StyledPrice>
        </StyledTextDiv>
      </StyledItem>
    </motion.div>
  );
}

function Services() {
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/services');
      const data = await response.json();
      setfetchedData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledDiv>
      {fetchedData.map((item, index) => (
        <ServiceItem item={item} index={index} key={item.id} />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
 
`;
const StyledItem = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
  background-color:  #232323;
    flex-direction: row-reverse;
    color: white;

  ${props => props.$even && css`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  color: black;

  `}
  @media (max-width: 768px) {

    flex-direction: column;

  }
`;

const StyledImg = styled.img`
  height: 300px;
  width: 400px;
  border-radius: 20px;
  margin: 60px;
  object-fit: cover;
  @media (max-width: 768px) {

    width: 80%;
    height: 300px;
    


  }
`;
const StyledTextDiv = styled.div`

width: 50%;
height: 70%;
margin-top: 15px;
padding: 25px;
fontFamily: poppins;
overflowY: auto;


@media (max-width: 768px) {

  width: 80%;
  text-aling: center;

}
 
`;
const StyledPrice = styled.h4`

textDecoration: underline;
textUnderlineOffset: 10px;
textDecorationColor: #FFD530;
textDecorationWidth: 30px;
float: right;
@media (max-width: 768px) {
margin-top: 30px;
text-align: center;
float: none;

}
`;
const StyledP = styled.p`

  font-size: 17px;
  margin-bottom: 15px;


`;

export default Services;
