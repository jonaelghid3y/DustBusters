import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Components/Logo';

function AboutUs() {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledImage src='/imgs/pexels-tima-miroshnichenko-6197108.jpg' alt="DustBusters Cleaning" />
        <StyledTextContainer>
          <StyledText>
            <BrandName1>Dust</BrandName1><BrandName2>Busters</BrandName2> is a highly experienced cleaning company with a dedicated and trained staff. Our flexibility and wide range of services allow us to provide both complete and partial cleaning solutions. We are based in Stockholm but offer our services nationwide.
          </StyledText>
          <StyledText>
            We cater to private individuals by offering a range of services including everyday cleaning, window cleaning, final cleaning, and our specialty: <BrandName2>dust busting</BrandName2>. Whether the task is large or small, we are committed to providing comprehensive cleaning support!
          </StyledText>
        </StyledTextContainer>
      </StyledDiv>
      <StyledDiv style={{ backgroundColor: '#232323', color: 'white' }}>
        <StyledTextContainer>
          <StyledText>
            Our vision is to make cleaning services accessible to everyone, regardless of their location in the country. Therefore, it is important to us that you feel comfortable and confident in our services, including pricing, execution, and quality.
          </StyledText>
          <StyledText>
            With <BrandName1>Dust</BrandName1><BrandName2>Busters</BrandName2>, cleaning will never feel like a chore. You can relax while we do the work for you. We are fully insured, licensed, and handle the RUT deduction for you, allowing you to benefit from a 50% deduction on labor costs.
          </StyledText>
        </StyledTextContainer>
      </StyledDiv>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  font-family: 'Poppins', sans-serif;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  height: auto;
  max-width: 100%;
  border-radius: 35px;
  margin-bottom: 2rem;
`;

const StyledTextContainer = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 19px;
  margin-bottom: 1.5rem;
`;

const BrandName1 = styled.span`
  font-weight: 600;
  color: #FFD530;
`;

const BrandName2 = styled.span`
  font-weight: 600;
  color: #FFD530;
`;

export default AboutUs;