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
    <div>
      <Container>

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
      </Container>
    </div>
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
@media (max-width: 768px) {
  width:100%;
  left:20%;
}
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
margin-top: 5%;
color: black;
border-radius: 2%;
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
align-items: center; 
flex-direction:column;
position:relative;
left:20%;
top:3em; 
@media (max-width: 768px) {
  width:65%;
  left:20%;
  top:0em;
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
  `;

const Username = styled.h1`
  position:absolute;
  bottom:25%;
  font-size:250%;
  fontFamily:Poppins;
  @media (max-width: 768px) {
    bottom:26%;
  }
  `;

const Container = styled.div`
display:flex;
flex-direction:row;
@media (max-width: 768px) {
 flex-direction:column;
}
  `;