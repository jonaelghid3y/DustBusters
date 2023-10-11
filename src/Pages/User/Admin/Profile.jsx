import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import cat from '/imgs/cat.jpg';
import { Button } from '../../../Components/Button';

export default function Profile() {

  // const [membercolor, setmembercolor] = useState("#c4a011");
  const [title, settitle] = useState("Mr. Garfield");
  const [name,setname] = useState("");
  const [lastname, setlastname] = useState("");

  return (
    <>

      <ProfileSide>

        <Circle>
          <Propic src={cat} alt="profileimg"></Propic>
        </Circle>
        <Username>{title}</Username>
        <h3 style={memberstyle}><b style={{ color: "#c4a011" }}>Gold</b>Member </h3>

      </ProfileSide>

      <Form>

        <label htmlFor="username" style={labelfield}>First name:</label>
        <input type="text" placeholder="Enter your Firstname..." style={inputfield} onChange={(e) => setname(e.target.value)} name="username"></input>
        <label htmlFor="lastname" style={labelfield}>Last name:</label>
        <input type="text" name="lastname" placeholder="Enter your Lastname..." style={inputfield} onChange={(e) => setlastname(e.target.value)}></input>
        <label htmlFor="email" style={labelfield}>Adress:</label>
        <input type="text" name="Adress" placeholder="Enter your Adress..." style={inputfield}></input>
        <label htmlFor="adress" style={labelfield}>Telephone:</label>
        <input type="text" name="Tel" placeholder="Enter your Telephone..." style={inputfield}></input>
        <label htmlFor="adress" style={labelfield}>E-mail:</label>
        <input type="text" name="Email" placeholder="Enter your E-mail..." style={inputfield}></input>
        <ButtonContainer>
          <Button primary size="small" label="Edit Profile" onClick={() => settitle(name + " " + lastname)}/>
        </ButtonContainer>
      </Form>
    </>
  );
}

const ProfileSide = styled.div`

width: 35%;
height: 100vh;
background-color: #d9d9d9;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center; 
align-items: center; 

`;

const ButtonContainer = styled.div`
margin-top:5%;
position:relative;
left:25%;
color:black;
border-radius:2%;
`;

const memberstyle = {
  fontSize: "22px",
  position: "relative",
  top: "17%",
  padding: "10px",
  borderRadius: "5px",
  fontFamily:"arial",
  color:"black",
};

const Form = styled.div`

width: 30%;
Height:630px;
display: flex;
justify-content: left;
align-items: left; 
flex-direction:column;
position:absolute;
left:55%;
top:15%;
@media (max-width: 768px) {
  width:65%;
  left:40%;
}
`;

const inputfield = {
  padding: "10px",
  marginTop: "3%",
  width: "80%",
  backgroundColor: "#d9d9d9",
  border:"none",
};

const labelfield = {
  fontSize: "18px",
  position: "relative",
  left: "10px",
  marginTop: "25px",
  fontFamily: "poppins",
};

const Propic = styled.img`
  width: 300px;
  height: auto;
  border-radius: 50%;
  margin:100px auto;
  @media (max-width: 790px) {
    width: 30vw;
    height:30vw;
  }
  `;

const Circle = styled.div`
  border-radius: 50%;
  border:4px outset gold;
  width: 300px;
  height: 300px;
  backgroun-color: black;
  display:flex;
  align-items: center;
  overflow: hidden;
  position:relative;
  bottom:15%;
  @media (max-width: 790px) {
    width: 30vw;
    height:30vw;
  }
  `;

const Username = styled.h1`
  position:absolute;
  bottom:25%;
  font-size:250%;
  fontFamily:Poppins;
  @media (max-width: 768px) {
    font-size:150%;
    bottom:32%;
  }
  `;
