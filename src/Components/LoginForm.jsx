import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../Components/Button';

const LoginForm = ({title, key, label, text, toggleLink, setIsRegistering, isRegistering, handleClick}) => {
  console.log(Object.groupBy);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <StyledFormHeadline>
        {title}
      </StyledFormHeadline>
      <StyledForm>
        <StyledFormDivs>
          <label> Username:</label>
          <StyledInput type="text" name='username' value={username} autoComplete='user-name'  onChange={(e) => setUsername(e.target.value)} />
        </StyledFormDivs>
        <StyledFormDivs>
          <label> Password:</label>
          <StyledInput type="password" name='password'value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
        </StyledFormDivs>
        <StyledP>{text}<Link onClick={toggleForm}>{toggleLink}</Link></StyledP>
        <Button primary size="small" label={label} onClick={()=>handleClick(username, password) } />
      </StyledForm>
    </motion.div>
  );
};

const StyledFormHeadline = styled.h3`

font-size: 30px;
margin-bottom: 20px;
`;

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black
  width: 80%;
  height: 80%;
  gap: 25px;
`;

const StyledFormDivs = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`;

const StyledInput = styled.input`
font-size: 16.5px;
width: 20vw;
height: 5vh;
@media (max-width: 768px) {
  width: 60vw;
 }
`;
const StyledP = styled.h3`
font-size:15px;
font-weight: normal;
text-align: center;
`;

export default LoginForm;
