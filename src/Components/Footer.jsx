import React from 'react';
import styled from 'styled-components';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer1>
        <h3 style={{ ...footerHeader, color: '#232323' }}>Opening hours</h3>
        <hr style={{ borderColor: 'rgba(255, 165, 0, 0.1)' }} />
        <ul style={listStyle}>
          <li>Mon - Fri: 07:00 -16:00</li>
          <li>Sat: 09:00 - 16:00</li>
          <li>Sun: 09:00 - 16:00</li>
        </ul>
      </FooterContainer1>

      <FooterContainer2>
        <h3 style={{ ...footerHeader, color: '#232323' }}>Follow DustBusters</h3>
        <hr style={{ borderColor: 'rgba(255, 165, 0, 0.1)' }} />
        <ul style={listStyle}>
          <div>
            <AiFillFacebook color='black' /> Facebook
          </div>
          <div>
            <FaInstagram color='black'  /> Instagram
          </div>
          <div>
            <FaLinkedin color='black'  /> LinkedIn
          </div>
          <div>
            <FaTwitter color='black'  /> Twitter
          </div>
        </ul>
      </FooterContainer2>

      <FooterContainer3>
        <h3 style={{ ...footerHeader, color: '#232323' }}>Contacts</h3>
        <hr style={{ borderColor: 'rgba(255, 165, 0, 0.1)' }} />
        <ul style={listStyle}>
          <li>Tel: +46 347 82 83</li>
          <li>E-mail: DustBusters@gmail.se</li>
          <li>Adress: Emporiumvägen 20</li>
        </ul>
      </FooterContainer3>
    </StyledFooter>
  );
}

const footerHeader = {
  fontFamily: 'Poppins',
  textAlign: 'left',
  fontSize: '22px',
};

const listStyle = {
  listStyle: 'none',
  margin: '10px 0',
  padding: '2px',
  color: '#232323',
  fontFamily: 'Poppins',
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #D9D9D9;
  gap: 10px;
  
`;

const FooterContainer1 = styled.footer`
  flex: 1;
  max-width: 25rem;
  margin: 20px;
  color: black;
`;

const FooterContainer2 = styled.footer`
  flex: 1;
  max-width: 25rem;
  margin: 20px;
`;

const FooterContainer3 = styled.footer`
  flex: 1;
  max-width: 25rem;
  margin: 20px;
`;

export default Footer;