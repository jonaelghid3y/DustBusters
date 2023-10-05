import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';



function Services() {

  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://api-s5hih6nmta-uc.a.run.app/services')
      const data = await response.json();
      setfetchedData(data);


    } catch (error) {
      console.log(error);
    }
  };



  const renderedData = fetchedData.map((item, index) => (

    <div key={item.id} style={index % 2 === 0 ? component : component1}>



      <img style={images} src={item.imgURL} alt="cleaning"></img>

      <div style={StyledTextContainer}>

        <h1>{item.title}</h1>
        <br></br>
        <p style={paragraph}>{item.description}</p>
        <h4 style={pricestyle}>Price: {item.price}:-/h</h4>

      </div>



    </div>

  ));



  return (
    <>

      {renderedData}

    </>
  );



}



const StyledTextContainer = {
  width: "50%",
  height: "70%",
  position: "relative",
  top: "60px",
  padding: "25px",
  fontFamily: "poppins",
  overflowY: "auto",
  zIndex: "0",
};

const images = {

  height: "auto",
  minWidth: "25%",
  borderRadius: "20px",
  margin: "60px",
};

const component = {
  width: "100%",
  height: "60vh",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
}

const pricestyle = {

  position: "relative",
  top: "15%",
  float: "right",
  textDecoration: "underline",
  textUnderlineOffset: "10px",
  textDecorationColor: "#FFD530",
  textDecorationWidth: "30px",
};

const component1 = {
  width: "100%",
  height: "60vh",
  backgroundColor: "#333333",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row-reverse",
  color: "white",
};

const paragraph = {
  fontSize: "1rem",
};

export default Services;
