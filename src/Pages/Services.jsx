import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';


function Services() {

  const [fetchedData, setfetchedData] = useState('[]');

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/services')
      const data = await response.json();
      setfetchedData(data);
      console.log(fetchedData);

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
     <StyledDiv1>

<img style={images} src={fetchedData[0].imgURL} alt="image1" />

<StyledTextContainer>
<h2>{fetchedData[0].title}</h2>
<br></br>
<h4>{fetchedData[0].description}</h4>
</StyledTextContainer>


</StyledDiv1>

<StyledDiv2>
<h2>{fetchedData[0].title}</h2>

</StyledDiv2>

    </>
  )


  
}


const StyledDiv1 = styled.div`
  width: 100%;
  height:60vh;
  background-color:white;
  display:flex;
  justify-content:space-around;
  flex-direction:row;
`

const StyledDiv2 = styled.div`
  width: 100%;
  height:60vh;
  background-color:pink;
`

const StyledTextContainer = styled.div`
  width: 50%;
  height:70%;
  background-color:pink;
  position:relative;
  top:60px;
  right:30px;
  padding:25px;
  font-family:verdana;
`

const images ={

height:"70%",
width:"20vw",
borderRadius:"20px",
margin:"60px",


}



export default Services