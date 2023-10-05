import React from 'react'
import { useState, Button } from 'react';
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

<Form>
  
<label for="username" style={labelfield}>First name</label>
<input type="text" placeholder="Enter your Firstname..." style={inputfield} name="username"></input>
<label for="lastname" style={labelfield}>Last name</label>
<input type="text" name="lastname" placeholder="Enter your Lastname..." style={inputfield}></input>
<label for="email" style={labelfield}>Adress</label>
<input type="text" name="Adress" placeholder="Enter your Adress..." style={inputfield}></input>
<label for="adress" style={labelfield}>Telephone</label>
<input type="text" name="Tel" placeholder="Enter your Telephone..." style={inputfield}></input>
<label for="adress" style={labelfield}>E-mail</label>
<input type="text" name="Email" placeholder="Enter your E-mail..." style={inputfield}></input>

<ButtonContainer>
<button style={ButtonDiv}>Edit Profile</button>
<button style={ButtonDiv2}>Edit Profile</button>
</ButtonContainer>
</Form>

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
border-right:3px solid #333333;

`
const ButtonContainer = styled.div`

display:flex;

flex-direction:column;
padding:10px;
gap:20px;
margin-top:30px;
width:75%;


`
const Form = styled.div`

width: 35%;
height:800px;
border:5px solid black;
display: flex;
justify-content: left;
align-items: center; 
flex-direction:column;
position:absolute;
left:50%;
top:145px;
border-radius:13%;
background: linear-gradient(140deg, #f9d966, #d6ac17);

`

const ButtonDiv = {

  padding:"10px",
  width:"100%",
borderRadius:"10px",
boxShadow:"2px 3px  3px black",
backgroundColor:"yellow",

}

const ButtonDiv2 = {

  padding:"10px",
  width:"100%",
borderRadius:"10px",
boxShadow:"2px 3px  3px black",
backgroundColor:"green",

}

const inputfield = {
padding:"10px",
marginTop:"20px",
width:"70%",
border:"none",
borderBottom:"2px solid gray",
backgroundColor: "transparent",
tabIndex:"1",
}



const labelfield ={
fontSize:"24px",
 position:"relative",
 left:"10px",
 marginTop:"25px",
 fontFamily:"poppins"
}


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