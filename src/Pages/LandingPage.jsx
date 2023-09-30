import React, {useState, useEffect} from 'react'
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { AiFillSafetyCertificate, AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '../Components/Button';
import { Link } from 'react-router-dom';
import { Icon } from '../Components/Icons';
import { ImageDivs } from '../Components/ImageDivs';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function LandingPage() {

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/review')
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  // ***** Effekt för första raden iconer******
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.4,
        },
      }));
    }
  }, [controls, inView])
  // ***** Effekt för första raden iconer******

  // ***** Effekt för andra raden iconer******

  const servicesControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (servicesInView) {
      servicesControls.start(i => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.4 + 0.3,
        },
      }));
    }
  }, [servicesControls, servicesInView]);




  // ***** Effekt för andra raden iconer******


  // ***** Effekt för slidern******
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
  // ***** Effekt för slidern******

  return (
    <StyledDiv>
      <StyledLandingImg>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <StyledHeadline>
            Who you gonna call?
          </StyledHeadline>
        </motion.div>
        <Link to="/bookings">
          <Button primary size="large" label="Book now!" />
        </Link>

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

        <StyledIconDiv ref={ref}>
          <motion.div custom={0} animate={controls} initial={{ y: -50, opacity: 0 }}>
            <StyledIconsText>
              <Icon primary size="medium" src='/imgs/Monster.png' />
              <StyledText>Say bye to all your germs!</StyledText>
            </StyledIconsText>
          </motion.div>
          <motion.div custom={1} animate={controls} initial={{ y: -50, opacity: 0 }}>
            <StyledIconsText>
              <Icon primary size="medium" src='/imgs/Certified.png' />
              <StyledText> Certified and reliable</StyledText>
            </StyledIconsText>
          </motion.div>
          <motion.div custom={2} animate={controls} initial={{ y: -50, opacity: 0 }}>
            <StyledIconsText>
              <Icon primary size="medium" src='/imgs/Moneybag.png' />
              <StyledText> Most bang for your buck!</StyledText>
            </StyledIconsText>
          </motion.div>
        </StyledIconDiv>

        <StyledSliderDiv>
          <Slider  {...settings}>
            <div >
              <StyledSlides className='slides'>
                <StyledRowDiv2>

                  <StyledRatingh3>Lordcommander72</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Fantastisk städning, dock pratade daniel lite för mycket!"
                </StyledP>

                <StyledRowDiv1>

                  <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} />

                </StyledRowDiv1>

              </StyledSlides>
            </div>
            <div>
              <StyledSlides className='slides'>
                <StyledRowDiv2>

                  <StyledRatingh3>Olof den tredje</StyledRatingh3>
                </StyledRowDiv2>
                <StyledP>
                  "Bästa städ firman i stan!, Rekommenderar starkt"
                </StyledP>

                <StyledRowDiv1>

                  <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} />

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

                  <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} />

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

                  <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} /> <AiFillStar color='#FFD530' size={30} />

                </StyledRowDiv1>

              </StyledSlides>
            </div>

          </Slider>
        </StyledSliderDiv>
      </StyledRatingDiv>
      <StyledServicesDiv>
        <Styledh2headline3> What can we offer you?</Styledh2headline3>
        <StyledSpan></StyledSpan>
        <StyledServicesRowDiv ref={servicesRef}>

          <motion.div custom={0} animate={servicesControls} initial={{ y: -50, opacity: 0 }}>
            <StyledIconsText>
              <ImageDivs primary size={'large'} src='/imgs/pexels-tima-miroshnichenko-6195278.jpg' />
              <StyledServicesText>Everyday cleaning</StyledServicesText>
            </StyledIconsText>
          </motion.div>

          <motion.div custom={1} animate={servicesControls} initial={{ y: -50, opacity: 0 }}>
            <StyledIconsText>
              <ImageDivs primary size={'large'} src='/imgs/pexels-tima-miroshnichenko-6196685.jpg' />
              <StyledServicesText>Final cleaning</StyledServicesText>
            </StyledIconsText>
          </motion.div>

          <motion.div custom={2} animate={servicesControls} initial={{ y: -50, opacity: 0 }}>
            <StyledIconsText>
              <ImageDivs primary size={'large'} src='/imgs/pexels-tima-miroshnichenko-6197122.jpg' />
              <StyledServicesText>Window cleaning</StyledServicesText>
            </StyledIconsText>
          </motion.div>

        </StyledServicesRowDiv>
        <Link to="/Services">
          <Button primary size="large" label="More services!" />
        </Link>

      </StyledServicesDiv>

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
  @media (max-width: 768px) {
    

 
  }
  
`
const StyledHeadline = styled.h1`
margin-top: 40vh;
margin-bottom: 6vh;
font-size:60px;
color: white;
@media (max-width: 768px) {

  font-size: 40px;
  text-align: center;
}
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
  margin-top: 100px;
 

`
const Styledh2headline1 = styled.h2`

font-size:40px;
color: white;
@media (max-width: 768px) {

  font-size: 30px;
  text-align: center;
}
`
const Styledh2headline2 = styled.h2`

font-size:40px;
color: #FFD530;
@media (max-width: 768px) {

  font-size: 30px;
  text-align: center;
}
`
const StyledSpan = styled.span`
height: 5px;
width: 60px;
background-color: #FFD530;
border-radius: 10px;
@media (max-width: 768px) {

 width: 40px;
}
`
const StyledIconDiv = styled.div`
  width: 100%;
  margin-top:70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11.5vw;
  flex-direction: row;
  @media (max-width: 768px) {

    flex-direction: column;
   }


`
const StyledText = styled.p`
text-align: center;
color: white;
font-weight: bold;
font-size: 20px;
width: 13vw;
@media (max-width: 768px) {

  width: 40vw;
 }

`


const StyledIconsText = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  
  
`

const StyledSliderDiv = styled.div`


margin-top: 100px;

padding:20px;

height: 400px;
width: 70%;
@media (max-width: 768px) {

  width: 83%;
 }




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

  @media (max-width: 768px) {

    width: 280px;
   }
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
const StyledServicesRowDiv = styled.div`
 margin-top: 50px;
 margin-bottom: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 11vw;
  @media (max-width: 768px) {

    flex-direction: column;
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
export default LandingPage