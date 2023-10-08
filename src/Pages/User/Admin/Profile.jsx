import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import cat from '/imgs/cat.jpg';

export default function Profile() {

  const [membercolor, setmembercolor] = useState("gold");

  return (
    <>

      <ProfileSide>

        <div style={circle}>
          <img style={propic} src={cat} alt="profileimg"></img>
        </div>
        <h1 style={username}>Mr. Garfield </h1>
        <p style={paragraph}>14th April 1976</p>

        <h3 style={memberstyle}><b style={{ color: membercolor }}>Gold</b> Member</h3>

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
          <button style={ButtonDiv} >Edit Profile</button>
          <button style={ButtonDiv2}>Save</button>
        </ButtonContainer>
      </Form>

    </>
  );
}

const ProfileSide = styled.div`

width: 35%;
height: 100vh;
background-color: gray;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center; 
align-items: center; 
border-right:3px solid #333333;
`;

const ButtonContainer = styled.div`

display:flex;
flex-direction:row;
padding:3%;
gap:30px;
margin-top:2%;
width:75%;
`;

const memberstyle = {
  fontSize: "30px",
  position: "relative",
  top: "18%",
  padding: "10px",
  backgroundColor: "white",
  borderRadius: "5px",
};

const Form = styled.div`

width: 30%;
Height:630px;
border:5px solid black;
display: flex;
justify-content: left;
align-items: center; 
flex-direction:column;
position:absolute;
left:55%;
top:15%;
border-radius:13%;
background: linear-gradient(140deg, #f9d966, #d6ac17);
@media (max-width: 768px) {

  width:360px;
  left:40%;
 
}
`;

const ButtonDiv = {

  padding: "10px",
  width: "50%",
  borderRadius: "10px",
  boxShadow: "2px 3px  3px black",
  backgroundColor: "yellow",
  fontWeight: "700",
  fontFamily: "Arial",

};

const ButtonDiv2 = {

  padding: "10px",
  width: "50%",
  borderRadius: "10px",
  boxShadow: "2px 3px  3px black",
  backgroundColor: "green",
  fontWeight: "700",
  fontFamily: "Arial",

};

const inputfield = {
  padding: "10px",
  marginTop: "3%",
  width: "70%",
  border: "none",
  borderBottom: "2px solid black",
  backgroundColor: "transparent",

};

const labelfield = {
  fontSize: "18px",
  position: "relative",
  left: "10px",
  marginTop: "25px",
  fontFamily: "poppins"
};

const propic = {
  width: "300px",
  height: "auto",
  borderRadius: "50%",
  margin: "100px auto",

};

const circle = {
  borderRadius: '50%',
  border: '4px outset gold',
  width: '300px',
  height: '300px',
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  overflow: "hidden",

};

const username = {

  fontFace: "Poppins",
  fontSize: "38px",
  position: "absolute",
  top: "20%"
};

const paragraph = {
  position: "absolute",
  top: "28%",
  color: "black",
  opacity: "0.4",
};