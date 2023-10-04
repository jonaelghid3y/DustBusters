import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '../Components/Button';
import { motion } from 'framer-motion';


const Modal = ({ title, modalOpen, setModalOpen, name, setName, content, setContent, rating, setRating, adress, setAdress, email, setEmail, handleSubmit }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        try {
            const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/services')
            const data = await response.json();
            setServices(data);


        } catch (error) {
            console.log(error)
        }
    }

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

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
                <StyledFormDivs>
                    <StyledLabel> Name:</StyledLabel>
                    <StyledInput
                        type="text"
                        name='name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </StyledFormDivs>
                {title == "Review"
                    ? <>
                        <StyledFormDivs>
                            <StyledLabel> Comments or feedback:</StyledLabel>
                            <Styledtextarea
                                required value={content}
                                onChange={(e) => setContent(e.target.value)} />
                        </StyledFormDivs>
                        <StyledRowDiv2>
                            {[...Array(5)].map((_, i) => (
                                <StyledStar
                                    key={i}
                                    selected={i < rating}
                                    onClick={() => setRating(i + 1)}
                                >
                                    <AiFillStar size={30} />
                                </StyledStar>
                            ))}
                        </StyledRowDiv2>
                    </>
                    : title == "Book"
                        ? <>
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
                            <StyledSelect name="pets" id="select-service">
                                <option value="">--Please choose a service--</option>
                                {services.map((service) => {
                                    return <option key={service.id} value={service.title}>{service.title}</option>
                                })}
                            </StyledSelect>
                        </>
                        : null}

                <Button primary size="small" label="Submit" />
            </StyledForm>
            <Button
                secondary size="small"
                label="Go back"
                onClick={handleModal} />
        </StyledReviewModal>
    )
}


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
`
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black
  width: 80%;
  height: 80%;
  gap: 25px;
  
`
const StyledFormHeadline = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
    `

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
const Styledtextarea = styled.textarea`
    width: 20vw;
    height: 9vw;
    font-size: 18px;
    resize: none;

@media (max-width: 768px) {

  width: 60vw;
  height: 15vh;
  
 }

`
const StyledStar = styled.div`
  cursor: pointer;
  color: ${props => (props.selected ? '#FFD530' : '#ccc')};
  display: flex;
  flex-direction: row;
  transition: 0.5s;
`;

const StyledRowDiv2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`

const StyledSelect = styled.select `
    font-size: 16.5px;
    width: 20vw;
    height: 5vh;
    @media (max-width: 768px) {

    width: 60vw;
    
    }
`

const StyledRatingh3 = styled.h3`
    font-size:20px;
    margin-left: 5%;
`
const StyledP = styled.h3`
font-size:15px;
font-weight: normal;
text-align: center;
`
const StyledServicesDiv = styled.div`
width: 100%;
min-height: 80vh;
padding: 100px 0;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Styledh2headline3 = styled.h2`
font-size:40px;
color: black;
@media (max-width: 768px) {
  font-size: 30px;
 }
`
const StyledServicesText = styled.p`
text-align: center;
color: black;
font-weight: bold;
font-size: 20px;
width: 13vw;
@media (max-width: 768px) {
  width: 40vw;
 }

`

export default Modal
