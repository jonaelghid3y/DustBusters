import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '../Components/Button';
import { motion } from 'framer-motion';
import ReviewForm from './ReviewForm';
import BookFrom from './BookFrom';

const Modal = ({ title, modalOpen, setModalOpen, name, setName, content, setContent, rating, setRating, adress, setAdress, clickedTime, email, setEmail, setSelectedService, setSelectedHours, handleSubmit, availiableTimesArr }) => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/services');
      const data = await response.json();
      setServices(data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100vh" },
  };

  return (
    <StyledReviewModal
      initial="closed"
      animate={modalOpen ? "open" : "closed"}
      variants={variants}>
      <StyledFormHeadline>
        {title}
      </StyledFormHeadline>
      <StyledForm onSubmit={handleSubmit}>
        {title == "Review"
          ? <ReviewForm
            name={name}
            setName={setName}
            content={content}
            setContent={setContent}
            rating={rating}
            setRating={setRating} />
          : title == "Book"
            ? <BookFrom
              name={name}
              setName={setName}
              adress={adress}
              setAdress={setAdress}
              email={email}
              setEmail={setEmail}
              setSelectedService={setSelectedService}
              setSelectedHours={setSelectedHours}
              services={services}
              availiableTimesArr={availiableTimesArr}
              clickedTime={clickedTime}
            />
            : null}

        <Button primary size="small" label="Submit" />
      </StyledForm>
      <Button
        secondary size="small"
        label="Go back"
        onClick={handleModal} />
    </StyledReviewModal>
  );
};

const StyledReviewModal = styled(motion.div)`
    position: fixed;
    right: 50;
    top: 10vh;
    border: 1px solid lightgrey;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    min-height: 550px;
    padding: 25px;
    border-radius: 20px;
    padding: 25px;
    gap: 20px;
    @media (max-width: 768px) {

    width: 80%;
    min-height: 600px;
    
    }
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  height: 80%;
  gap: 25px;
  
`;
const StyledFormHeadline = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
    `;

export default Modal;
