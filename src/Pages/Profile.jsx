import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import cat from '../assets/cat.jpg'


export default function Profile() {
  return (
    <>
      
<ProfileSide>

<div style={circle}>
<img style={propic} src={cat} alt="profileimg"></img>
</div>
<h1 style={username}>Boss Cat </h1>
<p style={paragraph}>14th April 1976</p>
<hr style={hr}></hr>

</ProfileSide>

    </>
  )
}

const ProfileSide = styled.div`

width: 35%;
height: 100vh;
background-color: gray;
display: flex;
justify-content: center;
align-items: center; 
`
const propic = {
    width:"300px",
    height:"auto",
    borderRadius:"50%",
    
}

const circle = {
    borderRadius: '50%',
    border: '4px outset orange',
    width: '300px', 
    height: '300px', 
    backgroundColor: 'black',
    display: 'flex',  
    alignItems: 'center',
    position: 'relative',
    overflow:"hidden",
    bottom:"200px",
}

const username = {

fontFace:"Poppins",
fontSize:"38px",
position:"absolute",
top:"510px"
}

const hr = {

width:"20%",
position:"absolute",
top:"610px",
height:"3px",
backgroundColor:"black",
opacity:"0.4",

}

const paragraph = {
    position:"absolute",
    top:"560px",
    color:"black",
    opacity:"0.4",

}