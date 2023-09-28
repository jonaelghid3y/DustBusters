import React from 'react'
import styled from 'styled-components'
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <Styledfooter>
   


<Footercontainer1>

<h3 style={footerheader}>Öppettider</h3>
<br></br>
<hr style={{color:"orange",}}></hr>
<br></br>
<ul style={liststyle}>
<li>Mån - Fre: 07:00 -16:00</li>
<br></br>
<li>Lör: 09:00 - 16:00</li>
<br></br>
<li>Sön: 09:00 - 16:00</li>

</ul>

</Footercontainer1>

<Footercontainer2>

<h3 style={footerheader}>Följ DustBusters</h3>
<br></br>
<hr style={{color:"orange",}}></hr>
<br></br>
<ul style={liststyle}>

<div>
<i className="fa fa-facebook"> Facebook</i>
</div>
<br></br>

<div>
<i className="fa fa-instagram"> Instagram</i>
</div>

<br></br>
<div>
<i className="fa fa-linkedin"> LinkedIn</i>
</div>
<br></br>
<div>
<i className="fa fa-twitter"> Twitter</i>
</div>

</ul>
</Footercontainer2>

<Footercontainer3>

<h3 style={footerheader}>Kontakt</h3>
<br></br>
<hr style={{color:"orange",}}></hr>
<ul style={liststyle}>
<br></br>
<li>Tel: +46 347 82 83</li>
<br></br>
<li>E-mail: DustBusters@gmail.se</li>
<br></br>
<li>Adress: Emporiumvägen 20</li>

</ul>
</Footercontainer3>

    </Styledfooter>
  )

}

const footerheader = {
  color:"white",
  fontFamily:"Garamond",
  textAlign:"left",
  fontSize:"30px",
}

const liststyle = {
  listStyle:"none",
  margin:"10px",
  padding:"2px",
  color:"white",
  fontSize:"20px",
  fontFamily:"Georgia",
}
const Styledfooter = styled.footer`
  width: 100%;
  // min-height: 40vh;
  display:flex;
  justify-content:space-around;
  background:#333333;
  gap:10px;
  flex-direction:row;
`

const Footercontainer1 = styled.footer`
height:240px;
width:25rem;
margin:40px;
margin-top:70px;
`

const Footercontainer2 = styled.footer`
height:240px;
width:25rem;
margin:40px;
margin-top:70px;
`

const Footercontainer3 = styled.footer`
height:240px;
width:25rem;
margin:40px;
margin-top:70px;
`
export default Footer