import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer1>
        <h3 style={{ ...footerHeader, color: '#FFD530' }}>Opening hours</h3>
        <hr style={{ color: 'orange' }} />
        <ul style={listStyle}>
          <li>Mon - Fri: 07:00 -16:00</li>
          <li>Sat: 09:00 - 16:00</li>
          <li>Sun: 09:00 - 16:00</li>
        </ul>
      </FooterContainer1>

      <FooterContainer2>
        <h3 style={{ ...footerHeader, color: '#FFD530' }}>Follow DustBusters</h3>
        <hr style={{ color: 'orange' }} />
        <ul style={listStyle}>
          <div>
            <i className="fa fa-facebook"> Facebook</i>
          </div>
          <div>
            <i className="fa fa-instagram"> Instagram</i>
          </div>
          <div>
            <i className="fa fa-linkedin"> LinkedIn</i>
          </div>
          <div>
            <i className="fa fa-twitter"> Twitter</i>
          </div>
        </ul>
      </FooterContainer2>

      <FooterContainer3>
        <h3 style={{ ...footerHeader, color: '#FFD530' }}>Contacts</h3>
        <hr style={{ color: 'orange' }} />
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
  fontSize: '30px',
};

const listStyle = {
  listStyle: 'none',
  margin: '10px',
  padding: '2px',
  color: 'white',
  fontSize: '20px',
  fontFamily: 'Poppins',
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #333333;
  gap: 10px;
`;

const FooterContainer1 = styled.footer`
  flex: 1;
  max-width: 25rem;
  margin: 20px;
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