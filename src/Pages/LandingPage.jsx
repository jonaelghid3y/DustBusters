import React from 'react'
import styled from 'styled-components';
import { AiFillSafetyCertificate,AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '../Components/Button';

function LandingPage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    draggable: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile devices
        },
      },
    ],
  }

  return (
    <StyledDiv>
      <StyledLandingImg>
        <StyledHeadline>
          Who you gonna call?
        </StyledHeadline>
        
        <Button primary size="large" label="Book now!" />

      </StyledLandingImg>
      <StyledRatingDiv>
        <StyledHeadlineDiv>
          <Styledh2headline1>
            Why Dust
          </Styledh2headline1>
          <Styledh2headline2>
            Busters?
          </Styledh2headline2>
        </StyledHeadlineDiv>
        <StyledSpan></StyledSpan>
        <StyledIconDiv>
          <StyledIconsDiv>
            hej
          </StyledIconsDiv>
          <StyledIconsDiv>
            hej
          </StyledIconsDiv>
          <StyledIconsDiv>
            <AiFillSafetyCertificate size={80} color='#FFD530' />
          </StyledIconsDiv>
        </StyledIconDiv>

        <StyledSliderDiv>
          <Slider  {...settings}>
            <div >
              <StyledSlides className='slides'>
                <StyledRowDiv2>
                    
                    <StyledRatingh3>Anna87</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Grym städning och jättetrevlig personal tack så mycket!!"
                </StyledP>
               
                <StyledRowDiv1>
                  
                  <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/>
                
                </StyledRowDiv1>
                
              </StyledSlides>
            </div>
            <div>
            <StyledSlides className='slides'>
                <StyledRowDiv2>
                    
                    <StyledRatingh3>Anna87</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Grym städning och jättetrevlig personal tack så mycket!!"
                </StyledP>
               
                <StyledRowDiv1>
                  
                  <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/>
                
                </StyledRowDiv1>
                
              </StyledSlides>
            </div>
            <div>
            <StyledSlides className='slides'>
                <StyledRowDiv2>
                    
                    <StyledRatingh3>Anna87</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Grym städning och jättetrevlig personal tack så mycket!!"
                </StyledP>
               
                <StyledRowDiv1>
                  
                  <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/>
                
                </StyledRowDiv1>
                
              </StyledSlides>
            </div>
            <div>
            <StyledSlides className='slides'>
                <StyledRowDiv2>
                    
                    <StyledRatingh3>Anna87</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Grym städning och jättetrevlig personal tack så mycket!!"
                </StyledP>
               
                <StyledRowDiv1>
                  
                  <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/>
                
                </StyledRowDiv1>
                
              </StyledSlides>
            </div>
            <div>
            <StyledSlides className='slides'>
                <StyledRowDiv2>
                    
                    <StyledRatingh3>Anna87</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Grym städning och jättetrevlig personal tack så mycket!!"
                </StyledP>
               
                <StyledRowDiv1>
                  
                  <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/> <AiFillStar color='#FFD530' size={30}/>
                
                </StyledRowDiv1>
                
              </StyledSlides>
            </div>
          </Slider>
        </StyledSliderDiv>

      </StyledRatingDiv>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  width: 100%;
  min-height: 300vh;
  font-family: 'Poppins', sans-serif;
 
`
const StyledLandingImg = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-image: url('/imgs/pexels-tima-miroshnichenko-6195125.jpg');
  background-size: cover;
  background-position: bottom;  
  
`
const StyledHeadline = styled.h1`
margin-top: 250px;
font-size:60px;
color: white;
`

const StyledRatingDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
const StyledHeadlineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 150px;

`
const Styledh2headline1 = styled.h2`

font-size:40px;
color: white;
`
const Styledh2headline2 = styled.h2`

font-size:40px;
color: #FFD530;
`
const StyledSpan = styled.span`
height: 5px;
width: 60px;
background-color: #FFD530;
border-radius: 10px;
`
const StyledIconDiv = styled.div`
  width: 100%;
  margin-top:80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  flex-direction: row;
`
const StyledIconsDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 75px;
  background-color: white;
  border: 1px solid white;
`
const StyledSliderDiv = styled.div`


margin-top: 150px;

padding:20px;

height: 400px;
width: 70%;





`
const StyledSlides = styled.div`
 

  color: black;
  background-color: white;
  height: 200px;
  width: 300px;
  margin: auto;
  border-radius: 10px;
  border: 1px solid black;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

`

const StyledRowDiv1 = styled.div`
 

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;

`
const StyledRowDiv2 = styled.div`
 

display: flex;
align-items: center;
justify-content: flex-start;

width: 100%;
gap: 10px;

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
const StyledRatingimg = styled.div`

height: 40px;
width: 40px;
border-radius: 20px;
border: 1px solid black;

`

;


export default LandingPage