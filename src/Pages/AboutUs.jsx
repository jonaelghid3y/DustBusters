import React from 'react'
import styled from 'styled-components';
import { Logo } from '../Components/Logo';


function AboutUs() {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledImage src='public\imgs\pexels-tima-miroshnichenko-6197108.jpg' />
        <StyledTextContainer>
          <StyledText>
            <BrandName1>Dust</BrandName1><BrandName2>Busters</BrandName2> is a very experienced cleaning company with solid and trained staff. High flexibility with a wide range of services enables us to provide you with both complete and partial solutions. We are established in Stockholm but perform our services all over the country.
            </StyledText>
          <br/>
          <StyledText>
            We cater to private individuals by providing a range of services including everyday cleaning, window cleaning, final cleaning, and our specialty: <BrandName2>dust busting</BrandName2>. Whether the task is grand or modest, we're committed to offering you comprehensive cleaning support!
          </StyledText>
        </StyledTextContainer>
      </StyledDiv>
      <StyledDiv style={{height: '50vh', backgroundColor: '#232323'}}>
        <StyledTextContainer style={{color: 'white', width: '80%'}}>
          <StyledText >
          Our vision is to enable cleaning services for everyone, regardless of where in the country you are. Therefore, it is important that you feel comfortable and secure with us both when it comes to price, execution and quality.          </StyledText>
            <br/>
          <StyledText >
            With <BrandName1 style={{ color: 'white'}}>Dust</BrandName1><BrandName2>Busters</BrandName2> cleaning will never feel like a chore, so you can blow off steam and relax while we do the work for you in the meantime. Of course, we have company insurance and a driving license. We take care of the RUT deduction for you so that you get a deduction of 50% on the labor cost. Therefore, it is important that you feel comfortable and secure with us both when it comes to price, execution and quality.
          </StyledText>
        </StyledTextContainer>

      </StyledDiv>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  height: 125vh;
  font-family: 'Poppins', sans-serif;

`

const StyledDiv = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

`
const StyledImage = styled.img `
  height: 60vh;
  width: 100vh;
  border-radius: 35px;
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  width: 80vh;
`

const StyledText = styled.p`
  font-size: 19px;
  
`

const BrandName1 = styled.p `
  display: inline-block;
  font-weight: 600;
  color: #232323;
`
const BrandName2 = styled.p `
  display: inline-block;
  font-weight: 600;
  color: #FFD530;
`



export default AboutUs